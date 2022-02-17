import { ComponentManager } from 'src/lib/component-manager';
import { TilemapComponent } from 'src/lib/components/TilemapComponent';

export class TilemapComponentManager extends ComponentManager<TilemapComponent> {
    name: string = 'TilemapComponentManager';
}