/**
 * Contains information related to the render layer.
 */
export default class Layer {
    /**
     * The friendly name of the layer.
     */
    name: string;
    /**
     * Determines if the layer will be rendered
     */
    enabled: boolean;
    /**
     * Determines if entities within the layer can be interacted with.
     */
    locked: boolean;
    /**
     * The order in which the layer will be rendered.
     */
    order: number;
}
//# sourceMappingURL=layer.d.ts.map