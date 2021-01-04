import Application from '../../engine/src/application';
import ColliderComponent from '../../engine/src/components/collider/ColliderComponent';
import Entity from '../../engine/src/components/entity';
import EntityManager from '../../engine/src/components/EntityManager';
import MaterialComponent from '../../engine/src/components/material/MaterialComponent';
import SpriteRendererComponent from '../../engine/src/components/sprite-renderer/SpriteRendererComponent';
import TagComponent from '../../engine/src/components/tag/TagComponent';
import TransformComponent from '../../engine/src/components/transform/TransformComponent';
import Configuration from '../../engine/src/configuration';
import Input from '../../engine/src/graphics/input';
import Transform from '../../engine/src/primitives/transform';
import Time from '../../engine/src/time';
import ScriptComponent from '../../engine/src/components/script/ScriptComponent';
import ScriptableEntity from '../../engine/src/systems/script/ScriptableEntity';
import ManagerFactory from '../../engine/src/components/ManagerFactory';

export default class GameClone extends Application {
    constructor() {
        super();

        Configuration.width = 640 * 2;
        Configuration.height = 360 * 2;
    }

    public onStart(): void {
        // Create player controlled ship.
        let shipEntity: Entity = EntityManager.getInstance().create();
        shipEntity.addComponent(new ScriptComponent(ShipGeneratorController));
        shipEntity.addComponent(new ScriptComponent(PlayerFireController));

        // Create enemy generator for the enemy grid above the player.
        let enemyGeneratorEntity: Entity = EntityManager.getInstance().create();
        enemyGeneratorEntity.addComponent(new ScriptComponent(EnemyGeneratorController));

        // Create cover generator for creating the cover directly above the player.
        let coverGeneratorEntity: Entity = EntityManager.getInstance().create();
        coverGeneratorEntity.addComponent(new ScriptComponent(CoverItemGeneratorController));
    }
}

class BulletController extends ScriptableEntity {
    public bulletSpeed: number = 256;

    public onCreate(): void {
        console.log('ON BULLET CREATED');

        this.addComponent(new SpriteRendererComponent());
        this.addComponent(new MaterialComponent('#DD5145', 1));
        this.addComponent(new ColliderComponent(Transform.empty, true));
        
        (this.entity.getComponent(TagComponent) as TagComponent).name = `bullet`;
    }

    public onTriggerEnter(collisionEntity: Entity): void {
        console.log(collisionEntity);

        if ((collisionEntity.getComponent(TagComponent) as TagComponent).name === 'enemy') {
            console.log('[BULLET HIT ENEMY]');

            // console.log(this.entity);
            // console.log(collisionEntity);

            EntityManager.getInstance().destroy(collisionEntity);
        }

        // console.log(this.entity);
        // console.log(collisionEntity);
        // console.log('bullet trigger enter');
    }

    public update(): void {
        let transformComponent = this.entity.getComponent(TransformComponent) as TransformComponent;

        if(transformComponent) {
            let transform: Transform = transformComponent.transform;

            // If bullet goes off screen destroy that bullet entity.
            if (transform.y + 32 < 0) {
                console.log('[BULLET DESTROYED OFF SCREEN]');
                EntityManager.getInstance().destroy(this.entity);
            }
            else {
                transform.y -= this.bulletSpeed * Time.deltaTime;
            }
        }
        else {
            console.log('transform no longer exists');
        }

        // console.log(ManagerFactory.get(TransformComponent.name));
    }
}

class PlayerFireController extends ScriptableEntity {
    isEligibleForFire: boolean = true;

    public onCreate(): void {

    }

    public update(): void {
        if (Input.isPressed('space')) {
            if (this.isEligibleForFire) {
                this.isEligibleForFire = false;

                let bulletEntity: Entity = EntityManager.getInstance().create();
                bulletEntity.addComponent(new ScriptComponent(BulletController));
    
                let transform: Transform = (bulletEntity.getComponent(TransformComponent) as TransformComponent).transform;
                let shipTransform: Transform = (this.entity.getComponent(TransformComponent) as TransformComponent).transform;
    
                transform.x = shipTransform.x + (shipTransform.width / 2);
                transform.y = shipTransform.y;
                transform.width = 8;
                transform.height = 8;
            }
        }
        else {
            this.isEligibleForFire = true;
        }
    }
}

class CoverItemGeneratorController extends ScriptableEntity {
    public numberOfCoverItems: number = 4;
    public coverItemWidth: number = 128;
    public coverItemHeight: number = 64
    public coverItemColor: string = '#21D18B'

    public onCreate(): void {
        for (let i = 0; i < this.numberOfCoverItems; i++) {
            let coverEntity: Entity = EntityManager.getInstance().create();

            coverEntity.addComponent(new SpriteRendererComponent());
            coverEntity.addComponent(new MaterialComponent(this.coverItemColor));

            let transform: Transform = (coverEntity.getComponent(TransformComponent) as TransformComponent).transform;
            
            transform.x = ((Configuration.width / 4) * i) + 84;
            transform.y = (Configuration.height - 192);
            transform.width = this.coverItemWidth;
            transform.height = this.coverItemHeight;
        }
    }

    public update(): void {

    }
}

class ShipGeneratorController extends ScriptableEntity {
    public shipTransform: Transform;
    public shipColor: string = '#21D18B';
    public shipWidth: number = 32;
    public shipHeight: number = 32;
    public shipSpeed: number = 256;

    public onCreate(): void {
        console.log('CREATE SHIP');

        (this.entity.getComponent(TagComponent) as TagComponent).name = 'ship';

        this.entity.addComponent(new SpriteRendererComponent());
        this.entity.addComponent(new MaterialComponent(this.shipColor));

        this.shipTransform = (this.entity.getComponent(TransformComponent) as TransformComponent).transform;

        this.entity.addComponent(new ColliderComponent(this.shipTransform, true));

        this.shipTransform.x = (Configuration.width / 2) - this.shipHeight;
        this.shipTransform.y = Configuration.height - (this.shipHeight * 2);
        this.shipTransform.width = this.shipWidth;
        this.shipTransform.height = this.shipHeight;
    }

    public update(): void {
        let horizontal: number = Input.horizontal();

        if (horizontal !== 0) {
            this.shipTransform.x += this.shipSpeed * Time.deltaTime * Input.horizontal();
        }

        this.shipTransform.clampX(0, Configuration.width - this.shipWidth);
    }
}

class EnemyGeneratorController extends ScriptableEntity {
    public gridGap: number = 16;
    public groupYOffset: number = 1;
    public rows: number = 5;
    public columns: number = 11;
    public enemyWidth: number = 32;
    public enemyHeight: number = 32;
    public movementSpeed: number = 128;

    private _movementDirection: number = 1;
    private _increaseYOffset: boolean = false;
    private _enemyTransforms: Transform[] = [];

    // Entity references.
    private _shipTransform: Transform;

    public onCreate(): void {
        // this._shipTransform = (EntityManager.getInstance().entities.find(x => x.id === 1).getComponent(TransformComponent) as TransformComponent).transform;

        let enemyGridOffsetX: number = ((this.columns * this.enemyWidth) + (this.columns * this.gridGap)) / 2;
        let enemyGridOffsetY: number = ((this.rows * this.enemyHeight) + (this.rows * this.gridGap)) / 2;

        let int: number = 0;

        for (let row = 0; row < 5; row++) {
            for (let column = 0; column < 11; column++) {
                int++;

                let enemyEntity: Entity = EntityManager.getInstance().create();

                enemyEntity.addComponent(new SpriteRendererComponent());
                enemyEntity.addComponent(new ColliderComponent(Transform.empty, true));
                (enemyEntity.getComponent(TagComponent) as TagComponent).name = `enemy`;
                enemyEntity.addComponent(new MaterialComponent("hsl(" + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' +  (85 + 10 * Math.random()) + '%)', 1));

                let transform: Transform = (enemyEntity.getComponent(TransformComponent) as TransformComponent).transform;

                transform.x = ((this.enemyWidth * column) + (column * this.gridGap)) + (Configuration.width / 2) - enemyGridOffsetX;
                transform.y = ((this.enemyHeight * row) + (row * this.gridGap)) + (Configuration.height / 3.5) - enemyGridOffsetY;

                transform.width = this.enemyWidth;
                transform.height = this.enemyHeight;

                this._enemyTransforms.push(transform);
            }   
        }

        console.log(int);
        console.log(ManagerFactory.get(ColliderComponent.name));
    }

    public update(): void {
        if (this._movementDirection === -1 && this._enemyTransforms[0].x <= 0) {
            this._movementDirection = 1;
            this._increaseYOffset = true;
        }
        else if (this._movementDirection === 1 && (this._enemyTransforms[this._enemyTransforms.length - 1].x + 32) >= Configuration.width) {
            this._movementDirection = -1;
            this.groupYOffset++;
            this._increaseYOffset = true;
        }

        // (this._enemyTransforms[this._enemyTransforms.length - 1].y + 32) < this._shipTransform.y
        if (true) {
            this._enemyTransforms.forEach((enemyTransform: Transform) => {
                enemyTransform.x += this.movementSpeed * Time.deltaTime * this._movementDirection;
                
                if (this._increaseYOffset) {
                    enemyTransform.y += 32;
                }
            });
    
            this._increaseYOffset = false;
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let gameClone = new GameClone();
    gameClone.start();
});