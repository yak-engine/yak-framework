import Entity from '../../models/entity';
import System from '../system';
export default class CollisionSystem extends System {
    name: string;
    currentEntityCollisions: Map<any, any[]>;
    dispose(entity: Entity): void;
    update(): void;
    private resolveCollision;
}
//# sourceMappingURL=collision-system.d.ts.map