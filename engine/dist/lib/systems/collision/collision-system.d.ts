import { Entity } from '../../scene/entity';
import { System } from '../../systems/system';
export declare class CollisionSystem extends System {
    name: string;
    currentEntityCollisions: Map<any, any[]>;
    dispose(entity: Entity): void;
    update(): void;
    private resolveCollision;
}
//# sourceMappingURL=collision-system.d.ts.map