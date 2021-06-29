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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Time from './time';
import CollisionSystem from './systems/collision/collision-system';
import SceneManager from './scene-manager';
import Configuration from './configuration';
import SystemManager from './system-manager';
import ManagerFactory from './manager-factory';
import TagComponent from './components/TagComponent';
import TransformComponent from './components/TransformComponent';
import CameraComponent from './components/CameraComponent';
import MaterialComponent from './components/MaterialComponent';
import SpriteRendererComponent from './components/SpriteRendererComponent';
import ColliderComponent from './components/ColliderComponent';
import ImageComponent from './components/ImageComponent';
import ImageComponentManager from './components/managers/ImageComponentManager';
import ColliderComponentManager from './components/managers/ColliderComponentManager';
import SpriteRendererComponentManager from './components/managers/SpriteRendererComponentManager';
import CameraComponentManager from './components/managers/CameraComponentManager';
import TransformComponentManager from './components/managers/TransformComponentManager';
import TagComponentManager from './components/managers/TagComponentManager';
import MaterialComponentManager from './components/managers/MaterialComponentManager';
import ScriptSystem from './systems/script/ScriptSystem';
import ScriptComponent from './components/ScriptComponent';
import ScriptComponentManager from './components/managers/ScriptComponentManager';
import WebGLRenderer from './graphics/renderer/webgl-renderer';
import CanvasRenderer from './graphics/renderer/canvas-renderer';
var Application = /** @class */ (function () {
    /**
     * The main constructor.
     */
    function Application() {
        // Register systems.
        SystemManager.register(new CollisionSystem());
        SystemManager.register(new ScriptSystem());
        // Register components.
        ManagerFactory.register(TagComponent, TagComponentManager);
        ManagerFactory.register(TransformComponent, TransformComponentManager);
        ManagerFactory.register(CameraComponent, CameraComponentManager);
        ManagerFactory.register(MaterialComponent, MaterialComponentManager);
        ManagerFactory.register(SpriteRendererComponent, SpriteRendererComponentManager);
        ManagerFactory.register(ColliderComponent, ColliderComponentManager);
        ManagerFactory.register(ImageComponent, ImageComponentManager);
        ManagerFactory.register(ScriptComponent, ScriptComponentManager);
    }
    Application.setType = function (type) {
        window.addEventListener('DOMContentLoaded', function (event) {
            var applicationInstance = new type();
            applicationInstance.init();
        });
    };
    /**
     * Actually begins the game instance. Processes the configuration.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    Application.prototype.init = function (renderType) {
        return __awaiter(this, void 0, void 0, function () {
            var engineConfigPath, urlParams, engineConfig;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!renderType) {
                            renderType = 'canvas';
                        }
                        engineConfigPath = 'manifest.json';
                        urlParams = new URLSearchParams(location.search);
                        // Used in the editor.
                        if (urlParams.has('baseUrl')) {
                            Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
                            engineConfigPath = Configuration.baseUrl + "/" + engineConfigPath;
                        }
                        return [4 /*yield*/, fetch(engineConfigPath).catch(this.handleLoadError)];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        engineConfig = _a.sent();
                        // Load the first scene and init the renderer with the default scene and tilesets.
                        return [4 /*yield*/, SceneManager.load(engineConfig.scenes[0]).then(function (loadSceneRtn) {
                                console.log('[SCENE LOADED]');
                                console.log(loadSceneRtn.tilesets.length);
                                console.log(Configuration.baseUrl);
                                if (renderType === 'webgl') {
                                    _this.renderer = new WebGLRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
                                }
                                else {
                                    _this.renderer = new CanvasRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
                                }
                                _this.renderer.init();
                                _this.onStart();
                                // Start the main application loop.
                                window.requestAnimationFrame(function (time) { return _this.mainLoop(time); });
                            })];
                    case 3:
                        // Load the first scene and init the renderer with the default scene and tilesets.
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Application.prototype.handleLoadError = function (response) {
        console.warn(response);
        return new Response(JSON.stringify({
            code: 500,
            message: response.error
        }));
    };
    /**
     * The main loop contains all the rendering logic will be called from within this function.
     *
     * @param time The time between the animation frames.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    Application.prototype.mainLoop = function (time) {
        var _this = this;
        // Update peripheral data (time, mouse, etc) for use within the render systems.
        Time.calculateDeltaTime(time);
        // Mouse.update(this.renderer.mousePosition);
        // Iterate through any registered systems and execute the update method for each system.
        // SystemManager.systems.forEach((system: any) => {
        //     system.update();
        // });
        // Execute the draw method within the renderer.
        this.renderer.draw();
        // Request a new animation frame.
        window.requestAnimationFrame(function (time) { return _this.mainLoop(time); });
    };
    return Application;
}());
export default Application;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super.call(this) || this;
    }
    Game.prototype.onStart = function () {
    };
    return Game;
}(Application));
document.addEventListener('DOMContentLoaded', function (event) {
    var game = new Game();
    game.init('canvas');
});
