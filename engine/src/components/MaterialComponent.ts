export default class MaterialComponent {
    fillStyle: string;
    alpha: number = 1;

    constructor(fillStyle?: string, alpha?: number) {
        this.fillStyle = fillStyle;
        this.alpha = alpha;
    }
}