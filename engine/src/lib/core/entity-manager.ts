import { ManagerFactory } from '../core/manager-factory';
import { Camera } from '../graphics/camera';
import { Entity } from '../scene/entity';
import { Scene } from '../scene/scene';
import { Point } from '../primitives/point';
import { Transform } from '../primitives/transform';
import { Logger } from '../logging/logger';

// Bulk components/manager imports.
import { TagComponent } from '../scene/components';
import { TransformComponent } from '../scene/components';
import { ColliderComponent } from '../scene/components';
import { CameraComponent } from '../scene/components';

export class EntityManager {
    private static characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    private static instance: EntityManager;

    public static getInstance(): EntityManager {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }

        return EntityManager.instance;
    }

    public entities: Entity[] = [];

    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    public create(): Entity {
        let entity: Entity = new Entity();

        this.entities.push(entity);
        
        var id: string = '';

        for (var i = 0; i < 8; i++) {
            var characterIndex = Math.floor(Math.random() * EntityManager.characters.length);
            id += EntityManager.characters.substring(characterIndex, characterIndex + 1);
        }
        
        entity.id = id;

        // Add the required components to the entity.
        entity.addComponent(new TagComponent(`entity${entity.id}`));
        entity.addComponent(new TransformComponent(Transform.empty));

        return entity;
    }

    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     * 
     * @param entity The entity to dispose of.
     */
    public dispose(entity: Entity): void {
        let index = this.entities.findIndex(x => x.id === entity.id);

        if (index !== -1) {
            // Remove all references stored in each of the component manager instances.
            // ManagerFactory.managers.forEach((manager: ComponentM) => manager.dispose(entity));
            // SystemManager.systems.forEach((system: System) => system.dispose(entity));

            this.entities.splice(index, 1);
        }
    }

    /**
     * Loads the entities.
     * @param sceneConfig 
     */
    public unpackEntityManifests(sceneConfig: Scene): void {
        let parsedEntities: Entity[] = [];

        // Bootstrap entities.
        sceneConfig.entityManifests.forEach((entityManifest: any) => {
            let entity = new Entity();

            entity.id = entityManifest.id;
            entity.enabled = entityManifest.enabled;

            for(let sourceProperty in entityManifest) {
                let sourceComponent = entityManifest[sourceProperty];

                if (sourceComponent) {
                    if (sourceProperty === 'spriteRendererComponent') {
                        entity.addComponent({
                            layer: sourceComponent.layer, 
                            tileset: sourceComponent.tileset, 
                            row: sourceComponent.row, 
                            column: sourceComponent.column
                        });
                    }
                    else if (sourceProperty === 'transformComponent') {
                        entity.addComponent(new TransformComponent(new Transform(sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                    else if (sourceProperty === 'cameraComponent') {
                        let camera: Camera = new Camera();

                        camera.viewport = new Transform(sourceComponent.camera.viewport.x, sourceComponent.camera.viewport.y, sourceComponent.camera.viewport.width, sourceComponent.camera.viewport.height);
                        camera.max = new Point(sourceComponent.camera.max.x, sourceComponent.camera.max.y);

                        entity.addComponent(new CameraComponent(camera));
                    }
                    else if (sourceProperty === 'tagComponent') {
                        entity.addComponent(new TagComponent(sourceComponent.name));
                    }
                    else if (sourceProperty === 'colliderComponent') {
                        entity.addComponent(new ColliderComponent(sourceComponent.transform, sourceComponent.isTrigger));
                    }
                }
            }

            Logger.info(`Scene entity ${entityManifest.id} parsed`, EntityManager.name);

            parsedEntities.push(entity);
        });

        EntityManager.getInstance().entities = parsedEntities;

        // console.log(EntityManager.getInstance().entities[0].getComponent<TagComponent>(TagComponent));

        Logger.info(`Finished parsing ${parsedEntities.length} entities`, EntityManager.name);
    }

    /**
     * TODO: Move to the editor.
     * 
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    public packEntities(): any[] { // EntityManifest
        // let entityConfigs: Entity[] = [];

        // EntityManager.getInstance().entities.forEach((entity) => {
        //     let entityConfig: any = {};

        //     Constants.componentTypes.forEach((componentType) => {
        //         let componentInstance: Component = entity.getComponent(componentType);

        //         if (componentInstance) {
        //             entityConfig[componentType.name.charAt(0).toLowerCase() + componentType.name.slice(1)] = componentInstance;
        //         }
        //     });

        //     if (Object.keys(entityConfig).length !== 0 && entityConfig.constructor === Object) {
        //         entityConfigs.push(entityConfig);
        //     }
        // });

        // return entityConfigs;

        return [];
    }

    public getComponents(entity: Entity): any[] {
        let components: any[] = [];

        ManagerFactory.managers.forEach((manager) => {
            if (manager.map[entity.id]) {
                components.push(manager.instances[manager.map[entity.id]])
            }
        });

        return components;
    }
}