/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/application.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application.ts":
/*!****************************!*\
  !*** ./src/application.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/time.ts");
/* harmony import */ var _systems_collision_collision_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./systems/collision/collision-system */ "./src/systems/collision/collision-system.ts");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-manager */ "./src/scene-manager.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/configuration.ts");
/* harmony import */ var _system_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-manager */ "./src/system-manager.ts");
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manager-factory */ "./src/manager-factory.ts");
/* harmony import */ var _components_TagComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TagComponent */ "./src/components/TagComponent.ts");
/* harmony import */ var _components_TransformComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TransformComponent */ "./src/components/TransformComponent.ts");
/* harmony import */ var _components_CameraComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CameraComponent */ "./src/components/CameraComponent.ts");
/* harmony import */ var _components_MaterialComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/MaterialComponent */ "./src/components/MaterialComponent.ts");
/* harmony import */ var _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/SpriteRendererComponent */ "./src/components/SpriteRendererComponent.ts");
/* harmony import */ var _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ColliderComponent */ "./src/components/ColliderComponent.ts");
/* harmony import */ var _components_ImageComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ImageComponent */ "./src/components/ImageComponent.ts");
/* harmony import */ var _components_managers_ImageComponentManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/managers/ImageComponentManager */ "./src/components/managers/ImageComponentManager.ts");
/* harmony import */ var _components_managers_ColliderComponentManager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/managers/ColliderComponentManager */ "./src/components/managers/ColliderComponentManager.ts");
/* harmony import */ var _components_managers_SpriteRendererComponentManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/managers/SpriteRendererComponentManager */ "./src/components/managers/SpriteRendererComponentManager.ts");
/* harmony import */ var _components_managers_CameraComponentManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/managers/CameraComponentManager */ "./src/components/managers/CameraComponentManager.ts");
/* harmony import */ var _components_managers_TransformComponentManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/managers/TransformComponentManager */ "./src/components/managers/TransformComponentManager.ts");
/* harmony import */ var _components_managers_TagComponentManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/managers/TagComponentManager */ "./src/components/managers/TagComponentManager.ts");
/* harmony import */ var _components_managers_MaterialComponentManager__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/managers/MaterialComponentManager */ "./src/components/managers/MaterialComponentManager.ts");
/* harmony import */ var _systems_script_ScriptSystem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./systems/script/ScriptSystem */ "./src/systems/script/ScriptSystem.ts");
/* harmony import */ var _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ScriptComponent */ "./src/components/ScriptComponent.ts");
/* harmony import */ var _components_managers_ScriptComponentManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/managers/ScriptComponentManager */ "./src/components/managers/ScriptComponentManager.ts");
/* harmony import */ var _components_TilemapComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/TilemapComponent */ "./src/components/TilemapComponent.ts");
/* harmony import */ var _components_managers_TilemapComponentManager__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/managers/TilemapComponentManager */ "./src/components/managers/TilemapComponentManager.ts");
/* harmony import */ var _graphics_renderer_webgl_renderer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./graphics/renderer/webgl-renderer */ "./src/graphics/renderer/webgl-renderer.ts");
/* harmony import */ var _graphics_renderer_canvas_renderer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./graphics/renderer/canvas-renderer */ "./src/graphics/renderer/canvas-renderer.ts");
/* harmony import */ var _logging_logger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logging/logger */ "./src/logging/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




























var Application = /** @class */ (function () {
    /**
     * The main constructor.
     */
    function Application() {
        // Register systems.
        _system_manager__WEBPACK_IMPORTED_MODULE_4__["default"].register(new _systems_collision_collision_system__WEBPACK_IMPORTED_MODULE_1__["default"]());
        _system_manager__WEBPACK_IMPORTED_MODULE_4__["default"].register(new _systems_script_ScriptSystem__WEBPACK_IMPORTED_MODULE_20__["default"]());
        // Register components.
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_TagComponent__WEBPACK_IMPORTED_MODULE_6__["default"], new _components_managers_TagComponentManager__WEBPACK_IMPORTED_MODULE_18__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_TransformComponent__WEBPACK_IMPORTED_MODULE_7__["default"], new _components_managers_TransformComponentManager__WEBPACK_IMPORTED_MODULE_17__["default"]);
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_CameraComponent__WEBPACK_IMPORTED_MODULE_8__["default"], new _components_managers_CameraComponentManager__WEBPACK_IMPORTED_MODULE_16__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_MaterialComponent__WEBPACK_IMPORTED_MODULE_9__["default"], new _components_managers_MaterialComponentManager__WEBPACK_IMPORTED_MODULE_19__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_10__["default"], new _components_managers_SpriteRendererComponentManager__WEBPACK_IMPORTED_MODULE_15__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_ColliderComponent__WEBPACK_IMPORTED_MODULE_11__["default"], new _components_managers_ColliderComponentManager__WEBPACK_IMPORTED_MODULE_14__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_ImageComponent__WEBPACK_IMPORTED_MODULE_12__["default"], new _components_managers_ImageComponentManager__WEBPACK_IMPORTED_MODULE_13__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_ScriptComponent__WEBPACK_IMPORTED_MODULE_21__["default"], new _components_managers_ScriptComponentManager__WEBPACK_IMPORTED_MODULE_22__["default"]());
        _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].register(_components_TilemapComponent__WEBPACK_IMPORTED_MODULE_23__["default"], new _components_managers_TilemapComponentManager__WEBPACK_IMPORTED_MODULE_24__["default"]());
        _logging_logger__WEBPACK_IMPORTED_MODULE_27__["Logger"].info("Registered " + _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].managers.size + " manager(s)", Application.name);
        _logging_logger__WEBPACK_IMPORTED_MODULE_27__["Logger"].data('Registered manager(s)', _manager_factory__WEBPACK_IMPORTED_MODULE_5__["default"].managers);
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
                        _logging_logger__WEBPACK_IMPORTED_MODULE_27__["Logger"].info('Started initializing application', Application.name);
                        if (!renderType) {
                            renderType = 'canvas';
                        }
                        engineConfigPath = 'manifest.json';
                        urlParams = new URLSearchParams(location.search);
                        // Used in the editor.
                        if (urlParams.has('baseUrl')) {
                            _configuration__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
                            engineConfigPath = _configuration__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + "/" + engineConfigPath;
                        }
                        return [4 /*yield*/, fetch(engineConfigPath).catch(this.handleLoadError)];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        engineConfig = _a.sent();
                        // Load the first scene and init the renderer with the default scene and tilesets.
                        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["default"].load(engineConfig.scenes[0]).then(function (loadSceneRtn) {
                            if (renderType === 'webgl') {
                                _this.renderer = new _graphics_renderer_webgl_renderer__WEBPACK_IMPORTED_MODULE_25__["default"](loadSceneRtn.scene, loadSceneRtn.tilesets);
                            }
                            else {
                                _this.renderer = new _graphics_renderer_canvas_renderer__WEBPACK_IMPORTED_MODULE_26__["default"](loadSceneRtn.scene, loadSceneRtn.tilesets);
                            }
                            _this.renderer.init();
                            _this.onStart();
                            // Start the main application loop.
                            window.requestAnimationFrame(function (time) { return _this.mainLoop(time); });
                        });
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
        _time__WEBPACK_IMPORTED_MODULE_0__["default"].calculateDeltaTime(time);
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
/* harmony default export */ __webpack_exports__["default"] = (Application);


/***/ }),

/***/ "./src/component-manager.ts":
/*!**********************************!*\
  !*** ./src/component-manager.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ScriptComponent */ "./src/components/ScriptComponent.ts");

var ComponentManager = /** @class */ (function () {
    function ComponentManager() {
        /**
         * The component instance for the specific manager that inherits the component manager. For example
         * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
         */
        this.instances = [];
        /**
         * The component instance for the specific manager that inherits the component manager. For example
         * if the TagComponentManager is the inherting then this will contain all of the tag component instances.
         */
        this.entities = [];
        /**
         * Contains a map between the id of an entity and all its associated component types.
         */
        this.map = {};
    }
    /**
     * Trys to add the instance of a component to an entity. If the component already exists for the entity and exception will be thrown.
     * Note that the entities may have multiple instances of the script component.
     * @param entity The entity to associated the component instance with.
     * @param componentInstance The component instance to associate with the entity.
     */
    ComponentManager.prototype.addComponentInstance = function (entity, componentInstance) {
        if (this.map[entity.id]) {
            // Entities are allowed to have multiple script component instances so the duplicate component check does not apply to instances of the script type.
            if (typeof componentInstance !== typeof _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_0__["default"]) {
                console.error(componentInstance);
                throw "[" + componentInstance.constructor.name + "]: You can't not have multiple component of the same type on entity unless that component is a script.";
            }
        }
        else {
            this.entities.push(entity);
        }
        // Store the component instance within the current manager.
        this.instances.push(componentInstance);
        this.map[entity.id] = this.instances.length - 1;
    };
    ComponentManager.prototype.getInstance = function (entity) {
        var index = this.map[entity.id];
        if (index || index === 0) {
            return this.instances[index];
        }
        return null;
    };
    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    ComponentManager.prototype.dispose = function (entity) {
        if (this.constructor.name === 'ScriptComponentManager') {
            console.log(this);
        }
        if (this.map[entity.id]) {
            this.instances.splice(this.map[entity.id]);
            delete this.map[entity.id];
            var entityIndex = this.entities.findIndex(function (x) { return x.id === entity.id; });
            if (entityIndex !== -1) {
                this.entities.splice(entityIndex, 1);
            }
            console.log(this);
        }
    };
    return ComponentManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ComponentManager);


/***/ }),

/***/ "./src/components/CameraComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/CameraComponent.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CameraComponent = /** @class */ (function () {
    function CameraComponent(camera) {
        this.camera = camera;
    }
    return CameraComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (CameraComponent);


/***/ }),

/***/ "./src/components/ColliderComponent.ts":
/*!*********************************************!*\
  !*** ./src/components/ColliderComponent.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primitives_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primitives/point */ "./src/primitives/point.ts");

var ColliderComponent = /** @class */ (function () {
    function ColliderComponent(transform, isTrigger) {
        this.transform = transform;
        this.isTrigger = isTrigger;
        this.points = new Array();
        this.transform = transform;
        this.isTrigger = isTrigger;
        // Top left.
        this.points.push(new _primitives_point__WEBPACK_IMPORTED_MODULE_0__["default"](transform.x, transform.y));
        // Top right.
        this.points.push(new _primitives_point__WEBPACK_IMPORTED_MODULE_0__["default"](transform.x + transform.width, transform.y));
        // Bottom left.
        this.points.push(new _primitives_point__WEBPACK_IMPORTED_MODULE_0__["default"](transform.x, transform.y + transform.height));
        // Bottom right.
        this.points.push(new _primitives_point__WEBPACK_IMPORTED_MODULE_0__["default"](transform.x + transform.width, transform.y + transform.height));
    }
    return ColliderComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ColliderComponent);


/***/ }),

/***/ "./src/components/ImageComponent.ts":
/*!******************************************!*\
  !*** ./src/components/ImageComponent.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ImageComponent = /** @class */ (function () {
    function ImageComponent(source) {
        this.source = source;
    }
    return ImageComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);


/***/ }),

/***/ "./src/components/MaterialComponent.ts":
/*!*********************************************!*\
  !*** ./src/components/MaterialComponent.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(fillStyle, alpha) {
        this.alpha = 1;
        this.fillStyle = fillStyle;
        this.alpha = alpha;
    }
    return MaterialComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (MaterialComponent);


/***/ }),

/***/ "./src/components/ScriptComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/ScriptComponent.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ScriptComponent = /** @class */ (function () {
    function ScriptComponent(scritableEntity) {
        this.scritableEntity = scritableEntity;
    }
    return ScriptComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (ScriptComponent);


/***/ }),

/***/ "./src/components/SpriteRendererComponent.ts":
/*!***************************************************!*\
  !*** ./src/components/SpriteRendererComponent.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SpriteRendererComponent = /** @class */ (function () {
    function SpriteRendererComponent(layer, tilesetIndex, row, column) {
        this.layer = layer;
        this.tilesetIndex = tilesetIndex;
        this.row = row;
        this.column = column;
    }
    return SpriteRendererComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (SpriteRendererComponent);


/***/ }),

/***/ "./src/components/TagComponent.ts":
/*!****************************************!*\
  !*** ./src/components/TagComponent.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TagComponent = /** @class */ (function () {
    function TagComponent(name) {
        this.name = name;
    }
    return TagComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (TagComponent);


/***/ }),

/***/ "./src/components/TilemapComponent.ts":
/*!********************************************!*\
  !*** ./src/components/TilemapComponent.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TilemapComponent = /** @class */ (function () {
    function TilemapComponent(layer, tilesetIndex, tiles) {
        this.layer = 0;
        this.tilesetIndex = 0;
        this.tiles = [];
    }
    return TilemapComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (TilemapComponent);


/***/ }),

/***/ "./src/components/TransformComponent.ts":
/*!**********************************************!*\
  !*** ./src/components/TransformComponent.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TransformComponent = /** @class */ (function () {
    function TransformComponent(transform) {
        this.transform = transform;
    }
    return TransformComponent;
}());
/* harmony default export */ __webpack_exports__["default"] = (TransformComponent);


/***/ }),

/***/ "./src/components/managers/CameraComponentManager.ts":
/*!***********************************************************!*\
  !*** ./src/components/managers/CameraComponentManager.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CameraComponentManager = /** @class */ (function (_super) {
    __extends(CameraComponentManager, _super);
    function CameraComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CameraComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CameraComponentManager);


/***/ }),

/***/ "./src/components/managers/ColliderComponentManager.ts":
/*!*************************************************************!*\
  !*** ./src/components/managers/ColliderComponentManager.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ColliderComponentManager = /** @class */ (function (_super) {
    __extends(ColliderComponentManager, _super);
    function ColliderComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColliderComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ColliderComponentManager);


/***/ }),

/***/ "./src/components/managers/ImageComponentManager.ts":
/*!**********************************************************!*\
  !*** ./src/components/managers/ImageComponentManager.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ImageComponentManager = /** @class */ (function (_super) {
    __extends(ImageComponentManager, _super);
    function ImageComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ImageComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageComponentManager);


/***/ }),

/***/ "./src/components/managers/MaterialComponentManager.ts":
/*!*************************************************************!*\
  !*** ./src/components/managers/MaterialComponentManager.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MaterialComponentManager = /** @class */ (function (_super) {
    __extends(MaterialComponentManager, _super);
    function MaterialComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MaterialComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (MaterialComponentManager);


/***/ }),

/***/ "./src/components/managers/ScriptComponentManager.ts":
/*!***********************************************************!*\
  !*** ./src/components/managers/ScriptComponentManager.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ScriptComponentManager = /** @class */ (function (_super) {
    __extends(ScriptComponentManager, _super);
    function ScriptComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScriptComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ScriptComponentManager);


/***/ }),

/***/ "./src/components/managers/SpriteRendererComponentManager.ts":
/*!*******************************************************************!*\
  !*** ./src/components/managers/SpriteRendererComponentManager.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SpriteRendererComponentManager = /** @class */ (function (_super) {
    __extends(SpriteRendererComponentManager, _super);
    function SpriteRendererComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SpriteRendererComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (SpriteRendererComponentManager);


/***/ }),

/***/ "./src/components/managers/TagComponentManager.ts":
/*!********************************************************!*\
  !*** ./src/components/managers/TagComponentManager.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TagComponentManager = /** @class */ (function (_super) {
    __extends(TagComponentManager, _super);
    function TagComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TagComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TagComponentManager);


/***/ }),

/***/ "./src/components/managers/TilemapComponentManager.ts":
/*!************************************************************!*\
  !*** ./src/components/managers/TilemapComponentManager.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TilemapComponentManager = /** @class */ (function (_super) {
    __extends(TilemapComponentManager, _super);
    function TilemapComponentManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'TilemapComponentManager';
        return _this;
    }
    return TilemapComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TilemapComponentManager);


/***/ }),

/***/ "./src/components/managers/TransformComponentManager.ts":
/*!**************************************************************!*\
  !*** ./src/components/managers/TransformComponentManager.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component-manager */ "./src/component-manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TransformComponentManager = /** @class */ (function (_super) {
    __extends(TransformComponentManager, _super);
    function TransformComponentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransformComponentManager;
}(_component_manager__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TransformComponentManager);


/***/ }),

/***/ "./src/configuration.ts":
/*!******************************!*\
  !*** ./src/configuration.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Contains configuration options for the application instance.
 *
 * @author NSSure
 * @since 11/8/2020
 */
var Configuration = /** @class */ (function () {
    function Configuration() {
    }
    /**
     * Loaded resource.
     */
    Configuration.engineConfig = null;
    /**
     * Default size of the squares of the canvas.
     */
    Configuration.gridSquareSize = 32;
    /**
     * The background fill that immediately fill the canvas area after the clearCanvas method to called in the draw method.
     */
    Configuration.canvasFill = '#181818';
    /**
     * When in selection mode this is the fill color of the selected area.
     */
    Configuration.selectionTransformFill = 'rgba(252,248,227, 0.7)';
    return Configuration;
}());
/* harmony default export */ __webpack_exports__["default"] = (Configuration);


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CameraComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CameraComponent */ "./src/components/CameraComponent.ts");
/* harmony import */ var _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ColliderComponent */ "./src/components/ColliderComponent.ts");
/* harmony import */ var _components_ImageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ImageComponent */ "./src/components/ImageComponent.ts");
/* harmony import */ var _components_MaterialComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MaterialComponent */ "./src/components/MaterialComponent.ts");
/* harmony import */ var _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ScriptComponent */ "./src/components/ScriptComponent.ts");
/* harmony import */ var _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SpriteRendererComponent */ "./src/components/SpriteRendererComponent.ts");
/* harmony import */ var _components_TagComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TagComponent */ "./src/components/TagComponent.ts");
/* harmony import */ var _components_TransformComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TransformComponent */ "./src/components/TransformComponent.ts");








var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * The types of all of the available components.
     */
    Constants.componentTypes = [
        _components_TagComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
        _components_TransformComponent__WEBPACK_IMPORTED_MODULE_7__["default"],
        _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
        _components_MaterialComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
        _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
        _components_CameraComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
        _components_ImageComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
        _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
    ];
    /**
     * Valid characters.
     */
    Constants.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Constants;
}());
/* harmony default export */ __webpack_exports__["default"] = (Constants);


/***/ }),

/***/ "./src/entity-manager.ts":
/*!*******************************!*\
  !*** ./src/entity-manager.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CameraComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CameraComponent */ "./src/components/CameraComponent.ts");
/* harmony import */ var _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ColliderComponent */ "./src/components/ColliderComponent.ts");
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manager-factory */ "./src/manager-factory.ts");
/* harmony import */ var _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SpriteRendererComponent */ "./src/components/SpriteRendererComponent.ts");
/* harmony import */ var _components_TagComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TagComponent */ "./src/components/TagComponent.ts");
/* harmony import */ var _components_TransformComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TransformComponent */ "./src/components/TransformComponent.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _graphics_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphics/camera */ "./src/graphics/camera.ts");
/* harmony import */ var _models_entity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/entity */ "./src/models/entity.ts");
/* harmony import */ var _primitives_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./primitives/point */ "./src/primitives/point.ts");
/* harmony import */ var _primitives_transform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./primitives/transform */ "./src/primitives/transform.ts");
/* harmony import */ var _logging_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logging/logger */ "./src/logging/logger.ts");












var EntityManager = /** @class */ (function () {
    function EntityManager() {
        this.entities = [];
    }
    EntityManager.getInstance = function () {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }
        return EntityManager.instance;
    };
    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    EntityManager.prototype.create = function () {
        var entity = new _models_entity__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.entities.push(entity);
        var id = '';
        for (var i = 0; i < 8; i++) {
            var characterIndex = Math.floor(Math.random() * _constants__WEBPACK_IMPORTED_MODULE_6__["default"].characters.length);
            id += _constants__WEBPACK_IMPORTED_MODULE_6__["default"].characters.substring(characterIndex, characterIndex + 1);
        }
        entity.id = "entity-" + id;
        // Add the required components to the entity.
        entity.addComponent(new _components_TagComponent__WEBPACK_IMPORTED_MODULE_4__["default"]("entity" + entity.id));
        entity.addComponent(new _components_TransformComponent__WEBPACK_IMPORTED_MODULE_5__["default"](_primitives_transform__WEBPACK_IMPORTED_MODULE_10__["default"].empty));
        return entity;
    };
    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     *
     * @param entity The entity to dispose of.
     */
    EntityManager.prototype.dispose = function (entity) {
        var index = this.entities.findIndex(function (x) { return x.id === entity.id; });
        if (index !== -1) {
            // Remove all references stored in each of the component manager instances.
            // ManagerFactory.managers.forEach((manager: ComponentM) => manager.dispose(entity));
            // SystemManager.systems.forEach((system: System) => system.dispose(entity));
            this.entities.splice(index, 1);
        }
    };
    /**
     * Loads the entities.
     * @param sceneConfig
     */
    EntityManager.prototype.parseEntities = function (sceneConfig) {
        var parsedEntities = [];
        // Bootstrap entities.
        sceneConfig.entities.forEach(function (entityConfig) {
            var parsedEntity = new _models_entity__WEBPACK_IMPORTED_MODULE_8__["default"]();
            parsedEntity.id = entityConfig.id;
            parsedEntity.enabled = entityConfig.enabled;
            for (var sourceProperty in entityConfig) {
                var sourceComponent = entityConfig[sourceProperty];
                if (sourceComponent) {
                    if (sourceProperty === 'spriteRendererComponent') {
                        parsedEntity.addComponent(new _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_3__["default"](sourceComponent.layer, sourceComponent.tileset, sourceComponent.row, sourceComponent.column));
                    }
                    else if (sourceProperty === 'transformComponent') {
                        parsedEntity.addComponent(new _components_TransformComponent__WEBPACK_IMPORTED_MODULE_5__["default"](new _primitives_transform__WEBPACK_IMPORTED_MODULE_10__["default"](sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                    else if (sourceProperty === 'cameraComponent') {
                        var camera = new _graphics_camera__WEBPACK_IMPORTED_MODULE_7__["default"]();
                        camera.viewport = new _primitives_transform__WEBPACK_IMPORTED_MODULE_10__["default"](sourceComponent.camera.viewport.x, sourceComponent.camera.viewport.y, sourceComponent.camera.viewport.width, sourceComponent.camera.viewport.height);
                        camera.max = new _primitives_point__WEBPACK_IMPORTED_MODULE_9__["default"](sourceComponent.camera.max.x, sourceComponent.camera.max.y);
                        parsedEntity.addComponent(new _components_CameraComponent__WEBPACK_IMPORTED_MODULE_0__["default"](camera));
                    }
                    else if (sourceProperty === 'tagComponent') {
                        parsedEntity.addComponent(new _components_TagComponent__WEBPACK_IMPORTED_MODULE_4__["default"](sourceComponent.name));
                    }
                    else if (sourceProperty === 'colliderComponent') {
                        parsedEntity.addComponent(new _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_1__["default"](sourceComponent.transform, sourceComponent.isTrigger));
                    }
                }
            }
            _logging_logger__WEBPACK_IMPORTED_MODULE_11__["Logger"].info("Scene entity " + entityConfig.id + " parsed", EntityManager.name);
            parsedEntities.push(parsedEntity);
        });
        EntityManager.getInstance().entities = parsedEntities;
        _logging_logger__WEBPACK_IMPORTED_MODULE_11__["Logger"].info("Finished parsing " + parsedEntities.length + " entities", EntityManager.name);
    };
    /**
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    EntityManager.prototype.packEntities = function () {
        var entityConfigs = [];
        EntityManager.getInstance().entities.forEach(function (entity) {
            var entityConfig = {};
            _constants__WEBPACK_IMPORTED_MODULE_6__["default"].componentTypes.forEach(function (componentType) {
                var componentInstance = entity.getComponent(componentType);
                if (componentInstance) {
                    entityConfig[componentType.name.charAt(0).toLowerCase() + componentType.name.slice(1)] = componentInstance;
                }
            });
            if (Object.keys(entityConfig).length !== 0 && entityConfig.constructor === Object) {
                entityConfigs.push(entityConfig);
            }
        });
        return entityConfigs;
    };
    EntityManager.prototype.getComponents = function (entity) {
        var components = [];
        _manager_factory__WEBPACK_IMPORTED_MODULE_2__["default"].managers.forEach(function (manager) {
            if (manager.map[entity.id]) {
                components.push(manager.instances[manager.map[entity.id]]);
            }
        });
        return components;
    };
    return EntityManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (EntityManager);


/***/ }),

/***/ "./src/graphics/Mat4.ts":
/*!******************************!*\
  !*** ./src/graphics/Mat4.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Mat4 = /** @class */ (function () {
    function Mat4() {
    }
    Mat4.identity = function () {
        return [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
    };
    Mat4.translation = function (translateX, translateY, translateZ) {
        var x = translateX;
        var y = translateY;
        var z = translateZ;
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ];
    };
    Mat4.xRotation = function (angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ];
    };
    Mat4.yRotation = function (angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ];
    };
    Mat4.zRotation = function (angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    };
    Mat4.scaling = function (sx, sy, sz) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1,
        ];
    };
    Mat4.multiply = function (a, b) {
        var b00 = b[0 * 4 + 0];
        var b01 = b[0 * 4 + 1];
        var b02 = b[0 * 4 + 2];
        var b03 = b[0 * 4 + 3];
        var b10 = b[1 * 4 + 0];
        var b11 = b[1 * 4 + 1];
        var b12 = b[1 * 4 + 2];
        var b13 = b[1 * 4 + 3];
        var b20 = b[2 * 4 + 0];
        var b21 = b[2 * 4 + 1];
        var b22 = b[2 * 4 + 2];
        var b23 = b[2 * 4 + 3];
        var b30 = b[3 * 4 + 0];
        var b31 = b[3 * 4 + 1];
        var b32 = b[3 * 4 + 2];
        var b33 = b[3 * 4 + 3];
        var a00 = a[0 * 4 + 0];
        var a01 = a[0 * 4 + 1];
        var a02 = a[0 * 4 + 2];
        var a03 = a[0 * 4 + 3];
        var a10 = a[1 * 4 + 0];
        var a11 = a[1 * 4 + 1];
        var a12 = a[1 * 4 + 2];
        var a13 = a[1 * 4 + 3];
        var a20 = a[2 * 4 + 0];
        var a21 = a[2 * 4 + 1];
        var a22 = a[2 * 4 + 2];
        var a23 = a[2 * 4 + 3];
        var a30 = a[3 * 4 + 0];
        var a31 = a[3 * 4 + 1];
        var a32 = a[3 * 4 + 2];
        var a33 = a[3 * 4 + 3];
        return [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ];
    };
    Mat4.translate = function (m, tx, ty, tz) {
        return Mat4.multiply(m, Mat4.translation(tx, ty, tz));
    };
    Mat4.xRotate = function (m, angleInRadians) {
        return Mat4.multiply(m, Mat4.xRotation(angleInRadians));
    };
    Mat4.yRotate = function (m, angleInRadians) {
        return Mat4.multiply(m, Mat4.yRotation(angleInRadians));
    };
    Mat4.zRotate = function (m, angleInRadians) {
        return Mat4.multiply(m, Mat4.zRotation(angleInRadians));
    };
    Mat4.scale = function (m, sx, sy, sz) {
        return Mat4.multiply(m, Mat4.scaling(sx, sy, sz));
    };
    Mat4.projection = function (width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return [
            2 / width, 0, 0, 0,
            0, -2 / height, 0, 0,
            0, 0, 2 / depth, 0,
            -1, 1, 0, 1,
        ];
    };
    Mat4.orthographic = function (left, right, bottom, top, near, far) {
        return [
            2 / (right - left), 0, 0, 0,
            0, 2 / (top - bottom), 0, 0,
            0, 0, 2 / (near - far), 0,
            (left + right) / (left - right),
            (bottom + top) / (bottom - top),
            (near + far) / (near - far),
            1,
        ];
    };
    return Mat4;
}());
/* harmony default export */ __webpack_exports__["default"] = (Mat4);


/***/ }),

/***/ "./src/graphics/camera.ts":
/*!********************************!*\
  !*** ./src/graphics/camera.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Camera = /** @class */ (function () {
    function Camera() {
        this.orthographicSize = 5;
    }
    Camera.prototype.isClampedX = function () {
        if (this.viewport.x >= this.max.x / 2 || this.viewport.x === 0) {
            return true;
        }
        return false;
    };
    Camera.prototype.isClampedY = function () {
        if (this.viewport.y >= this.max.y / 2 || this.viewport.y === 0) {
            return true;
        }
        return false;
    };
    Camera.prototype.update = function () {
    };
    return Camera;
}());
/* harmony default export */ __webpack_exports__["default"] = (Camera);


/***/ }),

/***/ "./src/graphics/renderer/base-renderer.ts":
/*!************************************************!*\
  !*** ./src/graphics/renderer/base-renderer.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BaseRenderer = /** @class */ (function () {
    function BaseRenderer() {
        /**
         * The tilesets to use for the current scene.
         */
        this.tilesets = [];
    }
    return BaseRenderer;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseRenderer);


/***/ }),

/***/ "./src/graphics/renderer/canvas-renderer.ts":
/*!**************************************************!*\
  !*** ./src/graphics/renderer/canvas-renderer.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _primitives_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../primitives/Point */ "./src/primitives/Point.ts");
/* harmony import */ var _primitives_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../primitives/transform */ "./src/primitives/transform.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../camera */ "./src/graphics/camera.ts");
/* harmony import */ var _components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SpriteRendererComponent */ "./src/components/SpriteRendererComponent.ts");
/* harmony import */ var _components_MaterialComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaterialComponent */ "./src/components/MaterialComponent.ts");
/* harmony import */ var _components_TransformComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TransformComponent */ "./src/components/TransformComponent.ts");
/* harmony import */ var _base_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-renderer */ "./src/graphics/renderer/base-renderer.ts");
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../manager-factory */ "./src/manager-factory.ts");
/* harmony import */ var _components_TilemapComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TilemapComponent */ "./src/components/TilemapComponent.ts");
/* harmony import */ var _logging_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logging/logger */ "./src/logging/logger.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var CanvasRenderer = /** @class */ (function (_super) {
    __extends(CanvasRenderer, _super);
    /**
     * Default constructor.
     */
    function CanvasRenderer(scene, tilesets) {
        var _this = _super.call(this) || this;
        /**
         * The tilesets to use for the current scene.
         */
        _this.tilesets = [];
        /**
         * The main scene camera this is always here.
         */
        _this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this.scene = scene;
        _this.tilesets = tilesets;
        if (!_this.scene) {
            throw "You cannot initialize the renderer without a scene.";
        }
        if (!_this.tilesets || _this.tilesets.length === 0) {
            throw "You cannot initialize the renderer without any tilesets.";
        }
        return _this;
    }
    /**
     * Initializes the canvas for the renderer.
     */
    CanvasRenderer.prototype.init = function () {
        var _this = this;
        _logging_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"].info('Started initializing canvas renderer', CanvasRenderer.name);
        this.engineCanvas = document.querySelector('#engine-canvas');
        this.context = this.engineCanvas.getContext('2d');
        this.engineCanvas.addEventListener('mousedown', function (event) { return _this.onCanvasMouseDown(event); });
        this.engineCanvas.addEventListener('mouseup', function (event) { return _this.onCanvasMouseUp(event); });
        this.engineCanvas.addEventListener('mousemove', function (event) { return _this.onCanvasMouseMove(event); });
        // Initialize the camera for the renderer.
        this.mainCamera.viewport = new _primitives_transform__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new _primitives_Point__WEBPACK_IMPORTED_MODULE_0__["default"]((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);
        _logging_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"].info('Finished initializing canvas renderer', CanvasRenderer.name);
    };
    /**
     * Draw any entities to the canvas if they have the sprite renderer component.
     */
    CanvasRenderer.prototype.draw = function () {
        /**
         * Clear the canvas for the next render call.
         */
        this.clearCanvas();
        /**
         * Render the tilemap and standalone sprites.
         */
        this.render();
        /**
         * Ensure the canvas is resized to match the current size of the viewport.
         */
        this.resizeCanvas();
    };
    CanvasRenderer.prototype.render = function () {
        var _this = this;
        this.scene.layers.forEach(function (layer, index) {
            if (layer.enabled) {
                // Render the tilemap sprites for the current layer.
                var tilemapManager = _manager_factory__WEBPACK_IMPORTED_MODULE_7__["default"].get(_components_TilemapComponent__WEBPACK_IMPORTED_MODULE_8__["default"].name);
                tilemapManager.instances.forEach(function (tilemapInstance) {
                    var startCol = 0; // Math.floor(camera.viewport.x / this.scene.tileSize);
                    var endCol = 64; // startCol + (camera.viewport.width / this.scene.tileSize) + 1;
                    var startRow = 0; // Math.floor(camera.viewport.y / this.scene.tileSize);
                    var endRow = 64; // startRow + (camera.viewport.height / this.scene.tileSize) + 1;
                    var offsetX = 0; // -camera.viewport.x + startCol * this.scene.tileSize;
                    var offsetY = 0; // -camera.viewport.y + startRow * this.scene.tileSize;
                    for (var col = startCol; col <= endCol; col++) {
                        for (var row = startRow; row <= endRow; row++) {
                            var sprite = tilemapInstance.tiles[row * 64 + col]; // this.scene.columns
                            var x = (col - startCol) * 32 + offsetX; // this.scene.tileSize
                            var y = (row - startRow) * 32 + offsetY; // this.scene.tileSize
                            _this.context.drawImage(_this.tilesets[tilemapInstance.tilesetIndex].image, //this.tilesets[layer.tileset].image,
                            sprite * 32, 0, 32, 32, Math.round(x), Math.round(y), 32, 32);
                        }
                    }
                });
                // Render any standalone sprites for the current layer.
                var spriteManager_1 = _manager_factory__WEBPACK_IMPORTED_MODULE_7__["default"].get(_components_SpriteRendererComponent__WEBPACK_IMPORTED_MODULE_3__["default"].name);
                spriteManager_1.entities.forEach(function (entity) {
                    var spriteRenderer = spriteManager_1.getInstance(entity);
                    var spriteTransform = entity.getComponent(_components_TransformComponent__WEBPACK_IMPORTED_MODULE_5__["default"]);
                    var material = entity.getComponent(_components_MaterialComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);
                    if (material) {
                        _this.applyMaterial(material);
                    }
                    _this.context.drawImage(_this.tilesets[0].image, // this.tilesets[spriteRendererComponent.layer].image,
                    spriteRenderer.column * _this.scene.tileSize, spriteRenderer.row * _this.scene.tileSize, _this.scene.tileSize, _this.scene.tileSize, spriteTransform.transform.x - 0, // cameraOffsetX,
                    spriteTransform.transform.y - 0, // cameraOffsetY,
                    _this.scene.tileSize, _this.scene.tileSize);
                });
            }
        });
    };
    CanvasRenderer.prototype.applyMaterial = function (materialComponent) {
        this.context.fillStyle = materialComponent.fillStyle;
        this.context.globalAlpha = materialComponent.alpha;
    };
    /**
     * Clears the canvas for the next draw call.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    CanvasRenderer.prototype.clearCanvas = function () {
        this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    };
    /**
     * Resizes the canvas canvas to fit the dimensions of the viewport.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    CanvasRenderer.prototype.resizeCanvas = function () {
        if (this.getCanvasWidth() !== window.innerWidth || this.getCanvasHeight() !== window.innerHeight) {
            this.setCanvasWidth(window.innerWidth);
            this.setCanvasHeight(window.innerHeight);
        }
    };
    /**
     * Gets the current width of the canvas.
     */
    CanvasRenderer.prototype.getCanvasHeight = function () {
        return this.engineCanvas.height;
    };
    /**
     * Gets the current height of the canvas.
     */
    CanvasRenderer.prototype.getCanvasWidth = function () {
        return this.engineCanvas.width;
    };
    /**
     * Sets the height of the canvas.
     * @param height The height to set the canvas to.
     */
    CanvasRenderer.prototype.setCanvasHeight = function (height) {
        this.engineCanvas.height = height;
    };
    /**
     * Sets the width of the canvas.
     * @param width The width to set the canvas to.
     */
    CanvasRenderer.prototype.setCanvasWidth = function (width) {
        this.engineCanvas.width = width;
    };
    CanvasRenderer.prototype.onCanvasMouseDown = function (event) {
        console.log('mousedown');
    };
    CanvasRenderer.prototype.onCanvasMouseUp = function (event) {
        console.log('mouseup');
    };
    CanvasRenderer.prototype.onCanvasMouseMove = function (event) {
        console.log('mousemove');
    };
    return CanvasRenderer;
}(_base_renderer__WEBPACK_IMPORTED_MODULE_6__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CanvasRenderer);


/***/ }),

/***/ "./src/graphics/renderer/webgl-renderer.ts":
/*!*************************************************!*\
  !*** ./src/graphics/renderer/webgl-renderer.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-renderer */ "./src/graphics/renderer/base-renderer.ts");
/* harmony import */ var _Mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mat4 */ "./src/graphics/Mat4.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var Drawable = /** @class */ (function () {
    function Drawable() {
    }
    return Drawable;
}());
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());
var WebGLRenderer = /** @class */ (function (_super) {
    __extends(WebGLRenderer, _super);
    function WebGLRenderer(scene, tilesets) {
        var _this = _super.call(this) || this;
        _this.tilesets = [];
        /**
         * The 2D rendering context for the default canvas.
         */
        _this.context = null;
        _this.shaderPath = '/shaders';
        _this._drawables = [];
        _this._vertexShaders = [];
        _this._fragmentShaders = [];
        _this._testTranslationAmount = [0, 0, 0]; // x,y,z
        _this._testRotationAmount = [0, 1, 0]; // x,y,z
        _this._testScaleAmount = [1, 1, 0]; //x,y,z
        _this._testTranslateSpeed = 100;
        _this.angleInDegress = 0;
        _this.angleInRadians = 0;
        _this.scene = scene;
        _this.tilesets = tilesets;
        return _this;
    }
    WebGLRenderer.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vertextShaderSource, fragmentShaderSource, vertextShader, fragmentShader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.context = this.engineCanvas.getContext('webgl');
                        if (!this.context) {
                            throw "WebGL not supported.";
                        }
                        this.engineCanvas.width = window.innerWidth;
                        this.engineCanvas.height = window.innerHeight;
                        return [4 /*yield*/, fetch(this.shaderPath + "/vertex-shader.glsl")];
                    case 1: return [4 /*yield*/, (_a.sent()).text()];
                    case 2:
                        vertextShaderSource = _a.sent();
                        return [4 /*yield*/, fetch(this.shaderPath + "/fragment-shader.glsl")];
                    case 3: return [4 /*yield*/, (_a.sent()).text()];
                    case 4:
                        fragmentShaderSource = _a.sent();
                        vertextShader = this._createShader(this.context.VERTEX_SHADER, vertextShaderSource);
                        fragmentShader = this._createShader(this.context.FRAGMENT_SHADER, fragmentShaderSource);
                        // Create a new program and link the shaders.
                        this._program = this._createProgram(vertextShader, fragmentShader);
                        // Look where position data will go.
                        this._positionAttributeLocation = this.context.getAttribLocation(this._program, 'a_position');
                        this._colorAttributeLocation = this.context.getAttribLocation(this._program, 'a_color');
                        this._colorBuffer = this.context.createBuffer();
                        this.context.bindBuffer(this.context.ARRAY_BUFFER, this._colorBuffer);
                        this.context.bufferData(this.context.ARRAY_BUFFER, new Uint8Array([
                            255, 255, 255,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0,
                            0, 0, 0
                        ]), this.context.STATIC_DRAW);
                        // Looks up uniforms for shader.
                        // Do this on init not in the render loop.
                        this._colorUniformLocation = this.context.getUniformLocation(this._program, 'u_color');
                        this._resolutionUniformLocation = this.context.getUniformLocation(this._program, 'u_resolution');
                        this._matrixUniformLocation = this.context.getUniformLocation(this._program, 'u_matrix');
                        this._createDrawable([
                            10, 20, 0,
                            80, 20, 0,
                            10, 30, 0,
                            10, 30, 0,
                            80, 20, 0,
                            80, 30, 0
                        ]);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebGLRenderer.prototype._createDrawable = function (positions) {
        var drawable = new Drawable();
        drawable.positions = positions;
        drawable.buffer = this.context.createBuffer();
        this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(drawable.positions), this.context.STATIC_DRAW);
        this._drawables.push(drawable);
    };
    WebGLRenderer.prototype._convertAngleUnitCircleCoordinates = function (angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        var sine = Math.sin(angleInRadians);
        var cosine = Math.cos(angleInRadians);
        return {
            sine: sine,
            cosine: cosine
        };
    };
    WebGLRenderer.prototype.draw = function () {
        var _this = this;
        console.log('[WEBGL]: Draw');
        // Update test translate
        // this._testTranslationAmount[0] += this._testTranslateSpeed * Time.deltaTime;
        // this.angleInDegress += 10 * Time.deltaTime;
        // Points on a unit circle are called sine and cosine (sine = x) (cosine = y).
        var unitCircleCoordinates = this._convertAngleUnitCircleCoordinates(this.angleInDegress);
        this._testRotationAmount[0] = unitCircleCoordinates.sine;
        this._testRotationAmount[1] = unitCircleCoordinates.cosine;
        // Tells WebGL to convert the clip space values we set gl_position to in the vertext shader back into pixels (screen space).
        // -1 maps to 0 and 1 maps to the canvas width same goes for the y-axis.
        this.context.viewport(0, 0, this.engineCanvas.width, this.engineCanvas.height);
        // Clear the canvas by making it transparent.
        this.context.clearColor(0, 0, 0, 0);
        this.context.clear(this.context.COLOR_BUFFER_BIT);
        this.context.useProgram(this._program);
        // Transform from clip space back into pixels for positional data.
        this.context.uniform2f(this._resolutionUniformLocation, this.engineCanvas.width, this.engineCanvas.height);
        // Iterate through the drawables to render.
        this._drawables.forEach(function (drawable) {
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            _this.context.enableVertexAttribArray(_this._positionAttributeLocation);
            _this.context.bindBuffer(_this.context.ARRAY_BUFFER, drawable.buffer);
            var size = 3; // 2 components per iteration -> 3 for orthographic.
            var type = _this.context.FLOAT; // the data is 32bit floats
            var normalize = false; // don't normalize the data
            var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            var offset = 0; // start at the beginning of the buffer
            _this.context.vertexAttribPointer(_this._positionAttributeLocation, size, type, normalize, stride, offset);
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            _this.context.enableVertexAttribArray(_this._colorAttributeLocation);
            _this.context.bindBuffer(_this.context.ARRAY_BUFFER, _this._colorBuffer);
            var cSize = 3; // 2 components per iteration -> 3 for orthographic.
            var cType = _this.context.UNSIGNED_BYTE; // the data is 32bit floats
            var cNormalize = false; // don't normalize the data
            var cStride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            var cOffset = 0; // start at the beginning of the buffer
            _this.context.vertexAttribPointer(_this._colorAttributeLocation, cSize, cType, cNormalize, cStride, cOffset);
            // Set uniforms
            _this.context.uniform4f(_this._colorUniformLocation, 1, 1, 1, 1); // color
            // var left = 0;
            // var right = this.context.canvas.width;
            // var bottom = this.context.canvas.height;
            // var top = 0;
            // var near = 400;
            // var far = -400;
            // var matrix = Mat4.orthographic(left, right, bottom, top, near, far);
            var matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].projection(_this.context.canvas.width, _this.context.canvas.height, 400);
            matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].translate(matrix, _this._testTranslationAmount[0], _this._testTranslationAmount[1], _this._testTranslationAmount[2]);
            matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].xRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].yRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].zRotate(matrix, _this.angleInDegress * Math.PI / 180);
            matrix = _Mat4__WEBPACK_IMPORTED_MODULE_1__["default"].scale(matrix, _this._testScaleAmount[0], _this._testScaleAmount[1], _this._testScaleAmount[2]);
            // Adjust origin. How does this actually adjust the rotation point? Can't seem to get it working?
            // matrix = Mat4.translate(matrix, 150, 150, 150);
            _this.context.uniformMatrix4fv(_this._matrixUniformLocation, false, matrix);
            var primitiveType = _this.context.TRIANGLES;
            var drawOffset = 0;
            var drawCount = 6; // square from two triangles would be 6.
            _this.context.drawArrays(primitiveType, drawOffset, drawCount);
        });
    };
    // public drawImage(texture: WebGLTexture, textureWidth: number, textureHeight: number, destinationX: number, destinationY: number): void {
    //     this.context.bindTexture(this.context.TEXTURE_2D);
    //     this.context.useProgram(this._imageProgram);
    //     this.context.bindBuffer(this.context.ARRAY_BUFFER, positionBuffer);
    //     this.context.enableVertexAttribArray(positionLocation);
    //     this.context.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    //     this.context.bindBuffer(this.context.ARRAY_BUFFER, texcoordBuffer);
    //     this.context.enableVertexAttribArray(texcoordLocation);
    //     this.context.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);
    //     // this matrix will convert from pixels to clip space
    //     var matrix = Mat3.orthographic(0, gl.canvas.width, gl.canvas.height, 0, -1, 1);
    //     // this matrix will translate our quad to dstX, dstY
    //     matrix = m4.translate(matrix, dstX, dstY, 0);
    //     // this matrix will scale our 1 unit quad
    //     // from 1 unit to texWidth, texHeight units
    //     matrix = Mat4.scale(matrix, texWidth, texHeight, 1);
    //     // Set the matrix.
    //     this.context.uniformMatrix4fv(matrixLocation, false, matrix);
    //     // Tell the shader to get the texture from texture unit 0
    //     this.context.uniform1i(textureLocation, 0);
    //     // draw the quad (2 triangles, 6 vertices)
    //     gl.drawArrays(gl.TRIANGLES, 0, 6);
    // }
    /**
     * Creates a shader of the given type using the shader source text.
     * @param shaderType The type of shader either VERTEXT_SHADER or FRAGMENT_SHADER.
     * @param shaderSource The source text of the shader.
     */
    WebGLRenderer.prototype._createShader = function (shaderType, shaderSource) {
        var shader = this.context.createShader(shaderType);
        // Create container for the shader source text to be placed into then compile.
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var successful = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);
        if (successful) {
            return shader;
        }
        // TODO: Refactor into some sort of general dispose function for shaders.
        console.log(this.context.getShaderInfoLog(shader));
        this.context.deleteShader(shader);
        throw "[SHADER ERROR]: Unable to load shader " + shaderType;
    };
    /**
     * Links vertex shader and fragment shader into a WebGL program.
     * @param vertextShader The vertex shader to link to the program.
     * @param fragmentShader The fragment shader to link to the program.
     */
    WebGLRenderer.prototype._createProgram = function (vertextShader, fragmentShader) {
        var program = this.context.createProgram();
        // TODO: Add checks to determine that each shader parameter is actually of the correct shader type.
        this.context.attachShader(program, vertextShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        var successful = this.context.getProgramParameter(program, this.context.LINK_STATUS);
        if (successful) {
            return program;
        }
        // TODO: Refactor into some sort of general dispose function for programs.
        console.log(this.context.getProgramInfoLog(program));
        this.context.deleteProgram(program);
        throw "[SHADER ERROR]: Unable to link shaders to program";
    };
    return WebGLRenderer;
}(_base_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (WebGLRenderer);


/***/ }),

/***/ "./src/graphics/tileset.ts":
/*!*********************************!*\
  !*** ./src/graphics/tileset.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Tileset = /** @class */ (function () {
    function Tileset(image) {
        this.image = image;
    }
    return Tileset;
}());
/* harmony default export */ __webpack_exports__["default"] = (Tileset);


/***/ }),

/***/ "./src/logging/logger.ts":
/*!*******************************!*\
  !*** ./src/logging/logger.ts ***!
  \*******************************/
/*! exports provided: Logger, LogThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogThreshold", function() { return LogThreshold; });
var LogThreshold;
(function (LogThreshold) {
    LogThreshold[LogThreshold["NONE"] = 0] = "NONE";
    LogThreshold[LogThreshold["DATA"] = 1] = "DATA";
    LogThreshold[LogThreshold["DEBUG"] = 2] = "DEBUG";
    LogThreshold[LogThreshold["INFO"] = 3] = "INFO";
    LogThreshold[LogThreshold["ERROR"] = 4] = "ERROR";
    LogThreshold[LogThreshold["CRITICAL"] = 5] = "CRITICAL";
})(LogThreshold || (LogThreshold = {}));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.debug = function (msg) {
        if (!this.thresholds.includes(LogThreshold.DEBUG)) {
            return;
        }
        console.log("[YAK DEBUG]: " + msg);
    };
    Logger.info = function (msg, source) {
        if (!this.thresholds.includes(LogThreshold.INFO)) {
            return;
        }
        console.info("%c [YAK INFO - " + source + "]: " + msg, 'background: #222; color: #bada55');
    };
    Logger.error = function (msg) {
        if (!this.thresholds.includes(LogThreshold.ERROR)) {
            return;
        }
        console.error("[YAK ERROR]: " + msg);
    };
    Logger.critical = function (msg) {
        if (!this.thresholds.includes(LogThreshold.CRITICAL)) {
            return;
        }
        console.error("[YAK CRITICAL]: " + msg);
    };
    Logger.data = function (msg, data) {
        if (!this.thresholds.includes(LogThreshold.DATA)) {
            return;
        }
        console.log("%c [YAK DATA]: " + msg, 'background: #222; color: #bada55', data);
    };
    Logger.thresholds = [LogThreshold.DATA, LogThreshold.DEBUG, LogThreshold.INFO, LogThreshold.ERROR, LogThreshold.CRITICAL];
    return Logger;
}());



/***/ }),

/***/ "./src/manager-factory.ts":
/*!********************************!*\
  !*** ./src/manager-factory.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ManagerFactory = /** @class */ (function () {
    function ManagerFactory() {
    }
    // TODO: Add type contraints.
    ManagerFactory.register = function (componentType, componentManagerInstance) {
        if (!ManagerFactory.managers.has(componentType)) {
            ManagerFactory.managers.set(componentType, componentManagerInstance);
        }
    };
    ManagerFactory.get = function (componentName) {
        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }
        throw "Manager has not been registered: " + componentName;
    };
    ManagerFactory.log = function () {
        ManagerFactory.managers.forEach(function (manager) { return console.log(manager); });
    };
    ManagerFactory.managers = new Map();
    return ManagerFactory;
}());
/* harmony default export */ __webpack_exports__["default"] = (ManagerFactory);


/***/ }),

/***/ "./src/models/entity.ts":
/*!******************************!*\
  !*** ./src/models/entity.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager-factory */ "./src/manager-factory.ts");

/**
 * Base object class used for sprites, colliders, primitives, etc. Contains
 * shared code common across most classes.
 *
 * @author NSSure
 * @since 11/8/2020
 */
var Entity = /** @class */ (function () {
    function Entity() {
        /**
         * Generates a unique 12 character ID for each entity.
         */
        // id: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12);
        this.id = ''; // Refactored to number for ECS.
        /**
         * Determines if the entity should be rendered.
         */
        this.enabled = true;
    }
    Entity.prototype.addComponent = function (componentInstance) {
        var manager = _manager_factory__WEBPACK_IMPORTED_MODULE_0__["default"].get(componentInstance.constructor.name);
        manager.addComponentInstance(this, componentInstance);
    };
    Entity.prototype.getComponent = function (componentType) {
        // if (componentType.name === ScriptComponent.name) {
        //     console.log(componentType.name);
        //     throw "Getting script components is not currently supported.";
        // }
        var manager = _manager_factory__WEBPACK_IMPORTED_MODULE_0__["default"].get(componentType.name);
        return manager.instances[manager.map[this.id]];
    };
    Entity.prototype.getScriptInstances = function () {
        // let scriptManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;
        // if (scriptManager.map.has(this.id)) {
        //     console.log(scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)));
        //     // TODO: This will not work for script components.
        //     return scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)) as ScriptComponent[];
        // }
        return [];
    };
    return Entity;
}());
/* harmony default export */ __webpack_exports__["default"] = (Entity);


/***/ }),

/***/ "./src/models/returns/load-scene-return.ts":
/*!*************************************************!*\
  !*** ./src/models/returns/load-scene-return.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LoadSceneReturn = /** @class */ (function () {
    function LoadSceneReturn(scene, tilesets) {
        this.tilesets = new Array();
        this.scene = scene;
        this.tilesets = tilesets;
    }
    return LoadSceneReturn;
}());
/* harmony default export */ __webpack_exports__["default"] = (LoadSceneReturn);


/***/ }),

/***/ "./src/primitives/Point.ts":
/*!*********************************!*\
  !*** ./src/primitives/Point.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./src/primitives/point.ts":
/*!*********************************!*\
  !*** ./src/primitives/point.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./src/primitives/transform.ts":
/*!*************************************!*\
  !*** ./src/primitives/transform.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Transform = /** @class */ (function () {
    function Transform(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Transform.prototype.getScreenX = function (camera) {
        return this.x - camera.viewport.x;
    };
    // clampX(min: number, maxLowerRange: number, maxUpperRange: number): void {
    //     this.x = Math.max(min, Math.min(maxLowerRange, maxUpperRange));  
    // }
    Transform.prototype.clampX = function (min, max) {
        if (this.x < min) {
            this.x = min;
            return true;
        }
        if (this.x > max) {
            this.x = max;
            return true;
        }
    };
    Transform.prototype.clampY = function (min, max) {
        if (this.y <= min) {
            this.y = min;
            return true;
        }
        if (this.y >= max) {
            this.y = max;
            return true;
        }
    };
    Transform.prototype.offsetX = function () {
        return this.x + this.width;
    };
    Transform.prototype.offsetY = function () {
        return this.y + this.height;
    };
    Transform.prototype.lerp = function (startValue, endValue, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return startValue + (endValue - startValue) * amount;
    };
    Object.defineProperty(Transform, "empty", {
        /**
         * Returns a new empty transform object. Meaning the x, y, width, and height
         * values are all zero.
         *
         * @author NSSure
         * @since 11/12/2020
         */
        get: function () {
            return new Transform(0, 0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Transform;
}());
/* harmony default export */ __webpack_exports__["default"] = (Transform);


/***/ }),

/***/ "./src/scene-manager.ts":
/*!******************************!*\
  !*** ./src/scene-manager.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-manager */ "./src/entity-manager.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/configuration.ts");
/* harmony import */ var _graphics_tileset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics/tileset */ "./src/graphics/tileset.ts");
/* harmony import */ var _models_returns_load_scene_return__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/returns/load-scene-return */ "./src/models/returns/load-scene-return.ts");
/* harmony import */ var _logging_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logging/logger */ "./src/logging/logger.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
                        _logging_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].info('Started loading scene.', SceneManager.name);
                        scenePath = "scenes\\" + sceneName + ".json";
                        if (baseUrl) {
                            scenePath = baseUrl + "\\" + scenePath;
                        }
                        return [4 /*yield*/, fetch(scenePath)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        scene = _b.sent();
                        _logging_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].info('Scene loaded and parsed successfully', SceneManager.name);
                        // Parsed entities to typescript objects.
                        _entity_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().parseEntities(scene);
                        tilesets = new Array();
                        _i = 0, _a = scene.tilesets;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        tilesetName = _a[_i];
                        tilesetImage = new Image();
                        tilesetPath = "tilesets/" + tilesetName;
                        if (_configuration__WEBPACK_IMPORTED_MODULE_1__["default"].baseUrl) {
                            tilesetPath = "file://" + _configuration__WEBPACK_IMPORTED_MODULE_1__["default"].baseUrl.replace(/\\/g, "/") + "/" + tilesetPath;
                        }
                        tilesetImage.src = tilesetPath;
                        return [4 /*yield*/, tilesetImage.decode()];
                    case 4:
                        _b.sent();
                        tilesets.push(new _graphics_tileset__WEBPACK_IMPORTED_MODULE_2__["default"](tilesetImage));
                        _logging_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].info("Scene tileset " + tilesetName + " loaded", SceneManager.name);
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _logging_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].info('Finished loading scene', SceneManager.name);
                        return [2 /*return*/, new _models_returns_load_scene_return__WEBPACK_IMPORTED_MODULE_3__["default"](scene, tilesets)];
                }
            });
        });
    };
    return SceneManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SceneManager);


/***/ }),

/***/ "./src/system-manager.ts":
/*!*******************************!*\
  !*** ./src/system-manager.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SystemManager = /** @class */ (function () {
    function SystemManager() {
    }
    SystemManager.register = function (system) {
        if (SystemManager.systems.findIndex(function (x) { return x.name === system.name; }) === -1) {
            SystemManager.systems.push(system);
        }
    };
    SystemManager.get = function (systemName) {
        return SystemManager.systems.find(function (x) { return x.name === systemName; });
    };
    SystemManager.systems = [];
    return SystemManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (SystemManager);


/***/ }),

/***/ "./src/systems/collision/collision-direction.ts":
/*!******************************************************!*\
  !*** ./src/systems/collision/collision-direction.ts ***!
  \******************************************************/
/*! exports provided: CollisionDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionDirection", function() { return CollisionDirection; });
var CollisionDirection;
(function (CollisionDirection) {
    CollisionDirection[CollisionDirection["NONE"] = 0] = "NONE";
    CollisionDirection[CollisionDirection["TOP"] = 1] = "TOP";
    CollisionDirection[CollisionDirection["RIGHT"] = 2] = "RIGHT";
    CollisionDirection[CollisionDirection["BOTTOM"] = 3] = "BOTTOM";
    CollisionDirection[CollisionDirection["LEFT"] = 4] = "LEFT";
})(CollisionDirection || (CollisionDirection = {}));


/***/ }),

/***/ "./src/systems/collision/collision-system.ts":
/*!***************************************************!*\
  !*** ./src/systems/collision/collision-system.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ColliderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ColliderComponent */ "./src/components/ColliderComponent.ts");
/* harmony import */ var _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ScriptComponent */ "./src/components/ScriptComponent.ts");
/* harmony import */ var _components_TransformComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TransformComponent */ "./src/components/TransformComponent.ts");
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../manager-factory */ "./src/manager-factory.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../system */ "./src/systems/system.ts");
/* harmony import */ var _collision_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collision-direction */ "./src/systems/collision/collision-direction.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var CollisionSystem = /** @class */ (function (_super) {
    __extends(CollisionSystem, _super);
    function CollisionSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'collision';
        _this.currentEntityCollisions = new Map();
        return _this;
    }
    CollisionSystem.prototype.dispose = function (entity) {
        if (this.currentEntityCollisions.has(entity.id)) {
            this.currentEntityCollisions.delete(entity.id);
        }
        this.currentEntityCollisions.forEach(function (values, key) {
            var valueIndex = values.indexOf(entity.id);
            if (valueIndex !== -1) {
                values.splice(valueIndex, 1);
            }
        });
    };
    CollisionSystem.prototype.update = function () {
        var manager = _manager_factory__WEBPACK_IMPORTED_MODULE_3__["default"].get(_components_ColliderComponent__WEBPACK_IMPORTED_MODULE_0__["default"].name);
        // TODO: Replace this with a more robust collision dection implementation. For now this is fine for the number of sprites we are rendering with colliders.
        for (var i = 0; i < manager.entities.length; i++) {
            for (var ii = i + 1; ii < manager.entities.length; ii++) {
                this.resolveCollision(manager.entities[i], manager.entities[ii]);
            }
        }
    };
    CollisionSystem.prototype.resolveCollision = function (sourceEntity, targetEntity) {
        if (!sourceEntity || !targetEntity) {
            return;
        }
        var sourceCollider = sourceEntity.getComponent(_components_ColliderComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);
        var targetCollider = targetEntity.getComponent(_components_ColliderComponent__WEBPACK_IMPORTED_MODULE_0__["default"]);
        var sourceTransformComponent = sourceEntity.getComponent(_components_TransformComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
        var targetTransformComponent = targetEntity.getComponent(_components_TransformComponent__WEBPACK_IMPORTED_MODULE_2__["default"]);
        if (!sourceTransformComponent || !targetTransformComponent) {
            console.log('[ENTITY NO LONGER EXISTS ABORTING COLLISION CHECK]');
            return;
        }
        var sourceTransform = sourceTransformComponent.transform;
        var targetTransform = targetTransformComponent.transform;
        // get the vectors to check against
        var vX = sourceTransform.x + sourceTransform.width / 2 - (targetTransform.x + targetTransform.width / 2);
        var vY = sourceTransform.y + sourceTransform.height / 2 - (targetTransform.y + targetTransform.height / 2);
        // Half widths and half heights of the objects
        var ww2 = sourceTransform.width / 2 + targetTransform.width / 2;
        var hh2 = sourceTransform.height / 2 + targetTransform.height / 2;
        var colDir = _collision_direction__WEBPACK_IMPORTED_MODULE_5__["CollisionDirection"].NONE;
        // If the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision.
        if (Math.abs(vX) < ww2 && Math.abs(vY) < hh2) {
            if (!this.currentEntityCollisions.has(sourceEntity.id) || this.currentEntityCollisions.get(sourceEntity.id).indexOf(targetEntity.id) === -1) {
                if (!this.currentEntityCollisions.has(sourceEntity.id)) {
                    this.currentEntityCollisions.set(sourceEntity.id, [targetEntity.id]);
                }
                else {
                    this.currentEntityCollisions.get(sourceEntity.id).push(targetEntity.id);
                }
                // Only resolve the collision if both the source and target colliders are not triggers.
                if (!sourceCollider.isTrigger && !targetCollider.isTrigger) {
                    // figures out on which side we are colliding (top, bottom, left, or right)
                    var oX = ww2 - Math.abs(vX);
                    var oY = hh2 - Math.abs(vY);
                    // TODO: Ensure we get the collision direction even for triggers.
                    if (oX >= oY) {
                        if (vY > 0) {
                            colDir = _collision_direction__WEBPACK_IMPORTED_MODULE_5__["CollisionDirection"].TOP;
                            sourceTransform.y += oY;
                        }
                        else {
                            colDir = _collision_direction__WEBPACK_IMPORTED_MODULE_5__["CollisionDirection"].BOTTOM;
                            sourceTransform.y -= oY;
                        }
                    }
                    else {
                        if (vX > 0) {
                            colDir = _collision_direction__WEBPACK_IMPORTED_MODULE_5__["CollisionDirection"].LEFT;
                            sourceTransform.x += oX;
                        }
                        else {
                            colDir = _collision_direction__WEBPACK_IMPORTED_MODULE_5__["CollisionDirection"].RIGHT;
                            sourceTransform.x -= oX;
                        }
                    }
                }
                else {
                    console.log('TRIGGER ENTER');
                    console.log(sourceEntity);
                    console.log(targetEntity);
                    sourceEntity.getScriptInstances().forEach(function (scriptInstance) {
                        if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                            scriptInstance.instance.onTriggerEnter(targetEntity);
                        }
                    });
                    targetEntity.getScriptInstances().forEach(function (scriptInstance) {
                        if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                            scriptInstance.instance.onTriggerEnter(sourceEntity);
                        }
                    });
                }
            }
            else {
                console.log('TRIGGER STAY');
                sourceEntity.getScriptInstances().forEach(function (scriptInstance) {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerStay(targetEntity);
                    }
                });
                targetEntity.getScriptInstances().forEach(function (scriptInstance) {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerStay(sourceEntity);
                    }
                });
            }
        }
        else {
            if (this.currentEntityCollisions.has(sourceEntity.id) && this.currentEntityCollisions.get(sourceEntity.id).indexOf(targetEntity.id) !== -1) {
                this.currentEntityCollisions.delete(sourceEntity.id);
                _manager_factory__WEBPACK_IMPORTED_MODULE_3__["default"].get(_components_ScriptComponent__WEBPACK_IMPORTED_MODULE_1__["default"].name).instances;
                sourceEntity.getScriptInstances().forEach(function (scriptInstance) {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerLeave(targetEntity);
                    }
                });
                targetEntity.getScriptInstances().forEach(function (scriptInstance) {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerLeave(sourceEntity);
                    }
                });
            }
        }
        return colDir; // If you need info of the side that collided
    };
    return CollisionSystem;
}(_system__WEBPACK_IMPORTED_MODULE_4__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (CollisionSystem);


/***/ }),

/***/ "./src/systems/script/ScriptSystem.ts":
/*!********************************************!*\
  !*** ./src/systems/script/ScriptSystem.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScriptComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ScriptComponent */ "./src/components/ScriptComponent.ts");
/* harmony import */ var _manager_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manager-factory */ "./src/manager-factory.ts");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system */ "./src/systems/system.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ScriptSystem = /** @class */ (function (_super) {
    __extends(ScriptSystem, _super);
    function ScriptSystem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'script';
        return _this;
    }
    ScriptSystem.prototype.update = function () {
        var scriptComponentManager = _manager_factory__WEBPACK_IMPORTED_MODULE_1__["default"].get(_components_ScriptComponent__WEBPACK_IMPORTED_MODULE_0__["default"].name);
        scriptComponentManager.entities.forEach(function (entity) {
            var scriptComponent = scriptComponentManager.getInstance(entity);
            if (!scriptComponent.instance) {
                scriptComponent.instance = new scriptComponent.scritableEntity();
                scriptComponent.instance.onCreate();
            }
            scriptComponent.instance.update();
        });
    };
    ScriptSystem.prototype.dispose = function (entity) {
    };
    return ScriptSystem;
}(_system__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (ScriptSystem);


/***/ }),

/***/ "./src/systems/system.ts":
/*!*******************************!*\
  !*** ./src/systems/system.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var System = /** @class */ (function () {
    function System() {
    }
    return System;
}());
/* harmony default export */ __webpack_exports__["default"] = (System);


/***/ }),

/***/ "./src/time.ts":
/*!*********************!*\
  !*** ./src/time.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.calculateDeltaTime = function (time) {
        if (!Time.lastTimestamp) {
            Time.lastTimestamp = time;
            Time.fps = 0;
            return;
        }
        Time.deltaTime = (time - Time.lastTimestamp) / 1000;
        Time.lastTimestamp = time;
        Time.fps = 1 / Time.deltaTime;
    };
    Time.lastTimestamp = performance.now();
    return Time;
}());
/* harmony default export */ __webpack_exports__["default"] = (Time);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQtbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYW1lcmFDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29sbGlkZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0ZXJpYWxDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhZ0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaWxlbWFwQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYW5zZm9ybUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYW5hZ2Vycy9DYW1lcmFDb21wb25lbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hbmFnZXJzL0NvbGxpZGVyQ29tcG9uZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYW5hZ2Vycy9JbWFnZUNvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFuYWdlcnMvTWF0ZXJpYWxDb21wb25lbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hbmFnZXJzL1NjcmlwdENvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFuYWdlcnMvU3ByaXRlUmVuZGVyZXJDb21wb25lbnRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hbmFnZXJzL1RhZ0NvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFuYWdlcnMvVGlsZW1hcENvbXBvbmVudE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFuYWdlcnMvVHJhbnNmb3JtQ29tcG9uZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnRpdHktbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvTWF0NC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MvY2FtZXJhLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9yZW5kZXJlci9iYXNlLXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy9yZW5kZXJlci9jYW52YXMtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoaWNzL3JlbmRlcmVyL3dlYmdsLXJlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaGljcy90aWxlc2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9sb2dnaW5nL2xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlci1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcmV0dXJucy9sb2FkLXNjZW5lLXJldHVybi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbWl0aXZlcy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbWl0aXZlcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJpbWl0aXZlcy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5c3RlbS1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zL2NvbGxpc2lvbi9jb2xsaXNpb24tZGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zL2NvbGxpc2lvbi9jb2xsaXNpb24tc3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9zeXN0ZW1zL3NjcmlwdC9TY3JpcHRTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5c3RlbXMvc3lzdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy90aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkIsT0FBTztZQUNMLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO1lBQzdDLEdBQUcsR0FBRyxH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QyxJQUFZO1FBQ3pDLElBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTztTQUNUO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUMsSUFBSSxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDbEMsQ0FBQztJQWRhLGtCQUFhLEdBQVcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBZTVELFdBQUM7Q0FBQTtBQWhCb0IsbUVBQUkiLCJmaWxlIjoiZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwbGljYXRpb24udHNcIik7XG4iLCJpbXBvcnQgVGltZSBmcm9tICcuL3RpbWUnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9ncmFwaGljcy9pbnB1dCc7XHJcbmltcG9ydCBDb2xsaXNpb25TeXN0ZW0gZnJvbSAnLi9zeXN0ZW1zL2NvbGxpc2lvbi9jb2xsaXNpb24tc3lzdGVtJztcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tICcuL3NjZW5lLW1hbmFnZXInO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgU3lzdGVtTWFuYWdlciBmcm9tICcuL3N5c3RlbS1tYW5hZ2VyJztcclxuaW1wb3J0IE1hbmFnZXJGYWN0b3J5IGZyb20gJy4vbWFuYWdlci1mYWN0b3J5JztcclxuaW1wb3J0IFRhZ0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGFnQ29tcG9uZW50JztcclxuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVHJhbnNmb3JtQ29tcG9uZW50JztcclxuaW1wb3J0IENhbWVyYUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvQ2FtZXJhQ29tcG9uZW50JztcclxuaW1wb3J0IE1hdGVyaWFsQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9NYXRlcmlhbENvbXBvbmVudCc7XHJcbmltcG9ydCBTcHJpdGVSZW5kZXJlckNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvU3ByaXRlUmVuZGVyZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgQ29sbGlkZXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbGxpZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IEltYWdlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9JbWFnZUNvbXBvbmVudCc7XHJcbmltcG9ydCBJbWFnZUNvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZXJzL0ltYWdlQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBDb2xsaWRlckNvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZXJzL0NvbGxpZGVyQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBTcHJpdGVSZW5kZXJlckNvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZXJzL1Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBDYW1lcmFDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2Vycy9DYW1lcmFDb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZXJzL1RyYW5zZm9ybUNvbXBvbmVudE1hbmFnZXInO1xyXG5pbXBvcnQgVGFnQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlcnMvVGFnQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBNYW5pZmVzdCBmcm9tICcuL21vZGVscy9tYW5pZmVzdCc7XHJcbmltcG9ydCBNYXRlcmlhbENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRzL21hbmFnZXJzL01hdGVyaWFsQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBTY3JpcHRTeXN0ZW0gZnJvbSAnLi9zeXN0ZW1zL3NjcmlwdC9TY3JpcHRTeXN0ZW0nO1xyXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9TY3JpcHRDb21wb25lbnQnO1xyXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudHMvbWFuYWdlcnMvU2NyaXB0Q29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBUaWxlbWFwQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9UaWxlbWFwQ29tcG9uZW50JztcclxuaW1wb3J0IFRpbGVtYXBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50cy9tYW5hZ2Vycy9UaWxlbWFwQ29tcG9uZW50TWFuYWdlcic7XHJcbmltcG9ydCBXZWJHTFJlbmRlcmVyIGZyb20gJy4vZ3JhcGhpY3MvcmVuZGVyZXIvd2ViZ2wtcmVuZGVyZXInO1xyXG5pbXBvcnQgQmFzZVJlbmRlcmVyIGZyb20gJy4vZ3JhcGhpY3MvcmVuZGVyZXIvYmFzZS1yZW5kZXJlcic7XHJcbmltcG9ydCBMb2FkU2NlbmVSZXR1cm4gZnJvbSAnLi9tb2RlbHMvcmV0dXJucy9sb2FkLXNjZW5lLXJldHVybic7XHJcbmltcG9ydCBDYW52YXNSZW5kZXJlciBmcm9tICcuL2dyYXBoaWNzL3JlbmRlcmVyL2NhbnZhcy1yZW5kZXJlcic7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2luZy9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXBwbGljYXRpb24ge1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRUeXBlKHR5cGUpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXBwbGljYXRpb25JbnN0YW5jZSA9IG5ldyB0eXBlKCk7XHJcbiAgICAgICAgICAgIGFwcGxpY2F0aW9uSW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWlucyB0aGUgcmVuZGVyaW5nIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgbWFpbiBsb29wLlxyXG4gICAgICovXHJcbiAgICByZW5kZXJlcjogQmFzZVJlbmRlcmVyOyBcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYWluIGlucHV0IHN5c3RlbS5cclxuICAgICAqL1xyXG4gICAgaW5wdXQ6IElucHV0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkZWQgdG9cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgb25TdGFydCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1haW4gY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIHN5c3RlbXMuXHJcbiAgICAgICAgU3lzdGVtTWFuYWdlci5yZWdpc3RlcihuZXcgQ29sbGlzaW9uU3lzdGVtKCkpO1xyXG4gICAgICAgIFN5c3RlbU1hbmFnZXIucmVnaXN0ZXIobmV3IFNjcmlwdFN5c3RlbSgpKTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgY29tcG9uZW50cy5cclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihUYWdDb21wb25lbnQsIG5ldyBUYWdDb21wb25lbnRNYW5hZ2VyKCkpO1xyXG4gICAgICAgIE1hbmFnZXJGYWN0b3J5LnJlZ2lzdGVyKFRyYW5zZm9ybUNvbXBvbmVudCwgbmV3IFRyYW5zZm9ybUNvbXBvbmVudE1hbmFnZXIpO1xyXG4gICAgICAgIE1hbmFnZXJGYWN0b3J5LnJlZ2lzdGVyKENhbWVyYUNvbXBvbmVudCwgbmV3IENhbWVyYUNvbXBvbmVudE1hbmFnZXIoKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoTWF0ZXJpYWxDb21wb25lbnQsIG5ldyBNYXRlcmlhbENvbXBvbmVudE1hbmFnZXIoKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoU3ByaXRlUmVuZGVyZXJDb21wb25lbnQsIG5ldyBTcHJpdGVSZW5kZXJlckNvbXBvbmVudE1hbmFnZXIoKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoQ29sbGlkZXJDb21wb25lbnQsIG5ldyBDb2xsaWRlckNvbXBvbmVudE1hbmFnZXIoKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoSW1hZ2VDb21wb25lbnQsIG5ldyBJbWFnZUNvbXBvbmVudE1hbmFnZXIoKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoU2NyaXB0Q29tcG9uZW50LCBuZXcgU2NyaXB0Q29tcG9uZW50TWFuYWdlcigpKTtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihUaWxlbWFwQ29tcG9uZW50LCBuZXcgVGlsZW1hcENvbXBvbmVudE1hbmFnZXIoKSk7XHJcblxyXG4gICAgICAgIExvZ2dlci5pbmZvKGBSZWdpc3RlcmVkICR7TWFuYWdlckZhY3RvcnkubWFuYWdlcnMuc2l6ZX0gbWFuYWdlcihzKWAsIEFwcGxpY2F0aW9uLm5hbWUpO1xyXG4gICAgICAgIExvZ2dlci5kYXRhKCdSZWdpc3RlcmVkIG1hbmFnZXIocyknLCBNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3R1YWxseSBiZWdpbnMgdGhlIGdhbWUgaW5zdGFuY2UuIFByb2Nlc3NlcyB0aGUgY29uZmlndXJhdGlvbi5cclxuICAgICAqIFxyXG4gICAgICogQGF1dGhvciBOU1N1cmVcclxuICAgICAqIEBzaW5jZSAxMS84LzIwMjBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGluaXQocmVuZGVyVHlwZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdTdGFydGVkIGluaXRpYWxpemluZyBhcHBsaWNhdGlvbicsIEFwcGxpY2F0aW9uLm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIXJlbmRlclR5cGUpIHtcclxuICAgICAgICAgICAgcmVuZGVyVHlwZSA9ICdjYW52YXMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVuZ2luZUNvbmZpZ1BhdGg6IHN0cmluZyA9ICdtYW5pZmVzdC5qc29uJztcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lcyB3aGF0IGJhc2UgdXJsIHRvIHVzZSBmb3IgbG9hZGluZyBhcHBsaWNhdGlvbiByZXNvdXJjZXMgKHRpbGVzZXQsIGNvbmZpZ3VyYXRpb25zLCBldGMpLlxyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICAgICAgLy8gVXNlZCBpbiB0aGUgZWRpdG9yLlxyXG4gICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiYXNlVXJsJykpIHtcclxuICAgICAgICAgICAgQ29uZmlndXJhdGlvbi5iYXNlVXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybFBhcmFtcy5nZXQoJ2Jhc2VVcmwnKSk7XHJcbiAgICAgICAgICAgIGVuZ2luZUNvbmZpZ1BhdGggPSBgJHtDb25maWd1cmF0aW9uLmJhc2VVcmx9LyR7ZW5naW5lQ29uZmlnUGF0aH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9hZCBlbmdpbmUgY29uZmlndXJhdGlvbi5cclxuICAgICAgICBsZXQgZW5naW5lQ29uZmlnOiBNYW5pZmVzdCA9IGF3YWl0IChhd2FpdCBmZXRjaChlbmdpbmVDb25maWdQYXRoKS5jYXRjaCh0aGlzLmhhbmRsZUxvYWRFcnJvcikpLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gTG9hZCB0aGUgZmlyc3Qgc2NlbmUgYW5kIGluaXQgdGhlIHJlbmRlcmVyIHdpdGggdGhlIGRlZmF1bHQgc2NlbmUgYW5kIHRpbGVzZXRzLlxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5sb2FkKGVuZ2luZUNvbmZpZy5zY2VuZXNbMF0pLnRoZW4oKGxvYWRTY2VuZVJ0bjogTG9hZFNjZW5lUmV0dXJuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZW5kZXJUeXBlID09PSAnd2ViZ2wnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFdlYkdMUmVuZGVyZXIobG9hZFNjZW5lUnRuLnNjZW5lLCBsb2FkU2NlbmVSdG4udGlsZXNldHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBDYW52YXNSZW5kZXJlcihsb2FkU2NlbmVSdG4uc2NlbmUsIGxvYWRTY2VuZVJ0bi50aWxlc2V0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoKTtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBtYWluIGFwcGxpY2F0aW9uIGxvb3AuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWU6IG51bWJlcikgPT4gdGhpcy5tYWluTG9vcCh0aW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVMb2FkRXJyb3IocmVzcG9uc2UpOiBSZXNwb25zZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGNvZGU6IDUwMCxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZXJyb3JcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWFpbiBsb29wIGNvbnRhaW5zIGFsbCB0aGUgcmVuZGVyaW5nIGxvZ2ljIHdpbGwgYmUgY2FsbGVkIGZyb20gd2l0aGluIHRoaXMgZnVuY3Rpb24uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB0aW1lIFRoZSB0aW1lIGJldHdlZW4gdGhlIGFuaW1hdGlvbiBmcmFtZXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBhdXRob3IgTlNTdXJlXHJcbiAgICAgKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWFpbkxvb3AodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIHBlcmlwaGVyYWwgZGF0YSAodGltZSwgbW91c2UsIGV0YykgZm9yIHVzZSB3aXRoaW4gdGhlIHJlbmRlciBzeXN0ZW1zLlxyXG4gICAgICAgIFRpbWUuY2FsY3VsYXRlRGVsdGFUaW1lKHRpbWUpO1xyXG4gICAgICAgIC8vIE1vdXNlLnVwZGF0ZSh0aGlzLnJlbmRlcmVyLm1vdXNlUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggYW55IHJlZ2lzdGVyZWQgc3lzdGVtcyBhbmQgZXhlY3V0ZSB0aGUgdXBkYXRlIG1ldGhvZCBmb3IgZWFjaCBzeXN0ZW0uXHJcbiAgICAgICAgLy8gU3lzdGVtTWFuYWdlci5zeXN0ZW1zLmZvckVhY2goKHN5c3RlbTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHN5c3RlbS51cGRhdGUoKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgZHJhdyBtZXRob2Qgd2l0aGluIHRoZSByZW5kZXJlci5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmRyYXcoKTtcclxuXHJcbiAgICAgICAgLy8gUmVxdWVzdCBhIG5ldyBhbmltYXRpb24gZnJhbWUuXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZTogbnVtYmVyKSA9PiB0aGlzLm1haW5Mb29wKHRpbWUpKTtcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vbW9kZWxzL2VudGl0eVwiO1xyXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvU2NyaXB0Q29tcG9uZW50XCI7XHJcblxyXG5pbnRlcmZhY2UgRW50aXR5Q29tcG9uZW50TWFwIHtcclxuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyPFRDb21wb25lbnQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCBpbnN0YW5jZSBmb3IgdGhlIHNwZWNpZmljIG1hbmFnZXIgdGhhdCBpbmhlcml0cyB0aGUgY29tcG9uZW50IG1hbmFnZXIuIEZvciBleGFtcGxlXHJcbiAgICAgKiBpZiB0aGUgVGFnQ29tcG9uZW50TWFuYWdlciBpcyB0aGUgaW5oZXJ0aW5nIHRoZW4gdGhpcyB3aWxsIGNvbnRhaW4gYWxsIG9mIHRoZSB0YWcgY29tcG9uZW50IGluc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgaW5zdGFuY2VzOiBUQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb21wb25lbnQgaW5zdGFuY2UgZm9yIHRoZSBzcGVjaWZpYyBtYW5hZ2VyIHRoYXQgaW5oZXJpdHMgdGhlIGNvbXBvbmVudCBtYW5hZ2VyLiBGb3IgZXhhbXBsZVxyXG4gICAgICogaWYgdGhlIFRhZ0NvbXBvbmVudE1hbmFnZXIgaXMgdGhlIGluaGVydGluZyB0aGVuIHRoaXMgd2lsbCBjb250YWluIGFsbCBvZiB0aGUgdGFnIGNvbXBvbmVudCBpbnN0YW5jZXMuXHJcbiAgICAgKi9cclxuICAgIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGFpbnMgYSBtYXAgYmV0d2VlbiB0aGUgaWQgb2YgYW4gZW50aXR5IGFuZCBhbGwgaXRzIGFzc29jaWF0ZWQgY29tcG9uZW50IHR5cGVzLlxyXG4gICAgICovXHJcbiAgICBtYXA6IEVudGl0eUNvbXBvbmVudE1hcCA9IHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJ5cyB0byBhZGQgdGhlIGluc3RhbmNlIG9mIGEgY29tcG9uZW50IHRvIGFuIGVudGl0eS4gSWYgdGhlIGNvbXBvbmVudCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhlIGVudGl0eSBhbmQgZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duLlxyXG4gICAgICogTm90ZSB0aGF0IHRoZSBlbnRpdGllcyBtYXkgaGF2ZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHNjcmlwdCBjb21wb25lbnQuXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gYXNzb2NpYXRlZCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpdGguXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50SW5zdGFuY2UgVGhlIGNvbXBvbmVudCBpbnN0YW5jZSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgZW50aXR5LlxyXG4gICAgICovXHJcbiAgICBhZGRDb21wb25lbnRJbnN0YW5jZShlbnRpdHk6IEVudGl0eSwgY29tcG9uZW50SW5zdGFuY2U6IFRDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBbZW50aXR5LmlkXSkge1xyXG4gICAgICAgICAgICAvLyBFbnRpdGllcyBhcmUgYWxsb3dlZCB0byBoYXZlIG11bHRpcGxlIHNjcmlwdCBjb21wb25lbnQgaW5zdGFuY2VzIHNvIHRoZSBkdXBsaWNhdGUgY29tcG9uZW50IGNoZWNrIGRvZXMgbm90IGFwcGx5IHRvIGluc3RhbmNlcyBvZiB0aGUgc2NyaXB0IHR5cGUuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50SW5zdGFuY2UgIT09IHR5cGVvZiBTY3JpcHRDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29tcG9uZW50SW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgYFske2NvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWV9XTogWW91IGNhbid0IG5vdCBoYXZlIG11bHRpcGxlIGNvbXBvbmVudCBvZiB0aGUgc2FtZSB0eXBlIG9uIGVudGl0eSB1bmxlc3MgdGhhdCBjb21wb25lbnQgaXMgYSBzY3JpcHQuYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpdGhpbiB0aGUgY3VycmVudCBtYW5hZ2VyLlxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goY29tcG9uZW50SW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMubWFwW2VudGl0eS5pZF0gPSB0aGlzLmluc3RhbmNlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlKGVudGl0eTogRW50aXR5KTogVENvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tYXBbZW50aXR5LmlkXTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1tpbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2Ugb2YgdGhlIGVudGl0eSByZWZlcmVuY2UgYW5kIGFueSByZWxhdGVkIGRhdGEuIENhbGxlZCB3aGVuIGFuIGVudGl0eSBpcyBkZXN0cm95ZWQuXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdG8gZGlzcG9zZSBvZiB0aGUgcmVmZXJlbmNlcyBmb3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNwb3NlKGVudGl0eTogRW50aXR5KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gJ1NjcmlwdENvbXBvbmVudE1hbmFnZXInKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWFwW2VudGl0eS5pZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMubWFwW2VudGl0eS5pZF0pO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubWFwW2VudGl0eS5pZF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZW50aXR5SW5kZXg6IG51bWJlciA9IHRoaXMuZW50aXRpZXMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gZW50aXR5LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRpdHlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMuc3BsaWNlKGVudGl0eUluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENhbWVyYSBmcm9tIFwiLi4vZ3JhcGhpY3MvY2FtZXJhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbWVyYT86IENhbWVyYSkge1xyXG4gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL3ByaW1pdGl2ZXMvcG9pbnRcIjtcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vcHJpbWl0aXZlcy90cmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpZGVyQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgcG9pbnRzOiBBcnJheTxQb2ludD4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNmb3JtPzogVHJhbnNmb3JtLCBwdWJsaWMgaXNUcmlnZ2VyPzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgIHRoaXMuaXNUcmlnZ2VyID0gaXNUcmlnZ2VyO1xyXG5cclxuICAgICAgICAvLyBUb3AgbGVmdC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkpKTtcclxuXHJcbiAgICAgICAgLy8gVG9wIHJpZ2h0LlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHRyYW5zZm9ybS54ICsgdHJhbnNmb3JtLndpZHRoLCB0cmFuc2Zvcm0ueSkpO1xyXG5cclxuICAgICAgICAvLyBCb3R0b20gbGVmdC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkgKyB0cmFuc2Zvcm0uaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSByaWdodC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCArIHRyYW5zZm9ybS53aWR0aCwgdHJhbnNmb3JtLnkgKyB0cmFuc2Zvcm0uaGVpZ2h0KSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNvbXBvbmVudCB7XHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQ29tcG9uZW50IHtcclxuICAgIGZpbGxTdHlsZTogc3RyaW5nO1xyXG4gICAgYWxwaGE6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmlsbFN0eWxlPzogc3RyaW5nLCBhbHBoYT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSBhbHBoYTtcclxuICAgIH1cclxufSIsImltcG9ydCBTY3JpcHRhYmxlRW50aXR5IGZyb20gXCIuLi9zeXN0ZW1zL3NjcmlwdC9TY3JpcHRhYmxlRW50aXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRDb21wb25lbnQgIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzY3JpdGFibGVFbnRpdHk/OiB0eXBlb2YgU2NyaXB0YWJsZUVudGl0eSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5zdGFuY2U6IFNjcmlwdGFibGVFbnRpdHk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlUmVuZGVyZXJDb21wb25lbnQge1xyXG4gICAgbGF5ZXI6IG51bWJlcjtcclxuICAgIHRpbGVzZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcm93PzogbnVtYmVyO1xyXG4gICAgY29sdW1uPzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxheWVyPzogbnVtYmVyLCB0aWxlc2V0SW5kZXg/OiBudW1iZXIsIHJvdz86IG51bWJlciwgY29sdW1uPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyO1xyXG4gICAgICAgIHRoaXMudGlsZXNldEluZGV4ID0gdGlsZXNldEluZGV4O1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lPzogc3RyaW5nKSB7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZW1hcENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsYXllcj86IG51bWJlciwgdGlsZXNldEluZGV4PzogbnVtYmVyLCB0aWxlcz86IG51bWJlcltdKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxheWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHRpbGVzZXRJbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgICB0aWxlczogbnVtYmVyW10gPSBbXTtcclxufSIsImltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm1Db21wb25lbnQge1xyXG4gICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcblxyXG4gICAgY29uc3RydWN0b3IodHJhbnNmb3JtPzogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IENhbWVyYUNvbXBvbmVudCBmcm9tIFwiLi4vQ2FtZXJhQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmFDb21wb25lbnRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50TWFuYWdlcjxDYW1lcmFDb21wb25lbnQ+IHtcclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IENvbGxpZGVyQ29tcG9uZW50IGZyb20gXCIuLi9Db2xsaWRlckNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXJDb21wb25lbnRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50TWFuYWdlcjxDb2xsaWRlckNvbXBvbmVudD4ge1xyXG5cclxufSIsImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnQtbWFuYWdlclwiO1xyXG5pbXBvcnQgSW1hZ2VDb21wb25lbnQgZnJvbSBcIi4uL0ltYWdlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNvbXBvbmVudE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnRNYW5hZ2VyPEltYWdlQ29tcG9uZW50PiB7XHJcblxyXG59IiwiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC1tYW5hZ2VyXCI7XHJcbmltcG9ydCBNYXRlcmlhbENvbXBvbmVudCBmcm9tIFwiLi4vTWF0ZXJpYWxDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGVyaWFsQ29tcG9uZW50TWFuYWdlciBleHRlbmRzIENvbXBvbmVudE1hbmFnZXI8TWF0ZXJpYWxDb21wb25lbnQ+IHtcclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IFNjcmlwdENvbXBvbmVudCBmcm9tIFwiLi4vU2NyaXB0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRDb21wb25lbnRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50TWFuYWdlcjxTY3JpcHRDb21wb25lbnQ+IHtcclxuXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50IGZyb20gXCIuLi9TcHJpdGVSZW5kZXJlckNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlUmVuZGVyZXJDb21wb25lbnRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50TWFuYWdlcjxTcHJpdGVSZW5kZXJlckNvbXBvbmVudD4ge1xyXG5cclxufSIsImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnQtbWFuYWdlclwiO1xyXG5pbXBvcnQgVGFnQ29tcG9uZW50IGZyb20gXCIuLi9UYWdDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ0NvbXBvbmVudE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnRNYW5hZ2VyPFRhZ0NvbXBvbmVudD4ge1xyXG5cclxufSIsImltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9jb21wb25lbnQtbWFuYWdlclwiO1xyXG5pbXBvcnQgVGlsZW1hcENvbXBvbmVudCBmcm9tIFwiLi4vVGlsZW1hcENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZW1hcENvbXBvbmVudE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnRNYW5hZ2VyPFRpbGVtYXBDb21wb25lbnQ+IHtcclxuICAgIG5hbWU6IHN0cmluZyA9ICdUaWxlbWFwQ29tcG9uZW50TWFuYWdlcic7XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudCBmcm9tIFwiLi4vVHJhbnNmb3JtQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm1Db21wb25lbnRNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50TWFuYWdlcjxUcmFuc2Zvcm1Db21wb25lbnQ+IHtcclxuXHJcbn0iLCJpbXBvcnQgTWFuaWZlc3QgZnJvbSBcIi4vbW9kZWxzL21hbmlmZXN0XCI7XHJcblxyXG4vKipcclxuICogQ29udGFpbnMgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gaW5zdGFuY2UuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5TU3VyZVxyXG4gKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogTG9hZGVkIHJlc291cmNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGVuZ2luZUNvbmZpZzogTWFuaWZlc3QgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYmFzZVVybDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBzaXplIG9mIHRoZSBzcXVhcmVzIG9mIHRoZSBjYW52YXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ3JpZFNxdWFyZVNpemU6IG51bWJlciA9IDMyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGJhY2tncm91bmQgZmlsbCB0aGF0IGltbWVkaWF0ZWx5IGZpbGwgdGhlIGNhbnZhcyBhcmVhIGFmdGVyIHRoZSBjbGVhckNhbnZhcyBtZXRob2QgdG8gY2FsbGVkIGluIHRoZSBkcmF3IG1ldGhvZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjYW52YXNGaWxsOiBzdHJpbmcgPSAnIzE4MTgxOCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGluIHNlbGVjdGlvbiBtb2RlIHRoaXMgaXMgdGhlIGZpbGwgY29sb3Igb2YgdGhlIHNlbGVjdGVkIGFyZWEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VsZWN0aW9uVHJhbnNmb3JtRmlsbDogc3RyaW5nID0gJ3JnYmEoMjUyLDI0OCwyMjcsIDAuNyknO1xyXG59IiwiaW1wb3J0IENhbWVyYUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NhbWVyYUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29sbGlkZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db2xsaWRlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSW1hZ2VDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9JbWFnZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgTWF0ZXJpYWxDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9NYXRlcmlhbENvbXBvbmVudFwiO1xyXG5pbXBvcnQgU2NyaXB0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvU2NyaXB0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBTcHJpdGVSZW5kZXJlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBUYWdDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9UYWdDb21wb25lbnRcIjtcclxuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybUNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHR5cGVzIG9mIGFsbCBvZiB0aGUgYXZhaWxhYmxlIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY29tcG9uZW50VHlwZXM6IGFueVtdID0gW1xyXG4gICAgICAgIFRhZ0NvbXBvbmVudCxcclxuICAgICAgICBUcmFuc2Zvcm1Db21wb25lbnQsXHJcbiAgICAgICAgU3ByaXRlUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICAgICAgQ29sbGlkZXJDb21wb25lbnQsXHJcbiAgICAgICAgQ2FtZXJhQ29tcG9uZW50LFxyXG4gICAgICAgIEltYWdlQ29tcG9uZW50LFxyXG4gICAgICAgIFNjcmlwdENvbXBvbmVudFxyXG4gICAgXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkIGNoYXJhY3RlcnMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhcmFjdGVyczogc3RyaW5nID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxufSIsImltcG9ydCBDYW1lcmFDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9DYW1lcmFDb21wb25lbnRcIjtcclxuaW1wb3J0IENvbGxpZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29sbGlkZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnQtbWFuYWdlclwiO1xyXG5pbXBvcnQgTWFuYWdlckZhY3RvcnkgZnJvbSBcIi4vbWFuYWdlci1mYWN0b3J5XCI7XHJcbmltcG9ydCBTcHJpdGVSZW5kZXJlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBUYWdDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9UYWdDb21wb25lbnRcIjtcclxuaW1wb3J0IFRyYW5zZm9ybUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL2dyYXBoaWNzL2NhbWVyYVwiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL21vZGVscy9lbnRpdHlcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuL21vZGVscy9zY2VuZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vcHJpbWl0aXZlcy9wb2ludFwiO1xyXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL3ByaW1pdGl2ZXMvdHJhbnNmb3JtXCI7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSBcIi4vc3lzdGVtcy9zeXN0ZW1cIjtcclxuaW1wb3J0IFN5c3RlbU1hbmFnZXIgZnJvbSBcIi4vc3lzdGVtLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2luZy9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEVudGl0eU1hbmFnZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBFbnRpdHlNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIUVudGl0eU1hbmFnZXIuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRW50aXR5TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBFbnRpdHlNYW5hZ2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gRW50aXR5TWFuYWdlci5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW50aXRpZXM6IEVudGl0eVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGVudGl0eSBhbmQgc3RvcmVzIGl0IHdpdGhpbiB0aGUgZW50aXR5IG1hbmFnZXIuXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgbmV3bHkgY3JlYXRlZCBlbnRpdHkgcG9wdWxhdGVkIHdpdGggdGhlIHJlcXVpcmVkIGNvbXBvbmVudHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGUoKTogRW50aXR5IHtcclxuICAgICAgICBsZXQgZW50aXR5OiBFbnRpdHkgPSBuZXcgRW50aXR5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpZDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIENvbnN0YW50cy5jaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlkICs9IENvbnN0YW50cy5jaGFyYWN0ZXJzLnN1YnN0cmluZyhjaGFyYWN0ZXJJbmRleCwgY2hhcmFjdGVySW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZW50aXR5LmlkID0gYGVudGl0eS0ke2lkfWA7XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgcmVxdWlyZWQgY29tcG9uZW50cyB0byB0aGUgZW50aXR5LlxyXG4gICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IFRhZ0NvbXBvbmVudChgZW50aXR5JHtlbnRpdHkuaWR9YCkpO1xyXG4gICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybUNvbXBvbmVudChUcmFuc2Zvcm0uZW1wdHkpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIG9mIHRoZSBnaXZlbiBlbnRpdHkgYWxvbmcgd2l0aCBhbnkgcmVmZXJlbmNlcyB3aXRoaW4gYW55IGNvbXBvbmVudCBtYW5hZ2VyIG9yIHN5c3RlbXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byBkaXNwb3NlIG9mLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZShlbnRpdHk6IEVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZW50aXRpZXMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gZW50aXR5LmlkKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIHJlZmVyZW5jZXMgc3RvcmVkIGluIGVhY2ggb2YgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGluc3RhbmNlcy5cclxuICAgICAgICAgICAgLy8gTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcjogQ29tcG9uZW50TSkgPT4gbWFuYWdlci5kaXNwb3NlKGVudGl0eSkpO1xyXG4gICAgICAgICAgICAvLyBTeXN0ZW1NYW5hZ2VyLnN5c3RlbXMuZm9yRWFjaCgoc3lzdGVtOiBTeXN0ZW0pID0+IHN5c3RlbS5kaXNwb3NlKGVudGl0eSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBlbnRpdGllcy5cclxuICAgICAqIEBwYXJhbSBzY2VuZUNvbmZpZyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnNlRW50aXRpZXMoc2NlbmVDb25maWc6IFNjZW5lKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcnNlZEVudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBCb290c3RyYXAgZW50aXRpZXMuXHJcbiAgICAgICAgc2NlbmVDb25maWcuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5Q29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRFbnRpdHkgPSBuZXcgRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICBwYXJzZWRFbnRpdHkuaWQgPSBlbnRpdHlDb25maWcuaWQ7XHJcbiAgICAgICAgICAgIHBhcnNlZEVudGl0eS5lbmFibGVkID0gZW50aXR5Q29uZmlnLmVuYWJsZWQ7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHNvdXJjZVByb3BlcnR5IGluIGVudGl0eUNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZUNvbXBvbmVudCA9IGVudGl0eUNvbmZpZ1tzb3VyY2VQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VQcm9wZXJ0eSA9PT0gJ3Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRFbnRpdHkuYWRkQ29tcG9uZW50KG5ldyBTcHJpdGVSZW5kZXJlckNvbXBvbmVudChzb3VyY2VDb21wb25lbnQubGF5ZXIsIHNvdXJjZUNvbXBvbmVudC50aWxlc2V0LCBzb3VyY2VDb21wb25lbnQucm93LCBzb3VyY2VDb21wb25lbnQuY29sdW1uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVByb3BlcnR5ID09PSAndHJhbnNmb3JtQ29tcG9uZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRFbnRpdHkuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm1Db21wb25lbnQobmV3IFRyYW5zZm9ybShzb3VyY2VDb21wb25lbnQueCwgc291cmNlQ29tcG9uZW50LnksIHNvdXJjZUNvbXBvbmVudC53aWR0aCwgc291cmNlQ29tcG9uZW50LmhlaWdodCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlUHJvcGVydHkgPT09ICdjYW1lcmFDb21wb25lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmE6IENhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS52aWV3cG9ydCA9IG5ldyBUcmFuc2Zvcm0oc291cmNlQ29tcG9uZW50LmNhbWVyYS52aWV3cG9ydC54LCBzb3VyY2VDb21wb25lbnQuY2FtZXJhLnZpZXdwb3J0LnksIHNvdXJjZUNvbXBvbmVudC5jYW1lcmEudmlld3BvcnQud2lkdGgsIHNvdXJjZUNvbXBvbmVudC5jYW1lcmEudmlld3BvcnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLm1heCA9IG5ldyBQb2ludChzb3VyY2VDb21wb25lbnQuY2FtZXJhLm1heC54LCBzb3VyY2VDb21wb25lbnQuY2FtZXJhLm1heC55KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEVudGl0eS5hZGRDb21wb25lbnQobmV3IENhbWVyYUNvbXBvbmVudChjYW1lcmEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlUHJvcGVydHkgPT09ICd0YWdDb21wb25lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEVudGl0eS5hZGRDb21wb25lbnQobmV3IFRhZ0NvbXBvbmVudChzb3VyY2VDb21wb25lbnQubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzb3VyY2VQcm9wZXJ0eSA9PT0gJ2NvbGxpZGVyQ29tcG9uZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRFbnRpdHkuYWRkQ29tcG9uZW50KG5ldyBDb2xsaWRlckNvbXBvbmVudChzb3VyY2VDb21wb25lbnQudHJhbnNmb3JtLCBzb3VyY2VDb21wb25lbnQuaXNUcmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMb2dnZXIuaW5mbyhgU2NlbmUgZW50aXR5ICR7ZW50aXR5Q29uZmlnLmlkfSBwYXJzZWRgLCBFbnRpdHlNYW5hZ2VyLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcGFyc2VkRW50aXRpZXMucHVzaChwYXJzZWRFbnRpdHkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBFbnRpdHlNYW5hZ2VyLmdldEluc3RhbmNlKCkuZW50aXRpZXMgPSBwYXJzZWRFbnRpdGllcztcclxuXHJcbiAgICAgICAgTG9nZ2VyLmluZm8oYEZpbmlzaGVkIHBhcnNpbmcgJHtwYXJzZWRFbnRpdGllcy5sZW5ndGh9IGVudGl0aWVzYCwgRW50aXR5TWFuYWdlci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhY2tzIHRoZSBlbnRpdGllcyB3aXRoaW4gZWFjaCBjb21wb25lbnQgbWFuYWdlciBpbnRvIGEgc2luZ2xlIGFycmF5IGZvciBzYXZpbmcgdG8gdGhlIHNjZW5lIGpzb24gZmlsZS5cclxuICAgICAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIHBhY2tlZCBlbnRpdGllcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhY2tFbnRpdGllcygpOiBFbnRpdHlbXSB7XHJcbiAgICAgICAgbGV0IGVudGl0eUNvbmZpZ3M6IEVudGl0eVtdID0gW107XHJcblxyXG4gICAgICAgIEVudGl0eU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVudGl0eUNvbmZpZzogYW55ID0ge307XHJcblxyXG4gICAgICAgICAgICBDb25zdGFudHMuY29tcG9uZW50VHlwZXMuZm9yRWFjaCgoY29tcG9uZW50VHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudEluc3RhbmNlOiBDb21wb25lbnQgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KGNvbXBvbmVudFR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUNvbmZpZ1tjb21wb25lbnRUeXBlLm5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBjb21wb25lbnRUeXBlLm5hbWUuc2xpY2UoMSldID0gY29tcG9uZW50SW5zdGFuY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGVudGl0eUNvbmZpZykubGVuZ3RoICE9PSAwICYmIGVudGl0eUNvbmZpZy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRpdHlDb25maWdzLnB1c2goZW50aXR5Q29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZW50aXR5Q29uZmlncztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50cyhlbnRpdHk6IEVudGl0eSk6IENvbXBvbmVudFtdIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xyXG5cclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5mb3JFYWNoKChtYW5hZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLm1hcFtlbnRpdHkuaWRdKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobWFuYWdlci5pbnN0YW5jZXNbbWFuYWdlci5tYXBbZW50aXR5LmlkXV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCBcclxuICAgICAgICAgICAgMCwgMSwgMCwgXHJcbiAgICAgICAgICAgIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24odHJhbnNsYXRlWDogbnVtYmVyLCB0cmFuc2xhdGVZOiBudW1iZXIsIHRyYW5zbGF0ZVo6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgeDogbnVtYmVyID0gdHJhbnNsYXRlWDtcclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gdHJhbnNsYXRlWTtcclxuICAgICAgICBsZXQgejogbnVtYmVyID0gdHJhbnNsYXRlWjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgeCwgeSwgeiwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB4Um90YXRpb24oYW5nbGVJblJhZGlhbnMpIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyB5Um90YXRpb24oYW5nbGVJblJhZGlhbnMpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgelJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYywgcywgMCwgMCxcclxuICAgICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NhbGluZyhzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsICAwLCAgMCxcclxuICAgICAgICAgICAgMCwgc3ksICAwLCAgMCxcclxuICAgICAgICAgICAgMCwgIDAsIHN6LCAgMCxcclxuICAgICAgICAgICAgMCwgIDAsICAwLCAgMSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYSwgYik6IG51bWJlcltdIHtcclxuICAgICAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGIwMiA9IGJbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGIxMSA9IGJbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIyMCA9IGJbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGIyMyA9IGJbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGIzMiA9IGJbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTAyID0gYVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTExID0gYVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTIwID0gYVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTIzID0gYVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTMyID0gYVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIGIwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCArIGIwMyAqIGEzMCxcclxuICAgICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMSxcclxuICAgICAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMixcclxuICAgICAgICAgIGIwMCAqIGEwMyArIGIwMSAqIGExMyArIGIwMiAqIGEyMyArIGIwMyAqIGEzMyxcclxuICAgICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgICAgIGIxMCAqIGEwMiArIGIxMSAqIGExMiArIGIxMiAqIGEyMiArIGIxMyAqIGEzMixcclxuICAgICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuICAgICAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMCxcclxuICAgICAgICAgIGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMSArIGIyMyAqIGEzMSxcclxuICAgICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMixcclxuICAgICAgICAgIGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMyxcclxuICAgICAgICAgIGIzMCAqIGEwMCArIGIzMSAqIGExMCArIGIzMiAqIGEyMCArIGIzMyAqIGEzMCxcclxuICAgICAgICAgIGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMSxcclxuICAgICAgICAgIGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMixcclxuICAgICAgICAgIGIzMCAqIGEwMyArIGIzMSAqIGExMyArIGIzMiAqIGEyMyArIGIzMyAqIGEzMyxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRlKG0sIHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShtLCBNYXQ0LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyB4Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkobSwgTWF0NC54Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyB5Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkobSwgTWF0NC55Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyB6Um90YXRlKG0sIGFuZ2xlSW5SYWRpYW5zKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkobSwgTWF0NC56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBzY2FsZShtLCBzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkobSwgTWF0NC5zY2FsaW5nKHN4LCBzeSwgc3opKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHByb2plY3Rpb24od2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcclxuICAgICAgICAvLyBOb3RlOiBUaGlzIG1hdHJpeCBmbGlwcyB0aGUgWSBheGlzIHNvIDAgaXMgYXQgdGhlIHRvcC5cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgIDIgLyB3aWR0aCwgMCwgMCwgMCxcclxuICAgICAgICAgICAwLCAtMiAvIGhlaWdodCwgMCwgMCxcclxuICAgICAgICAgICAwLCAwLCAyIC8gZGVwdGgsIDAsXHJcbiAgICAgICAgICAtMSwgMSwgMCwgMSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIG9ydGhvZ3JhcGhpYyhsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCB0b3A6IG51bWJlciwgbmVhcjogbnVtYmVyLCBmYXI6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAyIC8gKHJpZ2h0IC0gbGVmdCksIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDIgLyAodG9wIC0gYm90dG9tKSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMiAvIChuZWFyIC0gZmFyKSwgMCxcclxuICAgICAgIFxyXG4gICAgICAgICAgICAobGVmdCArIHJpZ2h0KSAvIChsZWZ0IC0gcmlnaHQpLFxyXG4gICAgICAgICAgICAoYm90dG9tICsgdG9wKSAvIChib3R0b20gLSB0b3ApLFxyXG4gICAgICAgICAgICAobmVhciArIGZhcikgLyAobmVhciAtIGZhciksXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vcHJpbWl0aXZlcy9Qb2ludFwiO1xyXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi9wcmltaXRpdmVzL3RyYW5zZm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVkIGluIHdvcmxkIGNvb3JkaW5hdGVzLlxyXG4gICAgICovXHJcbiAgICB2aWV3cG9ydDogVHJhbnNmb3JtO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVkIGluIHdvcmxkIGNvb3JkaW5hdGVzLlxyXG4gICAgICovXHJcbiAgICBtYXg6IFBvaW50O1xyXG5cclxuICAgIG9ydGhvZ3JhcGhpY1NpemU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgaXNDbGFtcGVkWCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3cG9ydC54ID49IHRoaXMubWF4LnggLyAyIHx8IHRoaXMudmlld3BvcnQueCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NsYW1wZWRZKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdwb3J0LnkgPj0gdGhpcy5tYXgueSAvIDIgfHwgdGhpcy52aWV3cG9ydC55ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBTY2VuZSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NjZW5lXCI7XHJcbmltcG9ydCBUaWxlc2V0IGZyb20gXCIuLi90aWxlc2V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2FudmFzIHRvIHJlbmRlciB0aGUgY3VycmVudCBzY2VuZSB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGVuZ2luZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBzY2VuZSB0byByZW5kZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzY2VuZTogU2NlbmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGlsZXNldHMgdG8gdXNlIGZvciB0aGUgY3VycmVudCBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IHRpbGVzZXRzOiBUaWxlc2V0W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBsb2Fkcy5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgaW5pdCgpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhd3MgdG8gdGhlIHJlbmRlcmVyLlxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBkcmF3KCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZXMvUG9pbnRcIjtcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlcy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IExheWVyIGZyb20gXCIuLi9sYXllclwiO1xyXG5pbXBvcnQgVGlsZXNldCBmcm9tIFwiLi4vdGlsZXNldFwiO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcclxuaW1wb3J0IFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50XCI7XHJcbmltcG9ydCBNYXRlcmlhbENvbXBvbmVudCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXRlcmlhbENvbXBvbmVudFwiO1xyXG5pbXBvcnQgVHJhbnNmb3JtQ29tcG9uZW50IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RyYW5zZm9ybUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQmFzZVJlbmRlcmVyIGZyb20gXCIuL2Jhc2UtcmVuZGVyZXJcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuLi8uLi9tb2RlbHMvc2NlbmVcIjtcclxuaW1wb3J0IE1hbmFnZXJGYWN0b3J5IGZyb20gXCIuLi8uLi9tYW5hZ2VyLWZhY3RvcnlcIjtcclxuaW1wb3J0IFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tYW5hZ2Vycy9TcHJpdGVSZW5kZXJlckNvbXBvbmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFRpbGVtYXBDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGlsZW1hcENvbXBvbmVudFwiO1xyXG5pbXBvcnQgVGlsZW1hcENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWFuYWdlcnMvVGlsZW1hcENvbXBvbmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2xvZ2dpbmcvbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNSZW5kZXJlciBleHRlbmRzIEJhc2VSZW5kZXJlciAge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2FudmFzIHRvIHJlbmRlciB0aGUgY3VycmVudCBzY2VuZSB0by5cclxuICAgICAqL1xyXG4gICAgIHB1YmxpYyBlbmdpbmVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAvKipcclxuICAgICAgKiBUaGUgY3VycmVudCBzY2VuZSB0byByZW5kZXIuXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIHNjZW5lOiBTY2VuZTtcclxuIFxyXG4gICAgIC8qKlxyXG4gICAgICAqIFRoZSB0aWxlc2V0cyB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHNjZW5lLlxyXG4gICAgICAqL1xyXG4gICAgIHB1YmxpYyB0aWxlc2V0czogVGlsZXNldFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgMkQgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHRoZSBkZWZhdWx0IGNhbnZhcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYWluIHNjZW5lIGNhbWVyYSB0aGlzIGlzIGFsd2F5cyBoZXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWFpbkNhbWVyYTogQ2FtZXJhID0gbmV3IENhbWVyYSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB0aWxlc2V0czogVGlsZXNldFtdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMudGlsZXNldHMgPSB0aWxlc2V0cztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiWW91IGNhbm5vdCBpbml0aWFsaXplIHRoZSByZW5kZXJlciB3aXRob3V0IGEgc2NlbmUuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGlsZXNldHMgfHwgdGhpcy50aWxlc2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJZb3UgY2Fubm90IGluaXRpYWxpemUgdGhlIHJlbmRlcmVyIHdpdGhvdXQgYW55IHRpbGVzZXRzLlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBjYW52YXMgZm9yIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ1N0YXJ0ZWQgaW5pdGlhbGl6aW5nIGNhbnZhcyByZW5kZXJlcicsIENhbnZhc1JlbmRlcmVyLm5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5naW5lLWNhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IDxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ+dGhpcy5lbmdpbmVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2FudmFzTW91c2VEb3duKGV2ZW50KSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4gdGhpcy5vbkNhbnZhc01vdXNlVXAoZXZlbnQpKTtcclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHRoaXMub25DYW52YXNNb3VzZU1vdmUoZXZlbnQpKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgY2FtZXJhIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnZpZXdwb3J0ID0gbmV3IFRyYW5zZm9ybSgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKCksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KCkpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5tYXggPSBuZXcgUG9pbnQoKHRoaXMuc2NlbmUuY29sdW1ucyAqIHRoaXMuc2NlbmUudGlsZVNpemUpIC0gdGhpcy5tYWluQ2FtZXJhLnZpZXdwb3J0LndpZHRoLCAodGhpcy5zY2VuZS5yb3dzICogdGhpcy5zY2VuZS50aWxlU2l6ZSkgLSB0aGlzLm1haW5DYW1lcmEudmlld3BvcnQuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ0ZpbmlzaGVkIGluaXRpYWxpemluZyBjYW52YXMgcmVuZGVyZXInLCBDYW52YXNSZW5kZXJlci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgYW55IGVudGl0aWVzIHRvIHRoZSBjYW52YXMgaWYgdGhleSBoYXZlIHRoZSBzcHJpdGUgcmVuZGVyZXIgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFyIHRoZSBjYW52YXMgZm9yIHRoZSBuZXh0IHJlbmRlciBjYWxsLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVuZGVyIHRoZSB0aWxlbWFwIGFuZCBzdGFuZGFsb25lIHNwcml0ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5zdXJlIHRoZSBjYW52YXMgaXMgcmVzaXplZCB0byBtYXRjaCB0aGUgY3VycmVudCBzaXplIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF5ZXJzLmZvckVhY2goKGxheWVyOiBMYXllciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSB0aWxlbWFwIHNwcml0ZXMgZm9yIHRoZSBjdXJyZW50IGxheWVyLlxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVtYXBNYW5hZ2VyID0gTWFuYWdlckZhY3RvcnkuZ2V0KFRpbGVtYXBDb21wb25lbnQubmFtZSkgYXMgVGlsZW1hcENvbXBvbmVudE1hbmFnZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZW1hcE1hbmFnZXIuaW5zdGFuY2VzLmZvckVhY2goKHRpbGVtYXBJbnN0YW5jZTogVGlsZW1hcENvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydENvbCA9IDA7IC8vIE1hdGguZmxvb3IoY2FtZXJhLnZpZXdwb3J0LnggLyB0aGlzLnNjZW5lLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kQ29sID0gNjQ7IC8vIHN0YXJ0Q29sICsgKGNhbWVyYS52aWV3cG9ydC53aWR0aCAvIHRoaXMuc2NlbmUudGlsZVNpemUpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRSb3cgPSAwOyAvLyBNYXRoLmZsb29yKGNhbWVyYS52aWV3cG9ydC55IC8gdGhpcy5zY2VuZS50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZFJvdyA9IDY0OyAvLyBzdGFydFJvdyArIChjYW1lcmEudmlld3BvcnQuaGVpZ2h0IC8gdGhpcy5zY2VuZS50aWxlU2l6ZSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRYID0gMDsgLy8gLWNhbWVyYS52aWV3cG9ydC54ICsgc3RhcnRDb2wgKiB0aGlzLnNjZW5lLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRZID0gMDsgLy8gLWNhbWVyYS52aWV3cG9ydC55ICsgc3RhcnRSb3cgKiB0aGlzLnNjZW5lLnRpbGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBzdGFydENvbDsgY29sIDw9IGVuZENvbDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gc3RhcnRSb3c7IHJvdyA8PSBlbmRSb3c7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlOiBudW1iZXIgPSB0aWxlbWFwSW5zdGFuY2UudGlsZXNbcm93ICogNjQgKyBjb2xdOyAvLyB0aGlzLnNjZW5lLmNvbHVtbnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IChjb2wgLSBzdGFydENvbCkgKiAzMiArIG9mZnNldFg7IC8vIHRoaXMuc2NlbmUudGlsZVNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gKHJvdyAtIHN0YXJ0Um93KSAqIDMyICsgb2Zmc2V0WTsgLy8gdGhpcy5zY2VuZS50aWxlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc2V0c1t0aWxlbWFwSW5zdGFuY2UudGlsZXNldEluZGV4XS5pbWFnZSwgLy90aGlzLnRpbGVzZXRzW2xheWVyLnRpbGVzZXRdLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZSAqIDMyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIGFueSBzdGFuZGFsb25lIHNwcml0ZXMgZm9yIHRoZSBjdXJyZW50IGxheWVyLlxyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZU1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoU3ByaXRlUmVuZGVyZXJDb21wb25lbnQubmFtZSkgYXMgU3ByaXRlUmVuZGVyZXJDb21wb25lbnRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwcml0ZU1hbmFnZXIuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZVJlbmRlcmVyID0gc3ByaXRlTWFuYWdlci5nZXRJbnN0YW5jZShlbnRpdHkpIGFzIFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVUcmFuc2Zvcm0gPSBlbnRpdHkuZ2V0Q29tcG9uZW50KFRyYW5zZm9ybUNvbXBvbmVudCkgYXMgVHJhbnNmb3JtQ29tcG9uZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBlbnRpdHkuZ2V0Q29tcG9uZW50KE1hdGVyaWFsQ29tcG9uZW50KSBhcyBNYXRlcmlhbENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlNYXRlcmlhbChtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzZXRzWzBdLmltYWdlLC8vIHRoaXMudGlsZXNldHNbc3ByaXRlUmVuZGVyZXJDb21wb25lbnQubGF5ZXJdLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVSZW5kZXJlci5jb2x1bW4gKiB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVSZW5kZXJlci5yb3cgKiB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVUcmFuc2Zvcm0udHJhbnNmb3JtLnggLSAwLCAvLyBjYW1lcmFPZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVUcmFuc2Zvcm0udHJhbnNmb3JtLnkgLSAwLCAvLyBjYW1lcmFPZmZzZXRZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnRpbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhcHBseU1hdGVyaWFsKG1hdGVyaWFsQ29tcG9uZW50OiBNYXRlcmlhbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBtYXRlcmlhbENvbXBvbmVudC5maWxsU3R5bGU7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gbWF0ZXJpYWxDb21wb25lbnQuYWxwaGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIGNhbnZhcyBmb3IgdGhlIG5leHQgZHJhdyBjYWxsLlxyXG4gICAgICogXHJcbiAgICAgKiBAYXV0aG9yIE5TU3VyZVxyXG4gICAgICogQHNpbmNlIDExLzgvMjAyMFxyXG4gICAgICovXHJcbiAgICBjbGVhckNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2V0Q2FudmFzV2lkdGgoKSwgdGhpcy5nZXRDYW52YXNIZWlnaHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVzIHRoZSBjYW52YXMgY2FudmFzIHRvIGZpdCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICAgKiBcclxuICAgICAqIEBhdXRob3IgTlNTdXJlXHJcbiAgICAgKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZUNhbnZhcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRDYW52YXNXaWR0aCgpICE9PSB3aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLmdldENhbnZhc0hlaWdodCgpICE9PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FudmFzSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCB3aWR0aCBvZiB0aGUgY2FudmFzLlxyXG4gICAgICovXHJcbiAgICBnZXRDYW52YXNIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmVDYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBoZWlnaHQgb2YgdGhlIGNhbnZhcy5cclxuICAgICAqL1xyXG4gICAgZ2V0Q2FudmFzV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmVDYW52YXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIGNhbnZhcy5cclxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCB0byBzZXQgdGhlIGNhbnZhcyB0by5cclxuICAgICAqL1xyXG4gICAgc2V0Q2FudmFzSGVpZ2h0KGhlaWdodDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgd2lkdGggb2YgdGhlIGNhbnZhcy5cclxuICAgICAqIEBwYXJhbSB3aWR0aCBUaGUgd2lkdGggdG8gc2V0IHRoZSBjYW52YXMgdG8uXHJcbiAgICAgKi9cclxuICAgIHNldENhbnZhc1dpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FudmFzTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vdXNlZG93bicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FudmFzTW91c2VVcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZXVwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW52YXNNb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW91c2Vtb3ZlJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZVJlbmRlcmVyIGZyb20gXCIuL2Jhc2UtcmVuZGVyZXJcIjtcclxuaW1wb3J0IE1hdDQgZnJvbSBcIi4uL01hdDRcIjtcclxuaW1wb3J0IFRpbGVzZXQgZnJvbSBcIi4uL3RpbGVzZXRcIjtcclxuaW1wb3J0IFNjZW5lIGZyb20gXCIuLi8uLi9tb2RlbHMvc2NlbmVcIjtcclxuXHJcbmNsYXNzIERyYXdhYmxlIHtcclxuICAgIGJ1ZmZlcjogV2ViR0xCdWZmZXI7XHJcbiAgICBwb3NpdGlvbnM6IG51bWJlcltdO1xyXG59XHJcblxyXG5jbGFzcyBJbWFnZSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJHTFJlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcblxyXG4gICAgcHVibGljIGVuZ2luZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIHRpbGVzZXRzOiBUaWxlc2V0W10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSAyRCByZW5kZXJpbmcgY29udGV4dCBmb3IgdGhlIGRlZmF1bHQgY2FudmFzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgc2hhZGVyUGF0aDogc3RyaW5nID0gJy9zaGFkZXJzJztcclxuXHJcbiAgICBwcml2YXRlIF9wcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcblxyXG4gICAgcHJpdmF0ZSBfaW1hZ2VQcm9ncmFtOiBXZWJHTFByb2dyYW07XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uQXR0cmlidXRlTG9jYXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xvckF0dHJpYnV0ZUxvY2F0aW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3JVbmlmb3JtTG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX3RyYW5zbGF0aW9uVW5pZm9ybUxvY2F0aW9uOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9yb3RhdGlvblVuaWZvcm1Mb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NhbGVVbmlmb3JtTG9jYXRpb246IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX21hdHJpeFVuaWZvcm1Mb2NhdGlvbjogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhd2FibGVzOiBEcmF3YWJsZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfdmVydGV4U2hhZGVyczogV2ViR0xTaGFkZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2ZyYWdtZW50U2hhZGVyczogV2ViR0xTaGFkZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX3Rlc3RUcmFuc2xhdGlvbkFtb3VudDogbnVtYmVyW10gPSBbMCwgMCwgMF07IC8vIHgseSx6XHJcblxyXG4gICAgcHJpdmF0ZSBfdGVzdFJvdGF0aW9uQW1vdW50OiBudW1iZXJbXSA9IFswLCAxLCAwXTsgLy8geCx5LHpcclxuXHJcbiAgICBwcml2YXRlIF90ZXN0U2NhbGVBbW91bnQ6IG51bWJlcltdID0gWzEsIDEsIDBdOyAvL3gseSx6XHJcblxyXG4gICAgcHJpdmF0ZSBfdGVzdFRyYW5zbGF0ZVNwZWVkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3JCdWZmZXI6IFdlYkdMQnVmZmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgdGlsZXNldHM6IFRpbGVzZXRbXSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnRpbGVzZXRzID0gdGlsZXNldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5lbmdpbmVDYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJXZWJHTCBub3Qgc3VwcG9ydGVkLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCB2ZXJ0ZXh0U2hhZGVyU291cmNlOiBzdHJpbmcgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7dGhpcy5zaGFkZXJQYXRofS92ZXJ0ZXgtc2hhZGVyLmdsc2xgKSkudGV4dCgpO1xyXG4gICAgICAgIGxldCBmcmFnbWVudFNoYWRlclNvdXJjZTogc3RyaW5nID0gYXdhaXQgKGF3YWl0IGZldGNoKGAke3RoaXMuc2hhZGVyUGF0aH0vZnJhZ21lbnQtc2hhZGVyLmdsc2xgKSkudGV4dCgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvciBpbnRvIGJhc2ljIGhlbHBlciBtZXRob2QuXHJcbiAgICAgICAgbGV0IHZlcnRleHRTaGFkZXI6IFdlYkdMU2hhZGVyID0gdGhpcy5fY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXh0U2hhZGVyU291cmNlKTtcclxuICAgICAgICBsZXQgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyID0gdGhpcy5fY3JlYXRlU2hhZGVyKHRoaXMuY29udGV4dC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHByb2dyYW0gYW5kIGxpbmsgdGhlIHNoYWRlcnMuXHJcbiAgICAgICAgdGhpcy5fcHJvZ3JhbSA9IHRoaXMuX2NyZWF0ZVByb2dyYW0odmVydGV4dFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgICAgICAvLyBMb29rIHdoZXJlIHBvc2l0aW9uIGRhdGEgd2lsbCBnby5cclxuICAgICAgICB0aGlzLl9wb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICdhX3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5fY29sb3JBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuY29udGV4dC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLl9wcm9ncmFtLCAnYV9jb2xvcicpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb2xvckJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCB0aGlzLl9jb2xvckJ1ZmZlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIG5ldyBVaW50OEFycmF5KFtcclxuICAgICAgICAgICAgMjU1LCAyNTUsIDI1NSxcclxuICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMFxyXG4gICAgICAgIF0pLCB0aGlzLmNvbnRleHQuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICAvLyBMb29rcyB1cCB1bmlmb3JtcyBmb3Igc2hhZGVyLlxyXG4gICAgICAgIC8vIERvIHRoaXMgb24gaW5pdCBub3QgaW4gdGhlIHJlbmRlciBsb29wLlxyXG4gICAgICAgIHRoaXMuX2NvbG9yVW5pZm9ybUxvY2F0aW9uID0gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9wcm9ncmFtLCAndV9jb2xvcicpO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24gPSB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICd1X3Jlc29sdXRpb24nKTtcclxuICAgICAgICB0aGlzLl9tYXRyaXhVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICd1X21hdHJpeCcpO1xyXG5cclxuICAgICAgICB0aGlzLl9jcmVhdGVEcmF3YWJsZShbXHJcbiAgICAgICAgICAgIDEwLCAyMCwgMCwgLy8gdHJpIDEgdmVydCAxXHJcbiAgICAgICAgICAgIDgwLCAyMCwgMCwgLy8gdHJpIDEgdmVydCAyXHJcbiAgICAgICAgICAgIDEwLCAzMCwgMCwgLy8gdHJpIDEgdmVydCAzXHJcbiAgICAgICAgICAgIDEwLCAzMCwgMCxcclxuICAgICAgICAgICAgODAsIDIwLCAwLFxyXG4gICAgICAgICAgICA4MCwgMzAsIDBcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5fY3JlYXRlRHJhd2FibGUoW1xyXG4gICAgICAgIC8vICAgICAxMDAsIDIwMCwgMCxcclxuICAgICAgICAvLyAgICAgODAwLCAyMDAsIDAsXHJcbiAgICAgICAgLy8gICAgIDEwMCwgMzAwLCAwLFxyXG4gICAgICAgIC8vICAgICAxMDAsIDMwMCwgMCxcclxuICAgICAgICAvLyAgICAgODAwLCAyMDAsIDAsXHJcbiAgICAgICAgLy8gICAgIDgwMCwgMzAwLCAwXHJcbiAgICAgICAgLy8gXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlRHJhd2FibGUocG9zaXRpb25zOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkcmF3YWJsZTogRHJhd2FibGUgPSBuZXcgRHJhd2FibGUoKTtcclxuXHJcbiAgICAgICAgZHJhd2FibGUucG9zaXRpb25zID0gcG9zaXRpb25zO1xyXG4gICAgICAgIGRyYXdhYmxlLmJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgZHJhd2FibGUuYnVmZmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGRyYXdhYmxlLnBvc2l0aW9ucyksIHRoaXMuY29udGV4dC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RyYXdhYmxlcy5wdXNoKGRyYXdhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0QW5nbGVVbml0Q2lyY2xlQ29vcmRpbmF0ZXMoYW5nbGVJbkRlZ3JlZXM6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gYW5nbGVJbkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgICAgICBsZXQgc2luZSA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuICAgICAgICBsZXQgY29zaW5lID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzaW5lOiBzaW5lLFxyXG4gICAgICAgICAgICBjb3NpbmU6IGNvc2luZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmdsZUluRGVncmVzczogbnVtYmVyID0gMDtcclxuICAgIGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbV0VCR0xdOiBEcmF3Jyk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0ZXN0IHRyYW5zbGF0ZVxyXG4gICAgICAgIC8vIHRoaXMuX3Rlc3RUcmFuc2xhdGlvbkFtb3VudFswXSArPSB0aGlzLl90ZXN0VHJhbnNsYXRlU3BlZWQgKiBUaW1lLmRlbHRhVGltZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hbmdsZUluRGVncmVzcyArPSAxMCAqIFRpbWUuZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICAvLyBQb2ludHMgb24gYSB1bml0IGNpcmNsZSBhcmUgY2FsbGVkIHNpbmUgYW5kIGNvc2luZSAoc2luZSA9IHgpIChjb3NpbmUgPSB5KS5cclxuICAgICAgICBsZXQgdW5pdENpcmNsZUNvb3JkaW5hdGVzOiBhbnkgPSB0aGlzLl9jb252ZXJ0QW5nbGVVbml0Q2lyY2xlQ29vcmRpbmF0ZXModGhpcy5hbmdsZUluRGVncmVzcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Rlc3RSb3RhdGlvbkFtb3VudFswXSA9IHVuaXRDaXJjbGVDb29yZGluYXRlcy5zaW5lO1xyXG4gICAgICAgIHRoaXMuX3Rlc3RSb3RhdGlvbkFtb3VudFsxXSA9IHVuaXRDaXJjbGVDb29yZGluYXRlcy5jb3NpbmU7XHJcblxyXG4gICAgICAgIC8vIFRlbGxzIFdlYkdMIHRvIGNvbnZlcnQgdGhlIGNsaXAgc3BhY2UgdmFsdWVzIHdlIHNldCBnbF9wb3NpdGlvbiB0byBpbiB0aGUgdmVydGV4dCBzaGFkZXIgYmFjayBpbnRvIHBpeGVscyAoc2NyZWVuIHNwYWNlKS5cclxuICAgICAgICAvLyAtMSBtYXBzIHRvIDAgYW5kIDEgbWFwcyB0byB0aGUgY2FudmFzIHdpZHRoIHNhbWUgZ29lcyBmb3IgdGhlIHktYXhpcy5cclxuICAgICAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy5lbmdpbmVDYW52YXMud2lkdGgsIHRoaXMuZW5naW5lQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRoZSBjYW52YXMgYnkgbWFraW5nIGl0IHRyYW5zcGFyZW50LlxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhcih0aGlzLmNvbnRleHQuQ09MT1JfQlVGRkVSX0JJVCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHRoaXMuX3Byb2dyYW0pO1xyXG5cclxuICAgICAgICAvLyBUcmFuc2Zvcm0gZnJvbSBjbGlwIHNwYWNlIGJhY2sgaW50byBwaXhlbHMgZm9yIHBvc2l0aW9uYWwgZGF0YS5cclxuICAgICAgICB0aGlzLmNvbnRleHQudW5pZm9ybTJmKHRoaXMuX3Jlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24sIHRoaXMuZW5naW5lQ2FudmFzLndpZHRoLCB0aGlzLmVuZ2luZUNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIGRyYXdhYmxlcyB0byByZW5kZXIuXHJcbiAgICAgICAgdGhpcy5fZHJhd2FibGVzLmZvckVhY2goKGRyYXdhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFNob3VsZCB0aGlzIGJlIGRvbmUgaW4gZWFjaCBpdGVyYXRpb24/IE9yIGJlZm9yZT9cclxuICAgICAgICAgICAgLy8gRW5hYmxlIHBvc2l0aW9uIGF0dHJpYnV0ZSBpbiB2ZXJ0ZXh0IHNoYWRlci4gU28gV2ViR0wgY2FuIHVzZSB0aGUgZGF0YSB3ZSBzZXQgaW4gdGhlIEFSUkFZX0JVRkZFUi5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX3Bvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgZHJhd2FibGUuYnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzaXplOiBudW1iZXIgPSAzOyAvLyAyIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAtPiAzIGZvciBvcnRob2dyYXBoaWMuXHJcbiAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5jb250ZXh0LkZMT0FUOyAvLyB0aGUgZGF0YSBpcyAzMmJpdCBmbG9hdHNcclxuICAgICAgICAgICAgbGV0IG5vcm1hbGl6ZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBkb24ndCBub3JtYWxpemUgdGhlIGRhdGFcclxuICAgICAgICAgICAgbGV0IHN0cmlkZTogbnVtYmVyID0gMDsgLy8gMCA9IG1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwOyAvLyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXJcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLl9wb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRPRE86IFNob3VsZCB0aGlzIGJlIGRvbmUgaW4gZWFjaCBpdGVyYXRpb24/IE9yIGJlZm9yZT9cclxuICAgICAgICAgICAgLy8gRW5hYmxlIHBvc2l0aW9uIGF0dHJpYnV0ZSBpbiB2ZXJ0ZXh0IHNoYWRlci4gU28gV2ViR0wgY2FuIHVzZSB0aGUgZGF0YSB3ZSBzZXQgaW4gdGhlIEFSUkFZX0JVRkZFUi5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2NvbG9yQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgdGhpcy5fY29sb3JCdWZmZXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNTaXplOiBudW1iZXIgPSAzOyAvLyAyIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvbiAtPiAzIGZvciBvcnRob2dyYXBoaWMuXHJcbiAgICAgICAgICAgIGxldCBjVHlwZSA9IHRoaXMuY29udGV4dC5VTlNJR05FRF9CWVRFOyAvLyB0aGUgZGF0YSBpcyAzMmJpdCBmbG9hdHNcclxuICAgICAgICAgICAgbGV0IGNOb3JtYWxpemU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gZG9uJ3Qgbm9ybWFsaXplIHRoZSBkYXRhXHJcbiAgICAgICAgICAgIGxldCBjU3RyaWRlOiBudW1iZXIgPSAwOyAvLyAwID0gbW92ZSBmb3J3YXJkIHNpemUgKiBzaXplb2YodHlwZSkgZWFjaCBpdGVyYXRpb24gdG8gZ2V0IHRoZSBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGxldCBjT2Zmc2V0OiBudW1iZXIgPSAwOyAvLyBzdGFydCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBidWZmZXJcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLl9jb2xvckF0dHJpYnV0ZUxvY2F0aW9uLCBjU2l6ZSwgY1R5cGUsIGNOb3JtYWxpemUsIGNTdHJpZGUsIGNPZmZzZXQpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIFNldCB1bmlmb3Jtc1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudW5pZm9ybTRmKHRoaXMuX2NvbG9yVW5pZm9ybUxvY2F0aW9uLCAxLCAxLCAxLCAxKTsgLy8gY29sb3JcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBsZWZ0ID0gMDtcclxuICAgICAgICAgICAgLy8gdmFyIHJpZ2h0ID0gdGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgLy8gdmFyIGJvdHRvbSA9IHRoaXMuY29udGV4dC5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB2YXIgdG9wID0gMDtcclxuICAgICAgICAgICAgLy8gdmFyIG5lYXIgPSA0MDA7XHJcbiAgICAgICAgICAgIC8vIHZhciBmYXIgPSAtNDAwO1xyXG4gICAgICAgICAgICAvLyB2YXIgbWF0cml4ID0gTWF0NC5vcnRob2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1hdHJpeCA9IE1hdDQucHJvamVjdGlvbih0aGlzLmNvbnRleHQuY2FudmFzLndpZHRoLCB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodCwgNDAwKTtcclxuICAgICAgICAgICAgbWF0cml4ID0gTWF0NC50cmFuc2xhdGUobWF0cml4LCB0aGlzLl90ZXN0VHJhbnNsYXRpb25BbW91bnRbMF0sIHRoaXMuX3Rlc3RUcmFuc2xhdGlvbkFtb3VudFsxXSwgdGhpcy5fdGVzdFRyYW5zbGF0aW9uQW1vdW50WzJdKTtcclxuICAgICAgICAgICAgbWF0cml4ID0gTWF0NC54Um90YXRlKG1hdHJpeCwgdGhpcy5hbmdsZUluRGVncmVzcyAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBtYXRyaXggPSBNYXQ0LnlSb3RhdGUobWF0cml4LCB0aGlzLmFuZ2xlSW5EZWdyZXNzICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIG1hdHJpeCA9IE1hdDQuelJvdGF0ZShtYXRyaXgsIHRoaXMuYW5nbGVJbkRlZ3Jlc3MgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgbWF0cml4ID0gTWF0NC5zY2FsZShtYXRyaXgsIHRoaXMuX3Rlc3RTY2FsZUFtb3VudFswXSwgdGhpcy5fdGVzdFNjYWxlQW1vdW50WzFdLCB0aGlzLl90ZXN0U2NhbGVBbW91bnRbMl0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRqdXN0IG9yaWdpbi4gSG93IGRvZXMgdGhpcyBhY3R1YWxseSBhZGp1c3QgdGhlIHJvdGF0aW9uIHBvaW50PyBDYW4ndCBzZWVtIHRvIGdldCBpdCB3b3JraW5nP1xyXG4gICAgICAgICAgICAvLyBtYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShtYXRyaXgsIDE1MCwgMTUwLCAxNTApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYodGhpcy5fbWF0cml4VW5pZm9ybUxvY2F0aW9uLCBmYWxzZSwgbWF0cml4KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmltaXRpdmVUeXBlOiBudW1iZXIgPSB0aGlzLmNvbnRleHQuVFJJQU5HTEVTO1xyXG4gICAgICAgICAgICBsZXQgZHJhd09mZnNldDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgbGV0IGRyYXdDb3VudDogbnVtYmVyID0gNjsgLy8gc3F1YXJlIGZyb20gdHdvIHRyaWFuZ2xlcyB3b3VsZCBiZSA2LlxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0FycmF5cyhwcmltaXRpdmVUeXBlLCBkcmF3T2Zmc2V0LCBkcmF3Q291bnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1YmxpYyBkcmF3SW1hZ2UodGV4dHVyZTogV2ViR0xUZXh0dXJlLCB0ZXh0dXJlV2lkdGg6IG51bWJlciwgdGV4dHVyZUhlaWdodDogbnVtYmVyLCBkZXN0aW5hdGlvblg6IG51bWJlciwgZGVzdGluYXRpb25ZOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQuYmluZFRleHR1cmUodGhpcy5jb250ZXh0LlRFWFRVUkVfMkQpO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQudXNlUHJvZ3JhbSh0aGlzLl9pbWFnZVByb2dyYW0pO1xyXG5cclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uTG9jYXRpb24pO1xyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgdGV4Y29vcmRCdWZmZXIpO1xyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0ZXhjb29yZExvY2F0aW9uKTtcclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcih0ZXhjb29yZExvY2F0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xyXG5cclxuICAgIC8vICAgICAvLyB0aGlzIG1hdHJpeCB3aWxsIGNvbnZlcnQgZnJvbSBwaXhlbHMgdG8gY2xpcCBzcGFjZVxyXG4gICAgLy8gICAgIHZhciBtYXRyaXggPSBNYXQzLm9ydGhvZ3JhcGhpYygwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQsIDAsIC0xLCAxKTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyB0aGlzIG1hdHJpeCB3aWxsIHRyYW5zbGF0ZSBvdXIgcXVhZCB0byBkc3RYLCBkc3RZXHJcbiAgICAvLyAgICAgbWF0cml4ID0gbTQudHJhbnNsYXRlKG1hdHJpeCwgZHN0WCwgZHN0WSwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy8gdGhpcyBtYXRyaXggd2lsbCBzY2FsZSBvdXIgMSB1bml0IHF1YWRcclxuICAgIC8vICAgICAvLyBmcm9tIDEgdW5pdCB0byB0ZXhXaWR0aCwgdGV4SGVpZ2h0IHVuaXRzXHJcbiAgICAvLyAgICAgbWF0cml4ID0gTWF0NC5zY2FsZShtYXRyaXgsIHRleFdpZHRoLCB0ZXhIZWlnaHQsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIFNldCB0aGUgbWF0cml4LlxyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KG1hdHJpeExvY2F0aW9uLCBmYWxzZSwgbWF0cml4KTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyBUZWxsIHRoZSBzaGFkZXIgdG8gZ2V0IHRoZSB0ZXh0dXJlIGZyb20gdGV4dHVyZSB1bml0IDBcclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQudW5pZm9ybTFpKHRleHR1cmVMb2NhdGlvbiwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy8gZHJhdyB0aGUgcXVhZCAoMiB0cmlhbmdsZXMsIDYgdmVydGljZXMpXHJcbiAgICAvLyAgICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRVMsIDAsIDYpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIHNoYWRlciBvZiB0aGUgZ2l2ZW4gdHlwZSB1c2luZyB0aGUgc2hhZGVyIHNvdXJjZSB0ZXh0LlxyXG4gICAgICogQHBhcmFtIHNoYWRlclR5cGUgVGhlIHR5cGUgb2Ygc2hhZGVyIGVpdGhlciBWRVJURVhUX1NIQURFUiBvciBGUkFHTUVOVF9TSEFERVIuXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyU291cmNlIFRoZSBzb3VyY2UgdGV4dCBvZiB0aGUgc2hhZGVyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZTogR0xlbnVtLCBzaGFkZXJTb3VyY2U6IHN0cmluZyk6IFdlYkdMU2hhZGVyIHtcclxuICAgICAgICBsZXQgc2hhZGVyOiBXZWJHTFNoYWRlciA9IHRoaXMuY29udGV4dC5jcmVhdGVTaGFkZXIoc2hhZGVyVHlwZSk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBzaGFkZXIgc291cmNlIHRleHQgdG8gYmUgcGxhY2VkIGludG8gdGhlbiBjb21waWxlLlxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcblxyXG4gICAgICAgIGxldCBzdWNjZXNzZnVsOiBib29sZWFuID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuY29udGV4dC5DT01QSUxFX1NUQVRVUyk7XHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvciBpbnRvIHNvbWUgc29ydCBvZiBnZW5lcmFsIGRpc3Bvc2UgZnVuY3Rpb24gZm9yIHNoYWRlcnMuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICB0aHJvdyBgW1NIQURFUiBFUlJPUl06IFVuYWJsZSB0byBsb2FkIHNoYWRlciAke3NoYWRlclR5cGV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpbmtzIHZlcnRleCBzaGFkZXIgYW5kIGZyYWdtZW50IHNoYWRlciBpbnRvIGEgV2ViR0wgcHJvZ3JhbS5cclxuICAgICAqIEBwYXJhbSB2ZXJ0ZXh0U2hhZGVyIFRoZSB2ZXJ0ZXggc2hhZGVyIHRvIGxpbmsgdG8gdGhlIHByb2dyYW0uXHJcbiAgICAgKiBAcGFyYW0gZnJhZ21lbnRTaGFkZXIgVGhlIGZyYWdtZW50IHNoYWRlciB0byBsaW5rIHRvIHRoZSBwcm9ncmFtLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQcm9ncmFtKHZlcnRleHRTaGFkZXI6IFdlYkdMU2hhZGVyLCBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXIpOiBXZWJHTFByb2dyYW0ge1xyXG4gICAgICAgIGxldCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBBZGQgY2hlY2tzIHRvIGRldGVybWluZSB0aGF0IGVhY2ggc2hhZGVyIHBhcmFtZXRlciBpcyBhY3R1YWxseSBvZiB0aGUgY29ycmVjdCBzaGFkZXIgdHlwZS5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleHRTaGFkZXIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGxldCBzdWNjZXNzZnVsOiBib29sZWFuID0gdGhpcy5jb250ZXh0LmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgdGhpcy5jb250ZXh0LkxJTktfU1RBVFVTKTtcclxuXHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvciBpbnRvIHNvbWUgc29ydCBvZiBnZW5lcmFsIGRpc3Bvc2UgZnVuY3Rpb24gZm9yIHByb2dyYW1zLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIHRocm93IGBbU0hBREVSIEVSUk9SXTogVW5hYmxlIHRvIGxpbmsgc2hhZGVycyB0byBwcm9ncmFtYDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVzZXQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGltYWdlPzogSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZW51bSBMb2dUaHJlc2hvbGQge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBEQVRBID0gMSxcclxuICAgIERFQlVHID0gMixcclxuICAgIElORk8gPSAzLFxyXG4gICAgRVJST1IgPSA0LFxyXG4gICAgQ1JJVElDQUwgPSA1XHJcbn1cclxuXHJcbmNsYXNzIExvZ2dlciB7XHJcbiAgICBzdGF0aWMgdGhyZXNob2xkczogTG9nVGhyZXNob2xkW10gPSBbTG9nVGhyZXNob2xkLkRBVEEsIExvZ1RocmVzaG9sZC5ERUJVRywgTG9nVGhyZXNob2xkLklORk8sIExvZ1RocmVzaG9sZC5FUlJPUiwgTG9nVGhyZXNob2xkLkNSSVRJQ0FMXTtcclxuXHJcbiAgICBzdGF0aWMgZGVidWcobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudGhyZXNob2xkcy5pbmNsdWRlcyhMb2dUaHJlc2hvbGQuREVCVUcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbWUFLIERFQlVHXTogJHttc2d9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluZm8obXNnOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRocmVzaG9sZHMuaW5jbHVkZXMoTG9nVGhyZXNob2xkLklORk8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgJWMgW1lBSyBJTkZPIC0gJHtzb3VyY2V9XTogJHttc2d9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGVycm9yKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRocmVzaG9sZHMuaW5jbHVkZXMoTG9nVGhyZXNob2xkLkVSUk9SKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBbWUFLIEVSUk9SXTogJHttc2d9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyaXRpY2FsKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRocmVzaG9sZHMuaW5jbHVkZXMoTG9nVGhyZXNob2xkLkNSSVRJQ0FMKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBbWUFLIENSSVRJQ0FMXTogJHttc2d9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRhdGEobXNnOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy50aHJlc2hvbGRzLmluY2x1ZGVzKExvZ1RocmVzaG9sZC5EQVRBKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgJWMgW1lBSyBEQVRBXTogJHttc2d9YCwgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1JywgZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IExvZ2dlciwgTG9nVGhyZXNob2xkIH07IiwiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50LW1hbmFnZXJcIjtcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuYWdlckZhY3Rvcnkge1xyXG4gICAgcHVibGljIHN0YXRpYyBtYW5hZ2VyczogTWFwPGFueSwgYW55PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogQWRkIHR5cGUgY29udHJhaW50cy5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoY29tcG9uZW50VHlwZTogdHlwZW9mIENvbXBvbmVudCwgY29tcG9uZW50TWFuYWdlckluc3RhbmNlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIU1hbmFnZXJGYWN0b3J5Lm1hbmFnZXJzLmhhcyhjb21wb25lbnRUeXBlKSkge1xyXG4gICAgICAgICAgICBNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5zZXQoY29tcG9uZW50VHlwZSwgY29tcG9uZW50TWFuYWdlckluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQ8VENvbXBvbmVudE1hbmFnZXI+KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IFRDb21wb25lbnRNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5nZXQoY29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBgTWFuYWdlciBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZDogJHtjb21wb25lbnROYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2coKTogdm9pZCB7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gY29uc29sZS5sb2cobWFuYWdlcikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IE1hbmFnZXJGYWN0b3J5IGZyb20gXCIuLi9tYW5hZ2VyLWZhY3RvcnlcIjtcclxuaW1wb3J0IFNjcmlwdENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIG9iamVjdCBjbGFzcyB1c2VkIGZvciBzcHJpdGVzLCBjb2xsaWRlcnMsIHByaW1pdGl2ZXMsIGV0Yy4gQ29udGFpbnNcclxuICogc2hhcmVkIGNvZGUgY29tbW9uIGFjcm9zcyBtb3N0IGNsYXNzZXMuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5TU3VyZVxyXG4gKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgMTIgY2hhcmFjdGVyIElEIGZvciBlYWNoIGVudGl0eS5cclxuICAgICAqL1xyXG4gICAgLy8gaWQ6IHN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnJlcGxhY2UoL1teYS16XSsvZywgJycpLnN1YnN0cigwLCAxMik7XHJcbiAgICBpZDogc3RyaW5nID0gJyc7IC8vIFJlZmFjdG9yZWQgdG8gbnVtYmVyIGZvciBFQ1MuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgZW50aXR5LlxyXG4gICAgICovXHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBlbnRpdHkgc2hvdWxkIGJlIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50PFRDb21wb25lbnQ+KGNvbXBvbmVudEluc3RhbmNlOiBUQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoY29tcG9uZW50SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSkgYXMgYW55O1xyXG4gICAgICAgIG1hbmFnZXIuYWRkQ29tcG9uZW50SW5zdGFuY2UodGhpcywgY29tcG9uZW50SW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQ8VENvbXBvbmVudD4oY29tcG9uZW50VHlwZTogYW55KTogVENvbXBvbmVudCB7XHJcbiAgICAgICAgLy8gaWYgKGNvbXBvbmVudFR5cGUubmFtZSA9PT0gU2NyaXB0Q29tcG9uZW50Lm5hbWUpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coY29tcG9uZW50VHlwZS5uYW1lKTtcclxuICAgICAgICAvLyAgICAgdGhyb3cgXCJHZXR0aW5nIHNjcmlwdCBjb21wb25lbnRzIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkLlwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbWFuYWdlciA9IE1hbmFnZXJGYWN0b3J5LmdldChjb21wb25lbnRUeXBlLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiAoPGFueT5tYW5hZ2VyKS5pbnN0YW5jZXNbKDxhbnk+bWFuYWdlcikubWFwW3RoaXMuaWRdXSBhcyBUQ29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY3JpcHRJbnN0YW5jZXMoKTogU2NyaXB0Q29tcG9uZW50W10ge1xyXG4gICAgICAgIC8vIGxldCBzY3JpcHRNYW5hZ2VyID0gTWFuYWdlckZhY3RvcnkuZ2V0KFNjcmlwdENvbXBvbmVudC5uYW1lKSBhcyBTY3JpcHRDb21wb25lbnRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAvLyBpZiAoc2NyaXB0TWFuYWdlci5tYXAuaGFzKHRoaXMuaWQpKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHNjcmlwdE1hbmFnZXIuaW5zdGFuY2VzLmZpbHRlcih4ID0+IHNjcmlwdE1hbmFnZXIubWFwLmdldCh0aGlzLmlkKS5pbmNsdWRlcyh4LmlkKSkpO1xyXG4gICAgICAgIC8vICAgICAvLyBUT0RPOiBUaGlzIHdpbGwgbm90IHdvcmsgZm9yIHNjcmlwdCBjb21wb25lbnRzLlxyXG4gICAgICAgIC8vICAgICByZXR1cm4gc2NyaXB0TWFuYWdlci5pbnN0YW5jZXMuZmlsdGVyKHggPT4gc2NyaXB0TWFuYWdlci5tYXAuZ2V0KHRoaXMuaWQpLmluY2x1ZGVzKHguaWQpKSBhcyBTY3JpcHRDb21wb25lbnRbXTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgLy8gICAgIGxldCBtYW5hZ2VyID0gTWFuYWdlckZhY3RvcnkuZ2V0KGNvbXBvbmVudE5hbWUpO1xyXG5cclxuICAgIC8vICAgICBpZiAobWFuYWdlci5lbnRpdHlEYXRhTWFwLmhhcyh0aGlzLmlkKSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgY29tcG9uZW50SW5zdGFuY2VJZDogbnVtYmVyID0gbWFuYWdlci5lbnRpdHlEYXRhTWFwLmdldCh0aGlzLmlkKTtcclxuICAgIC8vICAgICAgICAgbWFuYWdlci5kYXRhLnNwbGljZShtYW5hZ2VyLmRhdGEuZmluZEluZGV4KHggPT4geC5pZCA9PT0gY29tcG9uZW50SW5zdGFuY2VJZCksIDEpO1xyXG4gICAgLy8gICAgICAgICBtYW5hZ2VyLmVudGl0eURhdGFNYXAuZGVsZXRlKHRoaXMuaWQpO1xyXG4gICAgLy8gICAgICAgICBtYW5hZ2VyLmRhdGFFbnRpdHlNYXAuZGVsZXRlKGNvbXBvbmVudEluc3RhbmNlSWQpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWFuYWdlcik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIGdldENvbXBvbmVudE5hbWVcclxufSIsImltcG9ydCBUaWxlc2V0IGZyb20gXCIuLi8uLi9ncmFwaGljcy90aWxlc2V0XCI7XHJcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRTY2VuZVJldHVybiB7XHJcbiAgICBzY2VuZTogU2NlbmU7XHJcbiAgICB0aWxlc2V0czogQXJyYXk8VGlsZXNldD4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHRpbGVzZXRzOiBUaWxlc2V0W10pIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy50aWxlc2V0cyA9IHRpbGVzZXRzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxufSIsImltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2dyYXBoaWNzL2NhbWVyYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY3JlZW5YKGNhbWVyYTogQ2FtZXJhKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54IC0gY2FtZXJhLnZpZXdwb3J0Lng7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xhbXBYKG1pbjogbnVtYmVyLCBtYXhMb3dlclJhbmdlOiBudW1iZXIsIG1heFVwcGVyUmFuZ2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMueCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4TG93ZXJSYW5nZSwgbWF4VXBwZXJSYW5nZSkpOyAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2xhbXBYKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCBtaW4pIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gbWluO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gbWF4O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xhbXBZKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnkgPD0gbWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IG1pbjtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy55ID49IG1heCkge1xyXG4gICAgICAgICAgICB0aGlzLnkgPSBtYXg7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvZmZzZXRYKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0WSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBsZXJwKHN0YXJ0VmFsdWU6IG51bWJlciwgZW5kVmFsdWU6IG51bWJlciwgYW1vdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGFtb3VudCA9IGFtb3VudCA8IDAgPyAwIDogYW1vdW50O1xyXG4gICAgICAgIGFtb3VudCA9IGFtb3VudCA+IDEgPyAxIDogYW1vdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhcnRWYWx1ZSArIChlbmRWYWx1ZSAtIHN0YXJ0VmFsdWUpICogYW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBlbXB0eSB0cmFuc2Zvcm0gb2JqZWN0LiBNZWFuaW5nIHRoZSB4LCB5LCB3aWR0aCwgYW5kIGhlaWdodFxyXG4gICAgICogdmFsdWVzIGFyZSBhbGwgemVyby5cclxuICAgICAqIFxyXG4gICAgICogQGF1dGhvciBOU1N1cmVcclxuICAgICAqIEBzaW5jZSAxMS8xMi8yMDIwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXQgZW1wdHkoKTogVHJhbnNmb3JtIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybSgwLCAwLCAwLCAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRpdHlNYW5hZ2VyIGZyb20gJy4vZW50aXR5LW1hbmFnZXInO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgVGlsZXNldCBmcm9tICcuL2dyYXBoaWNzL3RpbGVzZXQnO1xyXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi9tb2RlbHMvc2NlbmUnO1xyXG5pbXBvcnQgTG9hZFNjZW5lUmV0dXJuIGZyb20gJy4vbW9kZWxzL3JldHVybnMvbG9hZC1zY2VuZS1yZXR1cm4nO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dpbmcvbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcblx0cHVibGljIHN0YXRpYyBhc3luYyBsb2FkKHNjZW5lTmFtZTogc3RyaW5nLCBiYXNlVXJsOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxMb2FkU2NlbmVSZXR1cm4+IHtcclxuXHRcdExvZ2dlci5pbmZvKCdTdGFydGVkIGxvYWRpbmcgc2NlbmUuJywgU2NlbmVNYW5hZ2VyLm5hbWUpO1xyXG5cclxuXHRcdGxldCBzY2VuZVBhdGg6IHN0cmluZyA9IGBzY2VuZXNcXFxcJHtzY2VuZU5hbWV9Lmpzb25gO1xyXG5cclxuXHRcdGlmIChiYXNlVXJsKSB7XHJcblx0XHRcdHNjZW5lUGF0aCA9IGAke2Jhc2VVcmx9XFxcXCR7c2NlbmVQYXRofWA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2NlbmVQYXRoKTtcclxuXHRcdGxldCBzY2VuZTogU2NlbmUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0TG9nZ2VyLmluZm8oJ1NjZW5lIGxvYWRlZCBhbmQgcGFyc2VkIHN1Y2Nlc3NmdWxseScsIFNjZW5lTWFuYWdlci5uYW1lKTtcclxuXHJcblx0XHQvLyBQYXJzZWQgZW50aXRpZXMgdG8gdHlwZXNjcmlwdCBvYmplY3RzLlxyXG5cdFx0RW50aXR5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnBhcnNlRW50aXRpZXMoc2NlbmUpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGlsZXNldHM6IEFycmF5PFRpbGVzZXQ+ID0gbmV3IEFycmF5KCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgdGlsZXNldE5hbWUgb2Ygc2NlbmUudGlsZXNldHMpIHtcclxuXHRcdFx0bGV0IHRpbGVzZXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0bGV0IHRpbGVzZXRQYXRoOiBzdHJpbmcgPSBgdGlsZXNldHMvJHt0aWxlc2V0TmFtZX1gO1xyXG5cclxuXHRcdFx0aWYgKENvbmZpZ3VyYXRpb24uYmFzZVVybCkge1xyXG5cdFx0XHRcdHRpbGVzZXRQYXRoID0gYGZpbGU6Ly8ke0NvbmZpZ3VyYXRpb24uYmFzZVVybC5yZXBsYWNlKC9cXFxcL2csIFwiL1wiKX0vJHt0aWxlc2V0UGF0aH1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cdFx0XHR0aWxlc2V0SW1hZ2Uuc3JjID0gdGlsZXNldFBhdGg7XHJcblxyXG5cdFx0XHRhd2FpdCB0aWxlc2V0SW1hZ2UuZGVjb2RlKCk7XHJcblxyXG5cdFx0XHR0aWxlc2V0cy5wdXNoKG5ldyBUaWxlc2V0KHRpbGVzZXRJbWFnZSkpO1xyXG5cclxuXHRcdFx0TG9nZ2VyLmluZm8oYFNjZW5lIHRpbGVzZXQgJHt0aWxlc2V0TmFtZX0gbG9hZGVkYCwgU2NlbmVNYW5hZ2VyLm5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdExvZ2dlci5pbmZvKCdGaW5pc2hlZCBsb2FkaW5nIHNjZW5lJywgU2NlbmVNYW5hZ2VyLm5hbWUpO1xyXG5cclxuXHRcdHJldHVybiBuZXcgTG9hZFNjZW5lUmV0dXJuKHNjZW5lLCB0aWxlc2V0cyk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBTeXN0ZW0gZnJvbSAnLi9zeXN0ZW1zL3N5c3RlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXN0ZW1NYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3lzdGVtczogYW55W10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyKHN5c3RlbTogU3lzdGVtKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFN5c3RlbU1hbmFnZXIuc3lzdGVtcy5maW5kSW5kZXgoeCA9PiB4Lm5hbWUgPT09IHN5c3RlbS5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgU3lzdGVtTWFuYWdlci5zeXN0ZW1zLnB1c2goc3lzdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQoc3lzdGVtTmFtZTogc3RyaW5nKTogU3lzdGVtIHtcclxuICAgICAgICByZXR1cm4gU3lzdGVtTWFuYWdlci5zeXN0ZW1zLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHN5c3RlbU5hbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQ29sbGlzaW9uRGlyZWN0aW9uIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgVE9QID0gMSxcclxuICAgIFJJR0hUID0gMixcclxuICAgIEJPVFRPTSA9IDMsXHJcbiAgICBMRUZUID0gNFxyXG59IiwiaW1wb3J0IENvbGxpZGVyQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29sbGlkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgQ29sbGlkZXJDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWFuYWdlcnMvQ29sbGlkZXJDb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IFNjcmlwdENvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NjcmlwdENvbXBvbmVudCc7XHJcbmltcG9ydCBUcmFuc2Zvcm1Db21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc2Zvcm1Db21wb25lbnQnO1xyXG5pbXBvcnQgTWFuYWdlckZhY3RvcnkgZnJvbSAnLi4vLi4vbWFuYWdlci1mYWN0b3J5JztcclxuaW1wb3J0IEVudGl0eSBmcm9tICcuLi8uLi9tb2RlbHMvZW50aXR5JztcclxuaW1wb3J0IFRyYW5zZm9ybSBmcm9tICcuLi8uLi9wcmltaXRpdmVzL3RyYW5zZm9ybSc7XHJcbmltcG9ydCBTeXN0ZW0gZnJvbSAnLi4vc3lzdGVtJztcclxuaW1wb3J0IHsgQ29sbGlzaW9uRGlyZWN0aW9uIH0gZnJvbSAnLi9jb2xsaXNpb24tZGlyZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvblN5c3RlbSBleHRlbmRzIFN5c3RlbSB7XHJcblx0cHVibGljIG5hbWU6IHN0cmluZyA9ICdjb2xsaXNpb24nO1xyXG5cclxuXHRwdWJsaWMgY3VycmVudEVudGl0eUNvbGxpc2lvbnM6IE1hcDxhbnksIGFueVtdPiA9IG5ldyBNYXAoKTtcclxuXHJcblx0cHVibGljIGRpc3Bvc2UoZW50aXR5OiBFbnRpdHkpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmhhcyhlbnRpdHkuaWQpKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEVudGl0eUNvbGxpc2lvbnMuZGVsZXRlKGVudGl0eS5pZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5mb3JFYWNoKCh2YWx1ZXM6IGFueVtdLCBrZXk6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRsZXQgdmFsdWVJbmRleDogYW55ID0gdmFsdWVzLmluZGV4T2YoZW50aXR5LmlkKTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHZhbHVlcy5zcGxpY2UodmFsdWVJbmRleCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdGxldCBtYW5hZ2VyOiBDb2xsaWRlckNvbXBvbmVudE1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoQ29sbGlkZXJDb21wb25lbnQubmFtZSk7XHJcblx0XHRcclxuXHRcdC8vIFRPRE86IFJlcGxhY2UgdGhpcyB3aXRoIGEgbW9yZSByb2J1c3QgY29sbGlzaW9uIGRlY3Rpb24gaW1wbGVtZW50YXRpb24uIEZvciBub3cgdGhpcyBpcyBmaW5lIGZvciB0aGUgbnVtYmVyIG9mIHNwcml0ZXMgd2UgYXJlIHJlbmRlcmluZyB3aXRoIGNvbGxpZGVycy5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWFuYWdlci5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBpaSA9IGkgKyAxOyBpaSA8IG1hbmFnZXIuZW50aXRpZXMubGVuZ3RoOyBpaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5yZXNvbHZlQ29sbGlzaW9uKG1hbmFnZXIuZW50aXRpZXNbaV0sIG1hbmFnZXIuZW50aXRpZXNbaWldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZXNvbHZlQ29sbGlzaW9uKHNvdXJjZUVudGl0eTogRW50aXR5LCB0YXJnZXRFbnRpdHk6IEVudGl0eSk6IENvbGxpc2lvbkRpcmVjdGlvbiB7XHJcblx0XHRpZiAoIXNvdXJjZUVudGl0eSB8fCAhdGFyZ2V0RW50aXR5KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc291cmNlQ29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gc291cmNlRW50aXR5LmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCkgYXMgQ29sbGlkZXJDb21wb25lbnQ7XHJcblx0XHRsZXQgdGFyZ2V0Q29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gdGFyZ2V0RW50aXR5LmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCkgYXMgQ29sbGlkZXJDb21wb25lbnQ7XHJcblxyXG5cdFx0bGV0IHNvdXJjZVRyYW5zZm9ybUNvbXBvbmVudDogVHJhbnNmb3JtQ29tcG9uZW50ID0gKHNvdXJjZUVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG5cdFx0bGV0IHRhcmdldFRyYW5zZm9ybUNvbXBvbmVudDogVHJhbnNmb3JtQ29tcG9uZW50ID0gKHRhcmdldEVudGl0eS5nZXRDb21wb25lbnQoVHJhbnNmb3JtQ29tcG9uZW50KSBhcyBUcmFuc2Zvcm1Db21wb25lbnQpO1xyXG5cclxuXHRcdGlmICghc291cmNlVHJhbnNmb3JtQ29tcG9uZW50IHx8ICF0YXJnZXRUcmFuc2Zvcm1Db21wb25lbnQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1tFTlRJVFkgTk8gTE9OR0VSIEVYSVNUUyBBQk9SVElORyBDT0xMSVNJT04gQ0hFQ0tdJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgc291cmNlVHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBzb3VyY2VUcmFuc2Zvcm1Db21wb25lbnQudHJhbnNmb3JtO1xyXG5cdFx0bGV0IHRhcmdldFRyYW5zZm9ybTogVHJhbnNmb3JtID0gdGFyZ2V0VHJhbnNmb3JtQ29tcG9uZW50LnRyYW5zZm9ybTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIHZlY3RvcnMgdG8gY2hlY2sgYWdhaW5zdFxyXG5cdFx0bGV0IHZYID0gc291cmNlVHJhbnNmb3JtLnggKyBzb3VyY2VUcmFuc2Zvcm0ud2lkdGggLyAyIC0gKHRhcmdldFRyYW5zZm9ybS54ICsgdGFyZ2V0VHJhbnNmb3JtLndpZHRoIC8gMik7XHJcblx0XHRsZXQgdlkgPSBzb3VyY2VUcmFuc2Zvcm0ueSArIHNvdXJjZVRyYW5zZm9ybS5oZWlnaHQgLyAyIC0gKHRhcmdldFRyYW5zZm9ybS55ICsgdGFyZ2V0VHJhbnNmb3JtLmhlaWdodCAvIDIpO1xyXG5cclxuXHRcdC8vIEhhbGYgd2lkdGhzIGFuZCBoYWxmIGhlaWdodHMgb2YgdGhlIG9iamVjdHNcclxuXHRcdGxldCB3dzIgPSBzb3VyY2VUcmFuc2Zvcm0ud2lkdGggLyAyICsgdGFyZ2V0VHJhbnNmb3JtLndpZHRoIC8gMjtcclxuXHRcdGxldCBoaDIgPSBzb3VyY2VUcmFuc2Zvcm0uaGVpZ2h0IC8gMiArIHRhcmdldFRyYW5zZm9ybS5oZWlnaHQgLyAyO1xyXG5cclxuXHRcdGxldCBjb2xEaXIgPSBDb2xsaXNpb25EaXJlY3Rpb24uTk9ORTtcclxuXHJcblx0XHQvLyBJZiB0aGUgeCBhbmQgeSB2ZWN0b3IgYXJlIGxlc3MgdGhhbiB0aGUgaGFsZiB3aWR0aCBvciBoYWxmIGhlaWdodCwgdGhleSB3ZSBtdXN0IGJlIGluc2lkZSB0aGUgb2JqZWN0LCBjYXVzaW5nIGEgY29sbGlzaW9uLlxyXG5cdFx0aWYgKE1hdGguYWJzKHZYKSA8IHd3MiAmJiBNYXRoLmFicyh2WSkgPCBoaDIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmhhcyhzb3VyY2VFbnRpdHkuaWQpIHx8IHRoaXMuY3VycmVudEVudGl0eUNvbGxpc2lvbnMuZ2V0KHNvdXJjZUVudGl0eS5pZCkuaW5kZXhPZih0YXJnZXRFbnRpdHkuaWQpID09PSAtMSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5oYXMoc291cmNlRW50aXR5LmlkKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5zZXQoc291cmNlRW50aXR5LmlkLCBbdGFyZ2V0RW50aXR5LmlkXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5nZXQoc291cmNlRW50aXR5LmlkKS5wdXNoKHRhcmdldEVudGl0eS5pZCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBPbmx5IHJlc29sdmUgdGhlIGNvbGxpc2lvbiBpZiBib3RoIHRoZSBzb3VyY2UgYW5kIHRhcmdldCBjb2xsaWRlcnMgYXJlIG5vdCB0cmlnZ2Vycy5cclxuXHRcdFx0XHRpZiAoIXNvdXJjZUNvbGxpZGVyLmlzVHJpZ2dlciAmJiAhdGFyZ2V0Q29sbGlkZXIuaXNUcmlnZ2VyKSB7XHJcblx0XHRcdFx0XHQvLyBmaWd1cmVzIG91dCBvbiB3aGljaCBzaWRlIHdlIGFyZSBjb2xsaWRpbmcgKHRvcCwgYm90dG9tLCBsZWZ0LCBvciByaWdodClcclxuXHRcdFx0XHRcdGxldCBvWCA9IHd3MiAtIE1hdGguYWJzKHZYKTtcclxuXHRcdFx0XHRcdGxldCBvWSA9IGhoMiAtIE1hdGguYWJzKHZZKTtcclxuXHJcblx0XHRcdFx0XHQvLyBUT0RPOiBFbnN1cmUgd2UgZ2V0IHRoZSBjb2xsaXNpb24gZGlyZWN0aW9uIGV2ZW4gZm9yIHRyaWdnZXJzLlxyXG5cdFx0XHRcdFx0aWYgKG9YID49IG9ZKSB7XHJcblx0XHRcdFx0XHRcdGlmICh2WSA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xEaXIgPSBDb2xsaXNpb25EaXJlY3Rpb24uVE9QO1xyXG5cdFx0XHRcdFx0XHRcdHNvdXJjZVRyYW5zZm9ybS55ICs9IG9ZO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGNvbERpciA9IENvbGxpc2lvbkRpcmVjdGlvbi5CT1RUT007XHJcblx0XHRcdFx0XHRcdFx0c291cmNlVHJhbnNmb3JtLnkgLT0gb1k7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh2WCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xEaXIgPSBDb2xsaXNpb25EaXJlY3Rpb24uTEVGVDtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VUcmFuc2Zvcm0ueCArPSBvWDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xEaXIgPSBDb2xsaXNpb25EaXJlY3Rpb24uUklHSFQ7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlVHJhbnNmb3JtLnggLT0gb1g7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1RSSUdHRVIgRU5URVInKTtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhzb3VyY2VFbnRpdHkpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGFyZ2V0RW50aXR5KTtcclxuXHJcblx0XHRcdFx0XHRzb3VyY2VFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHNjcmlwdEluc3RhbmNlLmluc3RhbmNlICYmIHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlckVudGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIodGFyZ2V0RW50aXR5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhcmdldEVudGl0eS5nZXRTY3JpcHRJbnN0YW5jZXMoKS5mb3JFYWNoKChzY3JpcHRJbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2UgJiYgc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlcihzb3VyY2VFbnRpdHkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1RSSUdHRVIgU1RBWScpO1xyXG5cclxuXHRcdFx0XHRzb3VyY2VFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZSAmJiBzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlcikge1xyXG5cdFx0XHRcdFx0XHRzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJTdGF5KHRhcmdldEVudGl0eSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFyZ2V0RW50aXR5LmdldFNjcmlwdEluc3RhbmNlcygpLmZvckVhY2goKHNjcmlwdEluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2UgJiYgc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyU3RheShzb3VyY2VFbnRpdHkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5oYXMoc291cmNlRW50aXR5LmlkKSAmJiB0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmdldChzb3VyY2VFbnRpdHkuaWQpLmluZGV4T2YodGFyZ2V0RW50aXR5LmlkKSAhPT0gLTEpIHtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmRlbGV0ZShzb3VyY2VFbnRpdHkuaWQpO1xyXG5cclxuXHRcdFx0XHQoPGFueT5NYW5hZ2VyRmFjdG9yeS5nZXQoU2NyaXB0Q29tcG9uZW50Lm5hbWUpKS5pbnN0YW5jZXM7XHJcblxyXG5cdFx0XHRcdHNvdXJjZUVudGl0eS5nZXRTY3JpcHRJbnN0YW5jZXMoKS5mb3JFYWNoKChzY3JpcHRJbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHNjcmlwdEluc3RhbmNlLmluc3RhbmNlICYmIHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlckVudGVyKSB7XHJcblx0XHRcdFx0XHRcdHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlckxlYXZlKHRhcmdldEVudGl0eSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFyZ2V0RW50aXR5LmdldFNjcmlwdEluc3RhbmNlcygpLmZvckVhY2goKHNjcmlwdEluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2UgJiYgc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyTGVhdmUoc291cmNlRW50aXR5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb2xEaXI7IC8vIElmIHlvdSBuZWVkIGluZm8gb2YgdGhlIHNpZGUgdGhhdCBjb2xsaWRlZFxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgU2NyaXB0Q29tcG9uZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tYW5hZ2Vycy9TY3JpcHRDb21wb25lbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCBTY3JpcHRDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2NyaXB0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBNYW5hZ2VyRmFjdG9yeSBmcm9tIFwiLi4vLi4vbWFuYWdlci1mYWN0b3J5XCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4uLy4uL21vZGVscy9lbnRpdHlcIjtcclxuaW1wb3J0IFN5c3RlbSBmcm9tIFwiLi4vc3lzdGVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW0ge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdzY3JpcHQnO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNjcmlwdENvbXBvbmVudE1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoU2NyaXB0Q29tcG9uZW50Lm5hbWUpIGFzIFNjcmlwdENvbXBvbmVudE1hbmFnZXI7XHJcblxyXG4gICAgICAgIHNjcmlwdENvbXBvbmVudE1hbmFnZXIuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY3JpcHRDb21wb25lbnQgPSBzY3JpcHRDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKGVudGl0eSkgYXMgU2NyaXB0Q29tcG9uZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzY3JpcHRDb21wb25lbnQuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHNjcmlwdENvbXBvbmVudC5pbnN0YW5jZSA9IG5ldyBzY3JpcHRDb21wb25lbnQuc2NyaXRhYmxlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRDb21wb25lbnQuaW5zdGFuY2Uub25DcmVhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2NyaXB0Q29tcG9uZW50Lmluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoZW50aXR5OiBFbnRpdHkpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL21vZGVscy9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFN5c3RlbSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRlc3RcclxuICAgICAqIEBwYXJhbSBlbnRpdHkgdGVzdFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBkaXNwb3NlKGVudGl0eTogRW50aXR5KTogdm9pZDtcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWUge1xyXG4gICAgcHVibGljIHN0YXRpYyBsYXN0VGltZXN0YW1wOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsdGFUaW1lOiBhbnk7XHJcbiAgICBwdWJsaWMgc3RhdGljIGZwczogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlRGVsdGFUaW1lKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKCFUaW1lLmxhc3RUaW1lc3RhbXApIHtcclxuICAgICAgICAgICAgVGltZS5sYXN0VGltZXN0YW1wID0gdGltZTtcclxuICAgICAgICAgICAgVGltZS5mcHMgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIFRpbWUuZGVsdGFUaW1lID0gKHRpbWUgLSBUaW1lLmxhc3RUaW1lc3RhbXApLzEwMDA7XHJcbiAgICAgICAgIFRpbWUubGFzdFRpbWVzdGFtcCA9IHRpbWU7XHJcbiAgICAgICAgIFRpbWUuZnBzID0gMS8gVGltZS5kZWx0YVRpbWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9