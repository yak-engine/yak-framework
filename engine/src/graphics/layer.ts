/**
 * Contains information related to the render layer.
 */
export class Layer {
    constructor(
        public name?: string,
        public enabled?: boolean,
        public locked?: boolean,
        public order?: number
    ) {

    }
}