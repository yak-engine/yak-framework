import { Transform } from 'src/lib/primitives/transform';

export default function areTransformsEqual(sourceTransform: Transform, targetTransform: Transform): boolean {
    return sourceTransform.x === targetTransform.x && sourceTransform.y === targetTransform.y && sourceTransform.width === targetTransform.width && sourceTransform.height === targetTransform.height;
}