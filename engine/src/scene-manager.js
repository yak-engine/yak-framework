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
import EntityManager from './entity-manager';
import Configuration from './configuration';
import Tileset from './graphics/tileset';
import LoadSceneReturn from './models/returns/load-scene-return';
var SceneManager = /** @class */ (function () {
    function SceneManager() {
    }
    SceneManager.load = function (sceneName, baseUrl) {
        if (baseUrl === void 0) { baseUrl = null; }
        return __awaiter(this, void 0, void 0, function () {
            var scenePath, response, scene, tilesets, _i, _a, tilesetName, tilesetImage, tilesetPath;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('[ENGINE]: Started loading scene.');
                        scenePath = "scenes\\" + sceneName + ".json";
                        if (baseUrl) {
                            scenePath = baseUrl + "\\" + scenePath;
                        }
                        console.log(scenePath);
                        return [4 /*yield*/, fetch(scenePath)];
                    case 1:
                        response = _b.sent();
                        console.log('[ENGINE]: Scene feteched successfully;');
                        return [4 /*yield*/, response.json()];
                    case 2:
                        scene = _b.sent();
                        console.log('[ENGINE]: Scene parsed successfully;');
                        // Parsed entities to typescript objects.
                        EntityManager.getInstance().parseEntities(scene);
                        console.log('[ENGINE]: Scene entities parsed successfully.');
                        tilesets = new Array();
                        _i = 0, _a = scene.tilesets;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        tilesetName = _a[_i];
                        tilesetImage = new Image();
                        tilesetPath = "tilesets/" + tilesetName;
                        if (Configuration.baseUrl) {
                            tilesetPath = "file://" + Configuration.baseUrl.replace(/\\/g, "/") + "/" + tilesetPath;
                        }
                        tilesetImage.src = tilesetPath;
                        console.log(tilesetImage.src);
                        return [4 /*yield*/, tilesetImage.decode()];
                    case 4:
                        _b.sent();
                        console.log(tilesetImage);
                        tilesets.push(new Tileset(tilesetImage));
                        console.log('[TILESET LOADED]');
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        console.log(tilesets);
                        return [2 /*return*/, new LoadSceneReturn(scene, tilesets)];
                }
            });
        });
    };
    return SceneManager;
}());
export default SceneManager;
