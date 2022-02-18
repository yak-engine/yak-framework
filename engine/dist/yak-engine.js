(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("yak-engine", [], factory);
	else if(typeof exports === 'object')
		exports["yak-engine"] = factory();
	else
		root["yak-engine"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformComponent = exports.TilemapComponent = exports.TagComponent = exports.SpriteRendererComponent = exports.ScriptComponent = exports.MaterialComponent = exports.ImageComponent = exports.ColliderComponent = exports.CameraComponent = void 0;
const point_1 = __webpack_require__(1);
class CameraComponent {
    constructor(camera) {
        this.camera = camera;
    }
}
exports.CameraComponent = CameraComponent;
class ColliderComponent {
    /**
     *
     * @param transform
     * @param isTrigger
     */
    constructor(transform, isTrigger) {
        this.transform = transform;
        this.isTrigger = isTrigger;
        this._points = new Array();
        // Top left.
        this._points.push(new point_1.Point(transform.x, transform.y));
        // Top right.
        this._points.push(new point_1.Point(transform.x + transform.width, transform.y));
        // Bottom left.
        this._points.push(new point_1.Point(transform.x, transform.y + transform.height));
        // Bottom right.
        this._points.push(new point_1.Point(transform.x + transform.width, transform.y + transform.height));
    }
}
exports.ColliderComponent = ColliderComponent;
class ImageComponent {
}
exports.ImageComponent = ImageComponent;
class MaterialComponent {
    constructor() {
        /**
         * The alpha (opacity) of the entity.
         *
         * @remarks
         * The alpha can be set between 0 and 1.
         *
         * @example
         * alpha = 1;
         */
        this.alpha = 1;
    }
}
exports.MaterialComponent = MaterialComponent;
class ScriptComponent {
    constructor(scritableEntity) {
        this.scritableEntity = scritableEntity;
    }
}
exports.ScriptComponent = ScriptComponent;
class SpriteRendererComponent {
}
exports.SpriteRendererComponent = SpriteRendererComponent;
class TagComponent {
    constructor(name) {
        this.name = name;
    }
}
exports.TagComponent = TagComponent;
class TilemapComponent {
    constructor() {
        this.layer = 0;
        this.tilesetIndex = 0;
        this.tiles = [];
    }
}
exports.TilemapComponent = TilemapComponent;
class TransformComponent {
    constructor(transform) {
        this.transform = transform;
    }
}
exports.TransformComponent = TransformComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Point = Point;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerFactory = void 0;
// Bulk scene/manager imports.
const components_1 = __webpack_require__(0);
const components_2 = __webpack_require__(0);
const components_3 = __webpack_require__(0);
const components_4 = __webpack_require__(0);
const components_5 = __webpack_require__(0);
const components_6 = __webpack_require__(0);
const components_7 = __webpack_require__(0);
const components_8 = __webpack_require__(0);
const components_9 = __webpack_require__(0);
const component_manager_1 = __webpack_require__(13);
class ManagerFactory {
    constructor() {
    }
    static bootstrap() {
        ManagerFactory.register(components_1.TagComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_2.TransformComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_6.CameraComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_4.MaterialComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_3.SpriteRendererComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_5.ColliderComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_7.ImageComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_8.ScriptComponent.name, new component_manager_1.ComponentManager());
        ManagerFactory.register(components_9.TilemapComponent.name, new component_manager_1.ComponentManager());
    }
    // TODO: Add type contraints.
    static register(componentName, componentManagerInstance) {
        if (!ManagerFactory.managers.has(componentName)) {
            ManagerFactory.managers.set(componentName, componentManagerInstance);
        }
    }
    static get(componentName) {
        console.log(componentName);
        if (ManagerFactory.managers.has(componentName)) {
            return ManagerFactory.managers.get(componentName);
        }
        throw `Manager has not been registered: ${componentName}`;
    }
    static log() {
        ManagerFactory.managers.forEach((manager) => console.log(manager));
    }
}
exports.ManagerFactory = ManagerFactory;
ManagerFactory.managers = new Map();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogThreshold = void 0;
var LogThreshold;
(function (LogThreshold) {
    LogThreshold[LogThreshold["NONE"] = 0] = "NONE";
    LogThreshold[LogThreshold["DATA"] = 1] = "DATA";
    LogThreshold[LogThreshold["DEBUG"] = 2] = "DEBUG";
    LogThreshold[LogThreshold["INFO"] = 3] = "INFO";
    LogThreshold[LogThreshold["ERROR"] = 4] = "ERROR";
    LogThreshold[LogThreshold["CRITICAL"] = 5] = "CRITICAL";
})(LogThreshold = exports.LogThreshold || (exports.LogThreshold = {}));
class Logger {
    static debug(msg) {
        if (!this.thresholds.includes(LogThreshold.DEBUG)) {
            return;
        }
        console.log(`[YAK DEBUG]: ${msg}`);
    }
    static info(msg, source) {
        if (!this.thresholds.includes(LogThreshold.INFO)) {
            return;
        }
        console.info(`%c [YAK INFO - ${source}]: ${msg}`, 'background: #222; color: #bada55');
    }
    static error(msg) {
        if (!this.thresholds.includes(LogThreshold.ERROR)) {
            return;
        }
        console.error(`[YAK ERROR]: ${msg}`);
    }
    static critical(msg) {
        if (!this.thresholds.includes(LogThreshold.CRITICAL)) {
            return;
        }
        console.error(`[YAK CRITICAL]: ${msg}`);
    }
    static data(msg, data) {
        if (!this.thresholds.includes(LogThreshold.DATA)) {
            return;
        }
        console.log(`%c [YAK DATA]: ${msg}`, 'background: #222; color: #bada55', data);
    }
}
exports.Logger = Logger;
Logger.thresholds = [LogThreshold.DATA, LogThreshold.DEBUG, LogThreshold.INFO, LogThreshold.ERROR, LogThreshold.CRITICAL];


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
class Transform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getScreenX(camera) {
        return this.x - camera.viewport.x;
    }
    // clampX(min: number, maxLowerRange: number, maxUpperRange: number): void {
    //     this.x = Math.max(min, Math.min(maxLowerRange, maxUpperRange));  
    // }
    clampX(min, max) {
        if (this.x < min) {
            this.x = min;
            return true;
        }
        if (this.x > max) {
            this.x = max;
            return true;
        }
        return false;
    }
    clampY(min, max) {
        if (this.y <= min) {
            this.y = min;
            return true;
        }
        if (this.y >= max) {
            this.y = max;
            return true;
        }
        return false;
    }
    offsetX() {
        return this.x + this.width;
    }
    offsetY() {
        return this.y + this.height;
    }
    lerp(startValue, endValue, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return startValue + (endValue - startValue) * amount;
    }
    /**
     * Returns a new empty transform object. Meaning the x, y, width, and height
     * values are all zero.
     *
     * @author NSSure
     * @since 11/12/2020
     */
    static get empty() {
        return new Transform(0, 0, 0, 0);
    }
}
exports.Transform = Transform;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Time = void 0;
class Time {
    static calculateDeltaTime(time) {
        if (!Time.lastTimestamp) {
            Time.lastTimestamp = time;
            Time.fps = 0;
            return;
        }
        Time.deltaTime = (time - Time.lastTimestamp) / 1000;
        Time.lastTimestamp = time;
        Time.fps = 1 / Time.deltaTime;
    }
}
exports.Time = Time;
Time.lastTimestamp = performance.now();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
class Camera {
    constructor() {
        this.orthographicSize = 5;
    }
    isClampedX() {
        if (this.viewport.x >= this.max.x / 2 || this.viewport.x === 0) {
            return true;
        }
        return false;
    }
    isClampedY() {
        if (this.viewport.y >= this.max.y / 2 || this.viewport.y === 0) {
            return true;
        }
        return false;
    }
    update() {
    }
}
exports.Camera = Camera;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const manager_factory_1 = __webpack_require__(2);
/**
 * Base object class used for sprites, colliders, primitives, etc. Contains
 * shared code common across most classes.
 *
 * @author NSSure
 * @since 11/8/2020
 */
class Entity {
    constructor() {
        /**
         * Generates a unique 12 character ID for each entity.
         */
        // id: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 12);
        this.id = ''; // Refactored to number for ECS.
        /**
         * Determines if the entity should be rendered.
         */
        this.enabled = true;
        // public removeComponent(componentName: string): void {
        //     let manager = ManagerFactory.get(componentName);
        //     if (manager.entityDataMap.has(this.id)) {
        //         let componentInstanceId: number = manager.entityDataMap.get(this.id);
        //         manager.data.splice(manager.data.findIndex(x => x.id === componentInstanceId), 1);
        //         manager.entityDataMap.delete(this.id);
        //         manager.dataEntityMap.delete(componentInstanceId);
        //     }
        //     console.log(manager);
        // }
    }
    addComponent(componentInstance) {
        let manager = manager_factory_1.ManagerFactory.get(componentInstance.constructor.name);
        manager.addComponentInstance(this, componentInstance);
    }
    getComponent(componentType) {
        // if (componentType.name === ScriptComponent.name) {
        //     console.log(componentType.name);
        //     throw "Getting script components is not currently supported.";
        // }
        let manager = manager_factory_1.ManagerFactory.get(componentType.name);
        return manager.instances[manager.map[this.id]];
    }
    getScriptInstances() {
        // let scriptManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;
        // if (scriptManager.map.has(this.id)) {
        //     console.log(scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)));
        //     // TODO: This will not work for script components.
        //     return scriptManager.instances.filter(x => scriptManager.map.get(this.id).includes(x.id)) as ScriptComponent[];
        // }
        return [];
    }
}
exports.Entity = Entity;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
/**
 * Contains configuration options for the application instance.
 *
 * @author NSSure
 * @since 11/8/2020
 */
class Configuration {
}
exports.Configuration = Configuration;
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
class System {
}
exports.System = System;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRenderer = void 0;
class BaseRenderer {
}
exports.BaseRenderer = BaseRenderer;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
const entity_manager_1 = __webpack_require__(12);
const tileset_1 = __webpack_require__(14);
const load_scene_return_1 = __webpack_require__(15);
const logger_1 = __webpack_require__(3);
class SceneManager {
    static load(sceneName, baseUrl = '') {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.info('Started loading scene.', SceneManager.name);
            let scenePath = `${sceneName}.json`;
            if (baseUrl) {
                scenePath = `${baseUrl}\\${scenePath}`;
            }
            let response = yield fetch(scenePath);
            let scene = yield response.json();
            logger_1.Logger.info('Scene loaded and parsed successfully', SceneManager.name);
            // Parsed entities to typescript objects.
            entity_manager_1.EntityManager.getInstance().unpackEntityManifests(scene);
            let tilesets = new Array();
            for (let tilesetName of scene.tilesets) {
                let tilesetImage = new Image();
                let tilesetPath = `${baseUrl}/tilesets/${tilesetName}`;
                // if (Configuration.baseUrl) {
                // 	tilesetPath = `file://${Configuration.baseUrl.replace(/\\/g, "/")}/${tilesetPath}`;
                // }
                tilesetImage.src = tilesetPath;
                yield tilesetImage.decode();
                tilesets.push(new tileset_1.Tileset(tilesetImage));
                logger_1.Logger.info(`Scene tileset ${tilesetName} loaded`, SceneManager.name);
            }
            logger_1.Logger.info('Finished loading scene', SceneManager.name);
            return new load_scene_return_1.LoadSceneReturn(scene, tilesets);
        });
    }
}
exports.SceneManager = SceneManager;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManager = void 0;
const manager_factory_1 = __webpack_require__(2);
const camera_1 = __webpack_require__(6);
const entity_1 = __webpack_require__(7);
const point_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(4);
const logger_1 = __webpack_require__(3);
// Bulk components/manager imports.
const components_1 = __webpack_require__(0);
const components_2 = __webpack_require__(0);
const components_3 = __webpack_require__(0);
const components_4 = __webpack_require__(0);
class EntityManager {
    constructor() {
        this.entities = [];
    }
    static getInstance() {
        if (!EntityManager.instance) {
            EntityManager.instance = new EntityManager();
        }
        return EntityManager.instance;
    }
    /**
     * Creates a new entity and stores it within the entity manager.
     * @returns The newly created entity populated with the required components.
     */
    create() {
        let entity = new entity_1.Entity();
        this.entities.push(entity);
        var id = '';
        for (var i = 0; i < 8; i++) {
            var characterIndex = Math.floor(Math.random() * EntityManager.characters.length);
            id += EntityManager.characters.substring(characterIndex, characterIndex + 1);
        }
        entity.id = id;
        // Add the required components to the entity.
        entity.addComponent(new components_1.TagComponent(`entity${entity.id}`));
        entity.addComponent(new components_2.TransformComponent(transform_1.Transform.empty));
        return entity;
    }
    /**
     * Disposes of the given entity along with any references within any component manager or systems.
     *
     * @param entity The entity to dispose of.
     */
    dispose(entity) {
        let index = this.entities.findIndex(x => x.id === entity.id);
        if (index !== -1) {
            // Remove all references stored in each of the component manager instances.
            // ManagerFactory.managers.forEach((manager: ComponentM) => manager.dispose(entity));
            // SystemManager.systems.forEach((system: System) => system.dispose(entity));
            this.entities.splice(index, 1);
        }
    }
    /**
     * Loads the entities.
     * @param sceneConfig
     */
    unpackEntityManifests(sceneConfig) {
        let parsedEntities = [];
        // Bootstrap entities.
        sceneConfig.entityManifests.forEach((entityManifest) => {
            let entity = new entity_1.Entity();
            entity.id = entityManifest.id;
            entity.enabled = entityManifest.enabled;
            for (let sourceProperty in entityManifest) {
                let sourceComponent = entityManifest[sourceProperty];
                if (sourceComponent) {
                    if (sourceProperty === 'spriteRendererComponent') {
                        entity.addComponent({
                            layer: sourceComponent.layer,
                            tileset: sourceComponent.tileset,
                            row: sourceComponent.row,
                            column: sourceComponent.column
                        });
                    }
                    else if (sourceProperty === 'transformComponent') {
                        entity.addComponent(new components_2.TransformComponent(new transform_1.Transform(sourceComponent.x, sourceComponent.y, sourceComponent.width, sourceComponent.height)));
                    }
                    else if (sourceProperty === 'cameraComponent') {
                        let camera = new camera_1.Camera();
                        camera.viewport = new transform_1.Transform(sourceComponent.camera.viewport.x, sourceComponent.camera.viewport.y, sourceComponent.camera.viewport.width, sourceComponent.camera.viewport.height);
                        camera.max = new point_1.Point(sourceComponent.camera.max.x, sourceComponent.camera.max.y);
                        entity.addComponent(new components_4.CameraComponent(camera));
                    }
                    else if (sourceProperty === 'tagComponent') {
                        entity.addComponent(new components_1.TagComponent(sourceComponent.name));
                    }
                    else if (sourceProperty === 'colliderComponent') {
                        entity.addComponent(new components_3.ColliderComponent(sourceComponent.transform, sourceComponent.isTrigger));
                    }
                }
            }
            logger_1.Logger.info(`Scene entity ${entityManifest.id} parsed`, EntityManager.name);
            parsedEntities.push(entity);
        });
        EntityManager.getInstance().entities = parsedEntities;
        // console.log(EntityManager.getInstance().entities[0].getComponent<TagComponent>(TagComponent));
        logger_1.Logger.info(`Finished parsing ${parsedEntities.length} entities`, EntityManager.name);
    }
    /**
     * TODO: Move to the editor.
     *
     * Packs the entities within each component manager into a single array for saving to the scene json file.
     * @returns The list of packed entities.
     */
    packEntities() {
        // let entityConfigs: Entity[] = [];
        // EntityManager.getInstance().entities.forEach((entity) => {
        //     let entityConfig: any = {};
        //     Constants.componentTypes.forEach((componentType) => {
        //         let componentInstance: Component = entity.getComponent(componentType);
        //         if (componentInstance) {
        //             entityConfig[componentType.name.charAt(0).toLowerCase() + componentType.name.slice(1)] = componentInstance;
        //         }
        //     });
        //     if (Object.keys(entityConfig).length !== 0 && entityConfig.constructor === Object) {
        //         entityConfigs.push(entityConfig);
        //     }
        // });
        // return entityConfigs;
        return [];
    }
    getComponents(entity) {
        let components = [];
        manager_factory_1.ManagerFactory.managers.forEach((manager) => {
            if (manager.map[entity.id]) {
                components.push(manager.instances[manager.map[entity.id]]);
            }
        });
        return components;
    }
}
exports.EntityManager = EntityManager;
EntityManager.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentManager = void 0;
const components_1 = __webpack_require__(0);
class ComponentManager {
    constructor() {
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
    addComponentInstance(entity, componentInstance) {
        if (this.map[entity.id]) {
            // Entities are allowed to have multiple script component instances so the duplicate component check does not apply to instances of the script type.
            if (typeof componentInstance !== typeof components_1.ScriptComponent) {
                console.error(componentInstance);
                throw `[${componentInstance.constructor.name}]: You can't not have multiple component of the same type on entity unless that component is a script.`;
            }
        }
        else {
            this.entities.push(entity);
        }
        // Store the component instance within the current manager.
        this.instances.push(componentInstance);
        this.map[entity.id] = this.instances.length - 1;
    }
    getInstance(entity) {
        let index = this.map[entity.id];
        if (index || index === 0) {
            return this.instances[index];
        }
        return null;
    }
    /**
     * Dispose of the entity reference and any related data. Called when an entity is destroyed.
     * @param entity The entity to dispose of the references for.
     */
    dispose(entity) {
        if (this.constructor.name === 'ScriptComponentManager') {
            console.log(this);
        }
        if (this.map[entity.id]) {
            this.instances.splice(this.map[entity.id]);
            delete this.map[entity.id];
            let entityIndex = this.entities.findIndex(x => x.id === entity.id);
            if (entityIndex !== -1) {
                this.entities.splice(entityIndex, 1);
            }
            console.log(this);
        }
    }
}
exports.ComponentManager = ComponentManager;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tileset = void 0;
class Tileset {
    constructor(image) {
        this.image = image;
    }
}
exports.Tileset = Tileset;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadSceneReturn = void 0;
class LoadSceneReturn {
    constructor(scene, tilesets) {
        this.tilesets = new Array();
        this.scene = scene;
        this.tilesets = tilesets;
    }
}
exports.LoadSceneReturn = LoadSceneReturn;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemManager = void 0;
class SystemManager {
    static register(system) {
        if (SystemManager.systems.findIndex(x => x.name === system.name) === -1) {
            SystemManager.systems.push(system);
        }
    }
    static get(systemName) {
        return SystemManager.systems.find(x => x.name === systemName);
    }
}
exports.SystemManager = SystemManager;
SystemManager.systems = [];


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionSystem = void 0;
const components_1 = __webpack_require__(0);
const components_2 = __webpack_require__(0);
const components_3 = __webpack_require__(0);
const manager_factory_1 = __webpack_require__(2);
const collision_direction_1 = __webpack_require__(18);
const system_1 = __webpack_require__(9);
class CollisionSystem extends system_1.System {
    constructor() {
        super(...arguments);
        this.name = 'collision';
        this.currentEntityCollisions = new Map();
    }
    dispose(entity) {
        if (this.currentEntityCollisions.has(entity.id)) {
            this.currentEntityCollisions.delete(entity.id);
        }
        this.currentEntityCollisions.forEach((values, key) => {
            let valueIndex = values.indexOf(entity.id);
            if (valueIndex !== -1) {
                values.splice(valueIndex, 1);
            }
        });
    }
    update() {
        let manager = manager_factory_1.ManagerFactory.get(components_1.ColliderComponent.name);
        // TODO: Replace this with a more robust collision dection implementation. For now this is fine for the number of sprites we are rendering with colliders.
        for (let i = 0; i < manager.entities.length; i++) {
            for (let ii = i + 1; ii < manager.entities.length; ii++) {
                this.resolveCollision(manager.entities[i], manager.entities[ii]);
            }
        }
    }
    resolveCollision(sourceEntity, targetEntity) {
        if (!sourceEntity || !targetEntity) {
            return;
        }
        let sourceCollider = sourceEntity.getComponent(components_1.ColliderComponent);
        let targetCollider = targetEntity.getComponent(components_1.ColliderComponent);
        let sourceTransformComponent = sourceEntity.getComponent(components_3.TransformComponent);
        let targetTransformComponent = targetEntity.getComponent(components_3.TransformComponent);
        if (!sourceTransformComponent || !targetTransformComponent) {
            console.log('[ENTITY NO LONGER EXISTS ABORTING COLLISION CHECK]');
            return;
        }
        let sourceTransform = sourceTransformComponent.transform;
        let targetTransform = targetTransformComponent.transform;
        // get the vectors to check against
        let vX = sourceTransform.x + sourceTransform.width / 2 - (targetTransform.x + targetTransform.width / 2);
        let vY = sourceTransform.y + sourceTransform.height / 2 - (targetTransform.y + targetTransform.height / 2);
        // Half widths and half heights of the objects
        let ww2 = sourceTransform.width / 2 + targetTransform.width / 2;
        let hh2 = sourceTransform.height / 2 + targetTransform.height / 2;
        let colDir = collision_direction_1.CollisionDirection.NONE;
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
                    let oX = ww2 - Math.abs(vX);
                    let oY = hh2 - Math.abs(vY);
                    // TODO: Ensure we get the collision direction even for triggers.
                    if (oX >= oY) {
                        if (vY > 0) {
                            colDir = collision_direction_1.CollisionDirection.TOP;
                            sourceTransform.y += oY;
                        }
                        else {
                            colDir = collision_direction_1.CollisionDirection.BOTTOM;
                            sourceTransform.y -= oY;
                        }
                    }
                    else {
                        if (vX > 0) {
                            colDir = collision_direction_1.CollisionDirection.LEFT;
                            sourceTransform.x += oX;
                        }
                        else {
                            colDir = collision_direction_1.CollisionDirection.RIGHT;
                            sourceTransform.x -= oX;
                        }
                    }
                }
                else {
                    console.log('TRIGGER ENTER');
                    console.log(sourceEntity);
                    console.log(targetEntity);
                    sourceEntity.getScriptInstances().forEach((scriptInstance) => {
                        if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                            scriptInstance.instance.onTriggerEnter(targetEntity);
                        }
                    });
                    targetEntity.getScriptInstances().forEach((scriptInstance) => {
                        if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                            scriptInstance.instance.onTriggerEnter(sourceEntity);
                        }
                    });
                }
            }
            else {
                console.log('TRIGGER STAY');
                sourceEntity.getScriptInstances().forEach((scriptInstance) => {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerStay(targetEntity);
                    }
                });
                targetEntity.getScriptInstances().forEach((scriptInstance) => {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerStay(sourceEntity);
                    }
                });
            }
        }
        else {
            if (this.currentEntityCollisions.has(sourceEntity.id) && this.currentEntityCollisions.get(sourceEntity.id).indexOf(targetEntity.id) !== -1) {
                this.currentEntityCollisions.delete(sourceEntity.id);
                manager_factory_1.ManagerFactory.get(components_2.ScriptComponent.name).instances;
                sourceEntity.getScriptInstances().forEach((scriptInstance) => {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerLeave(targetEntity);
                    }
                });
                targetEntity.getScriptInstances().forEach((scriptInstance) => {
                    if (scriptInstance.instance && scriptInstance.instance.onTriggerEnter) {
                        scriptInstance.instance.onTriggerLeave(sourceEntity);
                    }
                });
            }
        }
        return colDir; // If you need info of the side that collided
    }
}
exports.CollisionSystem = CollisionSystem;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollisionDirection = void 0;
var CollisionDirection;
(function (CollisionDirection) {
    CollisionDirection[CollisionDirection["NONE"] = 0] = "NONE";
    CollisionDirection[CollisionDirection["TOP"] = 1] = "TOP";
    CollisionDirection[CollisionDirection["RIGHT"] = 2] = "RIGHT";
    CollisionDirection[CollisionDirection["BOTTOM"] = 3] = "BOTTOM";
    CollisionDirection[CollisionDirection["LEFT"] = 4] = "LEFT";
})(CollisionDirection = exports.CollisionDirection || (exports.CollisionDirection = {}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptSystem = void 0;
const system_1 = __webpack_require__(9);
class ScriptSystem extends system_1.System {
    constructor() {
        super(...arguments);
        this.name = 'script';
    }
    update() {
        // let scriptComponentManager = ManagerFactory.get(ScriptComponent.name) as ScriptComponentManager;
        // scriptComponentManager.entities.forEach((entity: Entity) => {
        //     let scriptComponent = scriptComponentManager.getInstance(entity) as ScriptComponent;
        //     if (!scriptComponent.instance) {
        //         scriptComponent.instance = new (<any>scriptComponent).scritableEntity();
        //         scriptComponent.instance.onCreate();
        //     }
        //     scriptComponent.instance.update();
        // });
    }
    dispose(entity) {
    }
}
exports.ScriptSystem = ScriptSystem;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebGLRenderer = void 0;
const base_renderer_1 = __webpack_require__(10);
const Mat4_1 = __webpack_require__(21);
class Drawable {
}
class Image {
}
class WebGLRenderer extends base_renderer_1.BaseRenderer {
    constructor(scene, tilesets) {
        super();
        this.tilesets = [];
        this.shaderPath = '/shaders';
        this._drawables = [];
        this._vertexShaders = [];
        this._fragmentShaders = [];
        this._testTranslationAmount = [0, 0, 0]; // x,y,z
        this._testRotationAmount = [0, 1, 0]; // x,y,z
        this._testScaleAmount = [1, 1, 0]; //x,y,z
        this._testTranslateSpeed = 100;
        this.angleInDegress = 0;
        this.angleInRadians = 0;
        this.scene = scene;
        this.tilesets = tilesets;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.context = this.engineCanvas.getContext('webgl');
            if (!this.context) {
                throw "WebGL not supported.";
            }
            this.engineCanvas.width = window.innerWidth;
            this.engineCanvas.height = window.innerHeight;
            let vertextShaderSource = yield (yield fetch(`${this.shaderPath}/vertex-shader.glsl`)).text();
            let fragmentShaderSource = yield (yield fetch(`${this.shaderPath}/fragment-shader.glsl`)).text();
            // TODO: Refactor into basic helper method.
            let vertextShader = this._createShader(this.context.VERTEX_SHADER, vertextShaderSource);
            let fragmentShader = this._createShader(this.context.FRAGMENT_SHADER, fragmentShaderSource);
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
            // this._createDrawable([
            //     100, 200, 0,
            //     800, 200, 0,
            //     100, 300, 0,
            //     100, 300, 0,
            //     800, 200, 0,
            //     800, 300, 0
            // ]);
        });
    }
    _createDrawable(positions) {
        let drawable = new Drawable();
        drawable.positions = positions;
        drawable.buffer = this.context.createBuffer();
        this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);
        this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(drawable.positions), this.context.STATIC_DRAW);
        this._drawables.push(drawable);
    }
    _convertAngleUnitCircleCoordinates(angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        let sine = Math.sin(angleInRadians);
        let cosine = Math.cos(angleInRadians);
        return {
            sine: sine,
            cosine: cosine
        };
    }
    draw() {
        console.log('[WEBGL]: Draw');
        // Update test translate
        // this._testTranslationAmount[0] += this._testTranslateSpeed * Time.deltaTime;
        // this.angleInDegress += 10 * Time.deltaTime;
        // Points on a unit circle are called sine and cosine (sine = x) (cosine = y).
        let unitCircleCoordinates = this._convertAngleUnitCircleCoordinates(this.angleInDegress);
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
        this._drawables.forEach((drawable) => {
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            this.context.enableVertexAttribArray(this._positionAttributeLocation);
            this.context.bindBuffer(this.context.ARRAY_BUFFER, drawable.buffer);
            let size = 3; // 2 components per iteration -> 3 for orthographic.
            let type = this.context.FLOAT; // the data is 32bit floats
            let normalize = false; // don't normalize the data
            let stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            let offset = 0; // start at the beginning of the buffer
            this.context.vertexAttribPointer(this._positionAttributeLocation, size, type, normalize, stride, offset);
            // TODO: Should this be done in each iteration? Or before?
            // Enable position attribute in vertext shader. So WebGL can use the data we set in the ARRAY_BUFFER.
            this.context.enableVertexAttribArray(this._colorAttributeLocation);
            this.context.bindBuffer(this.context.ARRAY_BUFFER, this._colorBuffer);
            let cSize = 3; // 2 components per iteration -> 3 for orthographic.
            let cType = this.context.UNSIGNED_BYTE; // the data is 32bit floats
            let cNormalize = false; // don't normalize the data
            let cStride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
            let cOffset = 0; // start at the beginning of the buffer
            this.context.vertexAttribPointer(this._colorAttributeLocation, cSize, cType, cNormalize, cStride, cOffset);
            // Set uniforms
            this.context.uniform4f(this._colorUniformLocation, 1, 1, 1, 1); // color
            // var left = 0;
            // var right = this.context.canvas.width;
            // var bottom = this.context.canvas.height;
            // var top = 0;
            // var near = 400;
            // var far = -400;
            // var matrix = Mat4.orthographic(left, right, bottom, top, near, far);
            let matrix = Mat4_1.default.projection(this.context.canvas.width, this.context.canvas.height, 400);
            // TODO: This was only commented out to get the build working.
            // matrix = Mat4.translate(matrix, this._testTranslationAmount[0], this._testTranslationAmount[1], this._testTranslationAmount[2]);
            // matrix = Mat4.xRotate(matrix, this.angleInDegress * Math.PI / 180);
            // matrix = Mat4.yRotate(matrix, this.angleInDegress * Math.PI / 180);
            // matrix = Mat4.zRotate(matrix, this.angleInDegress * Math.PI / 180);
            // matrix = Mat4.scale(matrix, this._testScaleAmount[0], this._testScaleAmount[1], this._testScaleAmount[2]);
            // Adjust origin. How does this actually adjust the rotation point? Can't seem to get it working?
            // matrix = Mat4.translate(matrix, 150, 150, 150);
            this.context.uniformMatrix4fv(this._matrixUniformLocation, false, matrix);
            let primitiveType = this.context.TRIANGLES;
            let drawOffset = 0;
            let drawCount = 6; // square from two triangles would be 6.
            this.context.drawArrays(primitiveType, drawOffset, drawCount);
        });
    }
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
    _createShader(shaderType, shaderSource) {
        let shader = this.context.createShader(shaderType);
        // Create container for the shader source text to be placed into then compile.
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        let successful = this.context.getShaderParameter(shader, this.context.COMPILE_STATUS);
        if (successful) {
            return shader;
        }
        // TODO: Refactor into some sort of general dispose function for shaders.
        console.log(this.context.getShaderInfoLog(shader));
        this.context.deleteShader(shader);
        throw `[SHADER ERROR]: Unable to load shader ${shaderType}`;
    }
    /**
     * Links vertex shader and fragment shader into a WebGL program.
     * @param vertextShader The vertex shader to link to the program.
     * @param fragmentShader The fragment shader to link to the program.
     */
    _createProgram(vertextShader, fragmentShader) {
        let program = this.context.createProgram();
        // TODO: Add checks to determine that each shader parameter is actually of the correct shader type.
        this.context.attachShader(program, vertextShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        let successful = this.context.getProgramParameter(program, this.context.LINK_STATUS);
        if (successful) {
            return program;
        }
        // TODO: Refactor into some sort of general dispose function for programs.
        console.log(this.context.getProgramInfoLog(program));
        this.context.deleteProgram(program);
        throw `[SHADER ERROR]: Unable to link shaders to program`;
    }
}
exports.WebGLRenderer = WebGLRenderer;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Mat4 {
    constructor() {
    }
    static identity() {
        return [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
    }
    static translation(translateX, translateY, translateZ) {
        let x = translateX;
        let y = translateY;
        let z = translateZ;
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ];
    }
    static xRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ];
    }
    static yRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ];
    }
    static zRotation(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
        return [
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ];
    }
    static scaling(sx, sy, sz) {
        return [
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1,
        ];
    }
    static multiply(a, b) {
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
    }
    static translate(m, tx, ty, tz) {
        return Mat4.multiply(m, Mat4.translation(tx, ty, tz));
    }
    static xRotate(m, angleInRadians) {
        return Mat4.multiply(m, Mat4.xRotation(angleInRadians));
    }
    static yRotate(m, angleInRadians) {
        return Mat4.multiply(m, Mat4.yRotation(angleInRadians));
    }
    static zRotate(m, angleInRadians) {
        return Mat4.multiply(m, Mat4.zRotation(angleInRadians));
    }
    static scale(m, sx, sy, sz) {
        return Mat4.multiply(m, Mat4.scaling(sx, sy, sz));
    }
    static projection(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return [
            2 / width, 0, 0, 0,
            0, -2 / height, 0, 0,
            0, 0, 2 / depth, 0,
            -1, 1, 0, 1,
        ];
    }
    static orthographic(left, right, bottom, top, near, far) {
        return [
            2 / (right - left), 0, 0, 0,
            0, 2 / (top - bottom), 0, 0,
            0, 0, 2 / (near - far), 0,
            (left + right) / (left - right),
            (bottom + top) / (bottom - top),
            (near + far) / (near - far),
            1,
        ];
    }
}
exports.default = Mat4;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasRenderer = void 0;
// Local imports.
const point_1 = __webpack_require__(1);
const transform_1 = __webpack_require__(4);
const base_renderer_1 = __webpack_require__(10);
const manager_factory_1 = __webpack_require__(2);
// Component imports.
const components_1 = __webpack_require__(0);
const components_2 = __webpack_require__(0);
const components_3 = __webpack_require__(0);
const components_4 = __webpack_require__(0);
const logger_1 = __webpack_require__(3);
const camera_1 = __webpack_require__(6);
class CanvasRenderer extends base_renderer_1.BaseRenderer {
    /**
     * Default constructor.
     */
    constructor(scene, tilesets) {
        super();
        /**
         * The tilesets to use for the current scene.
         */
        this.tilesets = [];
        /**
         * The main scene camera this is always here.
         */
        this.mainCamera = new camera_1.Camera();
        this.scene = scene;
        this.tilesets = tilesets;
        if (!this.scene) {
            throw "You cannot initialize the renderer without a scene.";
        }
        if (!this.tilesets || this.tilesets.length === 0) {
            throw "You cannot initialize the renderer without any tilesets.";
        }
        this.engineCanvas = document.querySelector('#engine-canvas');
        this.context = this.engineCanvas.getContext('2d');
    }
    /**
     * Initializes the canvas for the renderer.
     */
    init() {
        logger_1.Logger.info('Started initializing canvas renderer', CanvasRenderer.name);
        this.engineCanvas.addEventListener('mousedown', (event) => this.onCanvasMouseDown(event));
        this.engineCanvas.addEventListener('mouseup', (event) => this.onCanvasMouseUp(event));
        this.engineCanvas.addEventListener('mousemove', (event) => this.onCanvasMouseMove(event));
        // Initialize the camera for the renderer.
        this.mainCamera.viewport = new transform_1.Transform(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.mainCamera.max = new point_1.Point((this.scene.columns * this.scene.tileSize) - this.mainCamera.viewport.width, (this.scene.rows * this.scene.tileSize) - this.mainCamera.viewport.height);
        logger_1.Logger.info('Finished initializing canvas renderer', CanvasRenderer.name);
    }
    /**
     * Draw any entities to the canvas if they have the sprite renderer component.
     */
    draw() {
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
    }
    render() {
        this.scene.layers.forEach((layer, index) => {
            if (layer.enabled) {
                // Render the tilemap sprites for the current layer.
                let tilemapManager = manager_factory_1.ManagerFactory.get(components_4.TilemapComponent.name);
                tilemapManager.instances.forEach((tilemapInstance) => {
                    var startCol = 0; // Math.floor(camera.viewport.x / this.scene.tileSize);
                    var endCol = 64; // startCol + (camera.viewport.width / this.scene.tileSize) + 1;
                    var startRow = 0; // Math.floor(camera.viewport.y / this.scene.tileSize);
                    var endRow = 64; // startRow + (camera.viewport.height / this.scene.tileSize) + 1;
                    var offsetX = 0; // -camera.viewport.x + startCol * this.scene.tileSize;
                    var offsetY = 0; // -camera.viewport.y + startRow * this.scene.tileSize;
                    for (let col = startCol; col <= endCol; col++) {
                        for (let row = startRow; row <= endRow; row++) {
                            let sprite = tilemapInstance.tiles[row * 64 + col]; // this.scene.columns
                            var x = (col - startCol) * 32 + offsetX; // this.scene.tileSize
                            var y = (row - startRow) * 32 + offsetY; // this.scene.tileSize
                            this.context.drawImage(this.tilesets[tilemapInstance.tilesetIndex].image, //this.tilesets[layer.tileset].image,
                            sprite * 32, 0, 32, 32, Math.round(x), Math.round(y), 32, 32);
                        }
                    }
                });
                // Render any standalone sprites for the current layer.
                let spriteManager = manager_factory_1.ManagerFactory.get(components_1.SpriteRendererComponent.name);
                spriteManager.entities.forEach((entity) => {
                    let spriteRenderer = spriteManager.getInstance(entity);
                    let spriteTransform = entity.getComponent(components_3.TransformComponent);
                    let material = entity.getComponent(components_2.MaterialComponent);
                    if (material) {
                        this.applyMaterial(material);
                    }
                    this.context.drawImage(this.tilesets[0].image, // this.tilesets[spriteRendererComponent.layer].image,
                    spriteRenderer.column * this.scene.tileSize, spriteRenderer.row * this.scene.tileSize, this.scene.tileSize, this.scene.tileSize, spriteTransform.transform.x - 0, // cameraOffsetX,
                    spriteTransform.transform.y - 0, // cameraOffsetY,
                    this.scene.tileSize, this.scene.tileSize);
                });
            }
        });
    }
    applyMaterial(materialComponent) {
        this.context.fillStyle = materialComponent.fillStyle;
        this.context.globalAlpha = materialComponent.alpha;
    }
    /**
     * Clears the canvas for the next draw call.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    clearCanvas() {
        this.context.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
    }
    /**
     * Resizes the canvas canvas to fit the dimensions of the viewport.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    resizeCanvas() {
        if (this.getCanvasWidth() !== window.innerWidth || this.getCanvasHeight() !== window.innerHeight) {
            this.setCanvasWidth(window.innerWidth);
            this.setCanvasHeight(window.innerHeight);
        }
    }
    /**
     * Gets the current width of the canvas.
     */
    getCanvasHeight() {
        return this.engineCanvas.height;
    }
    /**
     * Gets the current height of the canvas.
     */
    getCanvasWidth() {
        return this.engineCanvas.width;
    }
    /**
     * Sets the height of the canvas.
     * @param height The height to set the canvas to.
     */
    setCanvasHeight(height) {
        this.engineCanvas.height = height;
    }
    /**
     * Sets the width of the canvas.
     * @param width The width to set the canvas to.
     */
    setCanvasWidth(width) {
        this.engineCanvas.width = width;
    }
    onCanvasMouseDown(event) {
        console.log('mousedown');
    }
    onCanvasMouseUp(event) {
        console.log('mouseup');
    }
    onCanvasMouseMove(event) {
        console.log('mousemove');
    }
}
exports.CanvasRenderer = CanvasRenderer;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isCoordinateContained = void 0;
/**
 * Determines if the given x/y coordinate is contained with the given dimensions. Think
 * if a mouse is hovering over a button.
 *
 * @author NSSure
 * @since 11/9/2020
 *
 * @param point The point that needs to be checked against the given container dimensions.
 * @param containerOrigin The x and y coordinates of container.
 * @param containerWidth The width of the container.
 * @param containerHeight The height of the container.
 */
function isCoordinateContained(point, containerTransform) {
    if (point.x >= containerTransform.x && (point.x <= (containerTransform.x + containerTransform.width))) {
        if (point.y >= containerTransform.y && (point.y <= (containerTransform.y + containerTransform.height))) {
            return true;
        }
    }
    return false;
}
exports.isCoordinateContained = isCoordinateContained;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = __webpack_require__(7);
const point_1 = __webpack_require__(1);
class Collider extends entity_1.Entity {
    constructor(transform) {
        super();
        this.isTrigger = false;
        this.isTriggered = false;
        this.points = new Array();
        // this.transform = transform;
        // Top left.
        this.points.push(new point_1.Point(transform.x, transform.y));
        // Top right.
        this.points.push(new point_1.Point(transform.x + transform.width, transform.y));
        // Bottom left.
        this.points.push(new point_1.Point(transform.x, transform.y + transform.height));
        // Bottom right.
        this.points.push(new point_1.Point(transform.x + transform.width, transform.y + transform.height));
    }
}
exports.default = Collider;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Core
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(5), exports);
// Graphics
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(14), exports);
// Helpers
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
// Logging
__exportStar(__webpack_require__(3), exports);
// Models
__exportStar(__webpack_require__(15), exports);
// Physics
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
// Primitives
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(4), exports);
// Scene
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(42), exports);
__exportStar(__webpack_require__(43), exports);
// State
__exportStar(__webpack_require__(44), exports);
// Systems
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const time_1 = __webpack_require__(5);
const scene_manager_1 = __webpack_require__(11);
const configuration_1 = __webpack_require__(8);
const system_manager_1 = __webpack_require__(16);
const manager_factory_1 = __webpack_require__(2);
const collision_system_1 = __webpack_require__(17);
const ScriptSystem_1 = __webpack_require__(19);
const webgl_renderer_1 = __webpack_require__(20);
const canvas_renderer_1 = __webpack_require__(22);
// Loggin.
const logger_1 = __webpack_require__(3);
class Application {
    /**
     * The main constructor.
     */
    constructor() {
        /**
         * Flag that determines what renderer will be used.
         */
        this.type = 'canvas';
        // Register systems.
        system_manager_1.SystemManager.register(new collision_system_1.CollisionSystem());
        system_manager_1.SystemManager.register(new ScriptSystem_1.ScriptSystem());
        // Map component manager instance to component types.
        manager_factory_1.ManagerFactory.bootstrap();
        logger_1.Logger.info(`Registered ${manager_factory_1.ManagerFactory.managers.size} manager(s)`, Application.name);
        logger_1.Logger.data('Registered manager(s)', manager_factory_1.ManagerFactory.managers);
    }
    /**
     * Actually begins the game instance. Processes the configuration.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.info('[Started initializing application]', Application.name);
            let engineConfigPath = 'manifest.json';
            // Determines what base url to use for loading application resources (tileset, configurations, etc).
            const urlParams = new URLSearchParams(location.search);
            // Used in the editor.
            if (urlParams.has('baseUrl')) {
                configuration_1.Configuration.baseUrl = decodeURIComponent(urlParams.get('baseUrl'));
                engineConfigPath = `${configuration_1.Configuration.baseUrl}/${engineConfigPath}`;
            }
            // Load engine configuration.
            let engineConfig = yield (yield fetch(engineConfigPath).catch(this.handleLoadError)).json();
            // Load the first scene and init the renderer with the default scene and tilesets.
            scene_manager_1.SceneManager.load(engineConfig.scenes[0]).then((loadSceneRtn) => {
                if (this.type === 'webgl') {
                    this.renderer = new webgl_renderer_1.WebGLRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
                }
                else {
                    this.renderer = new canvas_renderer_1.CanvasRenderer(loadSceneRtn.scene, loadSceneRtn.tilesets);
                }
                this.renderer.init();
                this.onStart();
                // Start the main application loop.
                window.requestAnimationFrame((time) => this.mainLoop(time));
            });
        });
    }
    handleLoadError(response) {
        console.warn(response);
        return new Response(JSON.stringify({
            code: 500,
            message: response.error
        }));
    }
    /**
     * The main loop contains all the rendering logic will be called from within this function.
     *
     * @param time The time between the animation frames.
     *
     * @author NSSure
     * @since 11/8/2020
     */
    mainLoop(time) {
        // Update peripheral data (time, mouse, etc) for use within the render systems.
        time_1.Time.calculateDeltaTime(time);
        // Mouse.update(this.renderer.mousePosition);
        // Iterate through any registered systems and execute the update method for each system.
        // SystemManager.systems.forEach((system: any) => {
        //     system.update();
        // });
        // Execute the draw method within the renderer.
        this.renderer.draw();
        // Request a new animation frame.
        window.requestAnimationFrame((time) => this.mainLoop(time));
    }
}
exports.Application = Application;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YakConstants = void 0;
const components_1 = __webpack_require__(0);
const components_2 = __webpack_require__(0);
const components_3 = __webpack_require__(0);
const components_4 = __webpack_require__(0);
const components_5 = __webpack_require__(0);
const components_6 = __webpack_require__(0);
const components_7 = __webpack_require__(0);
const components_8 = __webpack_require__(0);
class YakConstants {
}
exports.YakConstants = YakConstants;
/**
 * The types of all of the available components.
 */
YakConstants.componentTypes = [
    components_1.TagComponent,
    components_2.TransformComponent,
    components_3.SpriteRendererComponent,
    components_4.MaterialComponent,
    components_5.ColliderComponent,
    components_6.CameraComponent,
    components_7.ImageComponent,
    components_8.ScriptComponent
];


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const time_1 = __webpack_require__(5);
/**
 * Tracks keyboard input only. For mouse input use Mouse.
 */
class Input {
    constructor() {
        window.addEventListener('keydown', (event) => this._onKeyDown(event));
        window.addEventListener('keyup', (event) => this._onKeyUp(event));
    }
    _onKeyDown(event) {
        Input.codes.set(event.code.toLowerCase(), true);
    }
    _onKeyUp(event) {
        if (Input.codes.has(event.code.toLowerCase())) {
            Input.codes.set(event.code.toLowerCase(), false);
        }
    }
    static isPressed(code) {
        return Input.codes.has(code.toLowerCase());
    }
    static horizontal() {
        let xDirection;
        if (Input.isPressed('keya')) {
            xDirection = -1;
        }
        else if (Input.isPressed('keyd')) {
            xDirection = 1;
        }
        else {
            xDirection = 0;
        }
        return xDirection;
    }
    static vertical() {
        let yDirection;
        if (Input.isPressed('keyw')) {
            yDirection = -1;
        }
        else if (Input.isPressed('keys')) {
            yDirection = 1;
        }
        else {
            yDirection = 0;
        }
        return yDirection * time_1.Time.deltaTime;
    }
}
exports.Input = Input;
Input.codes = new Map();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = void 0;
/**
 * Contains information related to the render layer.
 */
class Layer {
    constructor(name, enabled, locked, order) {
        this.name = name;
        this.enabled = enabled;
        this.locked = locked;
        this.order = order;
    }
}
exports.Layer = Layer;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Mat3 {
    constructor() { }
    static identity() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1];
    }
    static projection(width, height) {
        return [2 / width, 0, 0, 0, -2 / height, 0, -1, 1, 1];
    }
    static translation(translateX, translateY) {
        let x = translateX;
        let y = translateY;
        return [1, 0, 0, 0, 1, 0, x, y, 1];
    }
    static rotation(angleInRadians) {
        let c = Math.cos(angleInRadians);
        let s = Math.sin(angleInRadians);
        return [c, -s, 0, s, c, 0, 0, 0, 1];
    }
    static scaling(scaleX, scaleY) {
        let x = scaleX;
        let y = scaleY;
        return [x, 0, 0, 0, y, 0, 0, 0, 1];
    }
    static multiply(a, b) {
        var a00 = a[0 * 3 + 0];
        var a01 = a[0 * 3 + 1];
        var a02 = a[0 * 3 + 2];
        var a10 = a[1 * 3 + 0];
        var a11 = a[1 * 3 + 1];
        var a12 = a[1 * 3 + 2];
        var a20 = a[2 * 3 + 0];
        var a21 = a[2 * 3 + 1];
        var a22 = a[2 * 3 + 2];
        var b00 = b[0 * 3 + 0];
        var b01 = b[0 * 3 + 1];
        var b02 = b[0 * 3 + 2];
        var b10 = b[1 * 3 + 0];
        var b11 = b[1 * 3 + 1];
        var b12 = b[1 * 3 + 2];
        var b20 = b[2 * 3 + 0];
        var b21 = b[2 * 3 + 1];
        var b22 = b[2 * 3 + 2];
        return [b00 * a00 + b01 * a10 + b02 * a20, b00 * a01 + b01 * a11 + b02 * a21, b00 * a02 + b01 * a12 + b02 * a22, b10 * a00 + b11 * a10 + b12 * a20, b10 * a01 + b11 * a11 + b12 * a21, b10 * a02 + b11 * a12 + b12 * a22, b20 * a00 + b21 * a10 + b22 * a20, b20 * a01 + b21 * a11 + b22 * a21, b20 * a02 + b21 * a12 + b22 * a22];
    }
    static translate(matrix, translateX, translateY) {
        return Mat3.multiply(matrix, Mat3.translation(translateX, translateY));
    }
    static rotate(matrix, angleInRadians) {
        return Mat3.multiply(matrix, Mat3.rotation(angleInRadians));
    }
    static scale(matrix, scaleX, scaleY) {
        return Mat3.multiply(matrix, Mat3.scaling(scaleX, scaleY));
    }
}
exports.default = Mat3;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
/**
 * Tracks mouse input only. For keyboard input use Input.
 */
class Mouse {
    constructor() {
        window.addEventListener('mousedown', (event) => this.onMouseDown(event));
        window.addEventListener('mouseup', (event) => this.onMouseUp(event));
    }
    onMouseDown(event) {
        Mouse.buttons.set(event.button, true);
    }
    onMouseUp(event) {
        if (Mouse.buttons.has(event.button)) {
            Mouse.buttons.set(event.button, false);
        }
    }
    static isPressed(button) {
        return Mouse.buttons.has(button);
    }
    static update(mousePosition) {
        if (this.lastMousePosition) {
            this.xDiff = mousePosition.x - this.lastMousePosition.x;
            this.yDiff = mousePosition.y - this.lastMousePosition.y;
        }
        this.lastMousePosition = mousePosition;
    }
}
exports.Mouse = Mouse;
Mouse.buttons = new Map();
Mouse.xDiff = 0;
Mouse.yDiff = 0;
Mouse.lastMousePosition = null;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprite = void 0;
const transform_1 = __webpack_require__(4);
class Sprite {
    constructor(transform, enabled, tileset, tilesetTransform = transform_1.Transform.empty) {
        this.transform = transform;
        this.enabled = enabled;
        this.tileset = tileset;
        this.tilesetTransform = tilesetTransform;
    }
}
exports.Sprite = Sprite;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areTransformsEqual = void 0;
function areTransformsEqual(sourceTransform, targetTransform) {
    return sourceTransform.x === targetTransform.x && sourceTransform.y === targetTransform.y && sourceTransform.width === targetTransform.width && sourceTransform.height === targetTransform.height;
}
exports.areTransformsEqual = areTransformsEqual;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areTransformsOverlapping = void 0;
const point_1 = __webpack_require__(1);
const is_coordinate_contained_1 = __webpack_require__(23);
function areTransformsOverlapping(sourceTransform, targetTransform) {
    if (is_coordinate_contained_1.isCoordinateContained(new point_1.Point(sourceTransform.x, sourceTransform.y), targetTransform)) {
        return true;
    }
    if (is_coordinate_contained_1.isCoordinateContained(new point_1.Point(sourceTransform.x + sourceTransform.width, sourceTransform.y), targetTransform)) {
        return true;
    }
    if (is_coordinate_contained_1.isCoordinateContained(new point_1.Point(sourceTransform.x, sourceTransform.y + sourceTransform.height), targetTransform)) {
        return true;
    }
    if (is_coordinate_contained_1.isCoordinateContained(new point_1.Point(sourceTransform.x + sourceTransform.width, sourceTransform.y + sourceTransform.height), targetTransform)) {
        return true;
    }
    return false;
}
exports.areTransformsOverlapping = areTransformsOverlapping;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pointWorldPosition = void 0;
const configuration_1 = __webpack_require__(8);
const point_1 = __webpack_require__(1);
function pointWorldPosition(point) {
    let gridCoordinates = new point_1.Point(0, 0);
    gridCoordinates.x = Math.floor(point.x / configuration_1.Configuration.gridSquareSize);
    gridCoordinates.y = Math.floor(point.y / configuration_1.Configuration.gridSquareSize);
    return gridCoordinates;
}
exports.pointWorldPosition = pointWorldPosition;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isCanvasBlank = void 0;
/**
 * Iterates the image data of the canvas to determine if the canvas
 * is empty or not.
 * @param canvas The canvas to check if it is empty.
 *
 * @author NSSure
 * @since 11/10/2020
 *
 * Ref - https://stackoverflow.com/questions/17386707/how-to-check-if-a-canvas-is-blank
 */
function isCanvasBlank(canvas) {
    const context = canvas.getContext('2d');
    const pixelBuffer = new Uint32Array(context.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
    return !pixelBuffer.some(color => color !== 0);
}
exports.isCanvasBlank = isCanvasBlank;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransformEmpty = void 0;
/**
 * Determines if a given transform object is empty. Meaning the x, y, width, and height
 * values are all zero.
 *
 * @param transform The transform to check if it is empty.
 *
 * @author NSSure
 * @since 11/12/2020
 */
function isTransformEmpty(transform) {
    return transform.x === 0 && transform.y === 0 && transform.width === 0 && transform.height === 0;
}
exports.isTransformEmpty = isTransformEmpty;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.screenToWorld = void 0;
function screenToWorld(camera, x, y) {
    return { x: x + camera.viewport.x, y: y + camera.viewport.y };
}
exports.screenToWorld = screenToWorld;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.worldToScreen = void 0;
const point_1 = __webpack_require__(1);
function worldToScreen(camera, x, y) {
    return new point_1.Point(x - camera.viewport.x, y - camera.viewport.y);
}
exports.worldToScreen = worldToScreen;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __webpack_require__(3);
const point_1 = __webpack_require__(1);
const collider_1 = __webpack_require__(24);
class SquareCollider extends collider_1.default {
    constructor(transform) {
        super(transform);
        this.points = new Array();
        // this.transform = transform;
        // Top left.
        this.points.push(new point_1.Point(transform.x, transform.y));
        // Top right.
        this.points.push(new point_1.Point(transform.x + transform.width, transform.y));
        // Bottom left.
        this.points.push(new point_1.Point(transform.x, transform.y + transform.height));
        // Bottom right.
        this.points.push(new point_1.Point(transform.x + transform.width, transform.y + transform.height));
    }
    onCollisionEnter() {
        logger_1.Logger.info('Square collider trigger enter', this.toString());
    }
    onCollisionLeave() {
        logger_1.Logger.info('Square collider trigger leave', this.toString());
    }
}
exports.default = SquareCollider;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Physics {
}
exports.default = Physics;
Physics.GRAVITATIONAL_CONSTANT = 9.8;
Physics.colliders = new Array();


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Manifest = void 0;
class Manifest {
    constructor(name, scenes) {
        this.name = name;
        this.scenes = scenes;
    }
}
exports.Manifest = Manifest;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
class Scene {
    constructor(name, rows, columns, tileSize, tilesets = [], tilemap = {}, entities = [], layers = [], entityManifests = []) {
        this.name = name;
        this.rows = rows;
        this.columns = columns;
        this.tileSize = tileSize;
        this.tilesets = tilesets;
        this.tilemap = tilemap;
        this.entities = entities;
        this.layers = layers;
        this.entityManifests = entityManifests;
    }
}
exports.Scene = Scene;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StateManager {
    static commit(key, value) {
        StateManager.data.set(key, value);
    }
    static get(key) {
        if (StateManager.data.has(key)) {
            return StateManager.data.get(key);
        }
        return null;
    }
    static exists(key) {
        return StateManager.data.has(key);
    }
    static delete(key) {
        if (StateManager.data.has(key)) {
            StateManager.data.delete(key);
        }
    }
}
exports.default = StateManager;
StateManager.data = new Map();


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptableEntity = void 0;
/**
 * User inherits this on the script classes.
 */
class ScriptableEntity {
    /**
     * Executed when the script instance is created.
     */
    onCreate() { }
    ;
    /**
     * Executed every iteration of the main loop.
     */
    update() { }
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the enter trigger.
     */
    onTriggerEnter(entity) { }
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity the fire the leave trigger.
     */
    onTriggerLeave(entity) { }
    ;
    /**
     * Fires when the entity has a trigger collider and interacts with another collider.
     * @param entity The entity that fired the stay trigger.
     */
    onTriggerStay(entity) { }
    ;
    /**
     * Adds a new component to the entity associated with the script.
     * @param component The component to add to the entity.
     */
    addComponent(component) {
        this.entity.addComponent(component);
    }
    /**
     * Gets a component of the specified type from the entity associated with the script. If no component is found then
     * null will be return.
     *
     * @param componentType The component type to get from the entity.
     * @returns The instance of the component.
     */
    getComponent(componentType) {
        return this.entity.getComponent(componentType);
    }
}
exports.ScriptableEntity = ScriptableEntity;


/***/ })
/******/ ]);
});
//# sourceMappingURL=yak-engine.js.map