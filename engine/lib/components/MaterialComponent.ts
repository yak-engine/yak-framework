/**
 * Material component contains color and alpha data for an entity. 
 */
export class MaterialComponent {
    /**
     * The fill color for the entity i.e (#ffffff).
     * 
     * @example
     * fillStyle = '#ffffff';
     */
    public fillStyle?: string;

    /**
     * The alpha (opacity) of the entity.
     * 
     * @remarks
     * The alpha can be set between 0 and 1.
     * 
     * @example
     * alpha = 1;
     */
    public alpha: number = 1;
}