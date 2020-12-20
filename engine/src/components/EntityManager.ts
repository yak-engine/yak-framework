import Entity from "./entity";
import Transform from "../primitives/transform";
import TagComponent from "./tag/TagComponent";
import TransformComponent from "./transform/TransformComponent";

export default class EntityManager {
    private static instance: EntityManager;

    public static getInstance(): EntityManager {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }

        return EntityManager.instance;
    }

    public entities: Entity[] = [];

    public create(): Entity {
        let entity: Entity = new Entity();
        entity.id = this.entities.length;
        this.entities.push(entity);

        this.addRequiredComponents(entity);

        return entity;
    }

    public destroy(entity: Entity): void {
        let index = this.entities.findIndex(x => x.id === entity.id);

        if (index !== -1) {
            this.entities.splice(index, 1);
        }
    }

    private addRequiredComponents(entity: Entity): void {
        entity.addComponent<TagComponent>(new TagComponent());
        entity.addComponent<TransformComponent>(new TransformComponent(Transform.empty));
    }
}