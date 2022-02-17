import { ComponentManager } from 'lib/core/component-manager';
import { TilemapComponent } from 'lib/components/TilemapComponent';

export class TilemapComponentManager extends ComponentManager<TilemapComponent> {
    name: string = 'TilemapComponentManager';
}