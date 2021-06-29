var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Application from '../../engine/src/application';
import EntityManager from '../../engine/src/entity-manager';
import SpriteRendererComponent from '../../engine/src/components/SpriteRendererComponent';
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._entityManager = EntityManager.getInstance();
        return _this;
    }
    Game.prototype.onStart = function () {
        var entity = this._entityManager.create();
        entity.addComponent(new SpriteRendererComponent(0, 0, 0, 0));
    };
    return Game;
}(Application));
export default Game;
Application.setType(Game);
