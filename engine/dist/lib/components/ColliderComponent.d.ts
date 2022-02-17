import { Transform } from 'src/lib/primitives/transform';
/**
 * The collider component component enables object interaction.
 */
export declare class ColliderComponent {
    transform: Transform;
    isTrigger?: boolean | undefined;
    private _points;
    /**
     *
     * @param transform
     * @param isTrigger
     */
    constructor(transform: Transform, isTrigger?: boolean | undefined);
}
//# sourceMappingURL=ColliderComponent.d.ts.map