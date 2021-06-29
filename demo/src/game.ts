import Application from '../../engine/src/application';
import SpriteRendererComponent from '../../engine/src/components/SpriteRendererComponent';
import EntityManager from '../../engine/src/entity-manager';
import { Logger, LogThreshold } from '../../engine/src/logging/logger';

Logger.thresholds = [LogThreshold.DATA, LogThreshold.DEBUG, LogThreshold.INFO, LogThreshold.ERROR, LogThreshold.CRITICAL];

export default class Game extends Application {
    private _entityManager: EntityManager = EntityManager.getInstance();

    public onStart(): void {
        let entity = this._entityManager.create();
        entity.addComponent(new SpriteRendererComponent(0, 0, 0, 0));
    }
}

Application.setType(Game);