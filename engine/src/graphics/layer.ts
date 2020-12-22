export default class Layer {
    name: string;

    enabled: boolean = true;

    locked: boolean = false;

    /**
     * TODO: Remove this property there is going to be a dedicated tilemap component.
     */
    tileset: number;

    /**
     * TODO: Remove this property there is going dedicated components to handle storing this information.
     */
    sprites: Array<number> = new Array();

    order: number;
}