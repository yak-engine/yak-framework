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
const __1 = __webpack_require__(25);
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
        __1.Logger.info(`Retriving component manager instance for ${componentName}`, ManagerFactory.name);
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
const entity_manager_1 = __webpack_require__(12);
const tileset_1 = __webpack_require__(14);
const load_scene_return_1 = __webpack_require__(15);
const logger_1 = __webpack_require__(3);
class SceneManager {
    static async load(sceneName, baseUrl = '') {
        logger_1.Logger.info('Started loading scene.', SceneManager.name);
        let scenePath = `${sceneName}.json`;
        if (baseUrl) {
            scenePath = `${baseUrl}\\${scenePath}`;
        }
        let response = await fetch(scenePath);
        let scene = await response.json();
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
            await tilesetImage.decode();
            tilesets.push(new tileset_1.Tileset(tilesetImage));
            logger_1.Logger.info(`Scene tileset ${tilesetName} loaded`, SceneManager.name);
        }
        logger_1.Logger.info('Finished loading scene', SceneManager.name);
        return new load_scene_return_1.LoadSceneReturn(scene, tilesets);
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
                        // entity.addComponent({
                        //     layer: sourceComponent.layer, 
                        //     tileset: sourceComponent.tileset, 
                        //     row: sourceComponent.row, 
                        //     column: sourceComponent.column
                        // });
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
    async init() {
        this.context = this.engineCanvas.getContext('webgl');
        if (!this.context) {
            throw "WebGL not supported.";
        }
        this.engineCanvas.width = window.innerWidth;
        this.engineCanvas.height = window.innerHeight;
        let vertextShaderSource = await (await fetch(`${this.shaderPath}/vertex-shader.glsl`)).text();
        let fragmentShaderSource = await (await fetch(`${this.shaderPath}/fragment-shader.glsl`)).text();
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
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(43), exports);
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);
__exportStar(__webpack_require__(48), exports);
__exportStar(__webpack_require__(49), exports);
__exportStar(__webpack_require__(52), exports);
__exportStar(__webpack_require__(54), exports);


/***/ }),
/* 26 */
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
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(2), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
    async init() {
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
        let engineConfig = await (await fetch(engineConfigPath).catch(this.handleLoadError)).json();
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
/* 28 */
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
/* 29 */
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
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(30), exports);
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);
__exportStar(__webpack_require__(14), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
__exportStar(__webpack_require__(36), exports);
__exportStar(__webpack_require__(37), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(40), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areTransformsEqual = void 0;
function areTransformsEqual(sourceTransform, targetTransform) {
    return sourceTransform.x === targetTransform.x && sourceTransform.y === targetTransform.y && sourceTransform.width === targetTransform.width && sourceTransform.height === targetTransform.height;
}
exports.areTransformsEqual = areTransformsEqual;


/***/ }),
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.screenToWorld = void 0;
function screenToWorld(camera, x, y) {
    return { x: x + camera.viewport.x, y: y + camera.viewport.y };
}
exports.screenToWorld = screenToWorld;


/***/ }),
/* 42 */
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
/* 43 */
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
__exportStar(__webpack_require__(3), exports);


/***/ }),
/* 44 */
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
__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 45 */
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
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(46), exports);
__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Physics {
}
exports.default = Physics;
Physics.GRAVITATIONAL_CONSTANT = 9.8;
Physics.colliders = new Array();


/***/ }),
/* 48 */
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
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(4), exports);


/***/ }),
/* 49 */
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
__exportStar(__webpack_require__(0), exports);
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(50), exports);
__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 50 */
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
/* 51 */
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
/* 52 */
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
__exportStar(__webpack_require__(53), exports);


/***/ }),
/* 53 */
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
/* 54 */
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
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(55), exports);
__exportStar(__webpack_require__(9), exports);


/***/ }),
/* 55 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YWstZW5naW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly95YWstZW5naW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvc2NlbmUvY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL3ByaW1pdGl2ZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL21hbmFnZXItZmFjdG9yeS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2xvZ2dpbmcvbG9nZ2VyLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvcHJpbWl0aXZlcy90cmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL3RpbWUudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9ncmFwaGljcy9jYW1lcmEudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9zY2VuZS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9zeXN0ZW1zL3N5c3RlbS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL2Jhc2UtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL3NjZW5lLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL2VudGl0eS1tYW5hZ2VyLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvY29yZS9jb21wb25lbnQtbWFuYWdlci50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL3RpbGVzZXQudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9tb2RlbHMvcmV0dXJucy9sb2FkLXNjZW5lLXJldHVybi50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2NvcmUvc3lzdGVtLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9zeXN0ZW1zL2NvbGxpc2lvbi9jb2xsaXNpb24tc3lzdGVtLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvc3lzdGVtcy9jb2xsaXNpb24vY29sbGlzaW9uLWRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL3N5c3RlbXMvc2NyaXB0L1NjcmlwdFN5c3RlbS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL3dlYmdsLXJlbmRlcmVyLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvZ3JhcGhpY3MvTWF0NC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL2NhbnZhcy1yZW5kZXJlci50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2hlbHBlcnMvaXMtY29vcmRpbmF0ZS1jb250YWluZWQudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9waHlzaWNzL2NvbGxpc2lvbi9jb2xsaWRlci50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2NvcmUvYXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9jb3JlL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL2luZGV4LnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvZ3JhcGhpY3MvSW5wdXQudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9ncmFwaGljcy9sYXllci50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL01hdDMudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9ncmFwaGljcy9tb3VzZS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2dyYXBoaWNzL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2hlbHBlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9oZWxwZXJzL2FyZS10cmFuc2Zvcm1zLWVxdWFsLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvaGVscGVycy9hcmUtdHJhbnNmb3Jtcy1vdmVybGFwcGluZy50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2hlbHBlcnMvY3VycmVudC12aWV3cG9ydC1ncmlkLXNxdWFyZS50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2hlbHBlcnMvaXMtY2FudmFzLWVtcHR5LnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvaGVscGVycy9pcy10cmFuc2Zvcm0tZW1wdHkudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9oZWxwZXJzL3NjcmVlbi10by13b3JsZC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL2hlbHBlcnMvd29ybGQtdG8tc2NyZWVuLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvbG9nZ2luZy9pbmRleC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL3BoeXNpY3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9waHlzaWNzL2NvbGxpc2lvbi9zcXVhcmUtY29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9waHlzaWNzL3BoeXNpY3MudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9wcmltaXRpdmVzL2luZGV4LnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvc2NlbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9zY2VuZS9tYW5pZmVzdC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL3NjZW5lL3NjZW5lLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8veWFrLWVuZ2luZS8uL3NyYy9zdGF0ZS9zdGF0ZS1tYW5hZ2VyLnRzIiwid2VicGFjazovL3lhay1lbmdpbmUvLi9zcmMvc3lzdGVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly95YWstZW5naW5lLy4vc3JjL3N5c3RlbXMvc2NyaXB0L1NjcmlwdGFibGVFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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LENBQUMsUUFBUSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ2pDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXZCLE9BQU87WUFDTCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztZQUM3QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztTQUM5QyxDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBUyxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUNqRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQVMsRUFBRSxjQUFzQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFTLEVBQUUsY0FBc0I7UUFDbkQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBUyxFQUFFLGNBQXNCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQVMsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7UUFDN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLEtBQWE7UUFDakUseURBQXlEO1FBQ3pELE9BQU87WUFDSixDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNaLENBQUM7SUFDTixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDMUcsT0FBTztZQUNILENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDM0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBRXpCLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUMvQixDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDL0IsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzNCLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztDQUNKO0FBdktELHVCQXVLQzs7Ozs7Ozs7Ozs7QUN2S0QsaUJBQWlCO0FBQ2pCLHVDQUE0QztBQUM1QywyQ0FBb0Q7QUFDcEQsZ0RBQStDO0FBRS9DLGlEQUF5RDtBQUV6RCxxQkFBcUI7QUFDckIsNENBQThEO0FBQzlELDRDQUF3RDtBQUN4RCw0Q0FBeUQ7QUFDekQsNENBQXVEO0FBRXZELHdDQUEyQztBQUkzQyx3Q0FBa0M7QUFHbEMsTUFBYSxjQUFlLFNBQVEsNEJBQVk7SUEwQjVDOztPQUVHO0lBQ0gsWUFBWSxLQUFZLEVBQUUsUUFBbUI7UUFDekMsS0FBSyxFQUFFLENBQUM7UUFuQlo7O1dBRUc7UUFDSSxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBT2hDOztXQUVHO1FBQ0ksZUFBVSxHQUFXLElBQUksZUFBTSxFQUFFLENBQUM7UUFRckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLHFEQUFxRCxDQUFDO1NBQy9EO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlDLE1BQU0sMERBQTBELENBQUM7U0FDcEU7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBNkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSTtRQUNQLGVBQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUUxRiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxxQkFBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksYUFBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhMLGVBQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDQTs7V0FFRztRQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQjs7V0FFRztRQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkOztXQUVHO1FBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxNQUFNO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBWSxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ3RELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDZixvREFBb0Q7Z0JBQ3BELElBQUksY0FBYyxHQUF1QyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbkcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFpQyxFQUFFLEVBQUU7b0JBQ25FLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLHVEQUF1RDtvQkFDekUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsZ0VBQWdFO29CQUNqRixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7b0JBQ3pFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGlFQUFpRTtvQkFDbEYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsdURBQXVEO29CQUN4RSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7b0JBRXhFLEtBQUssSUFBSSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQzNDLEtBQUssSUFBSSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7NEJBQzNDLElBQUksTUFBTSxHQUFXLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjs0QkFFakYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQjs0QkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQjs0QkFFL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQU0sRUFBRSxxQ0FBcUM7NEJBQ3pGLE1BQU0sR0FBRyxFQUFFLEVBQ1gsQ0FBQyxFQUNELEVBQUUsRUFDRixFQUFFLEVBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNiLEVBQUUsRUFDRixFQUFFLENBQ0wsQ0FBQzt5QkFDTDtxQkFDSjtnQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFFSCx1REFBdUQ7Z0JBQ3ZELElBQUksYUFBYSxHQUE4QyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQyxvQ0FBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFaEgsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxjQUFjLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQTRCLENBQUM7b0JBQ2xGLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsK0JBQWtCLENBQXVCLENBQUM7b0JBRXBGLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsOEJBQWlCLENBQXNCLENBQUM7b0JBRTNFLElBQUksUUFBUSxFQUFFO3dCQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ2hDO29CQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQU0sRUFBQyxzREFBc0Q7b0JBQzlFLGNBQWMsQ0FBQyxNQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzVDLGNBQWMsQ0FBQyxHQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDbkIsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQjtvQkFDbEQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQjtvQkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUN0QixDQUFDO2dCQUNOLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsYUFBYSxDQUFDLGlCQUFvQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFVLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUM5RixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLENBQUMsTUFBYztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBaUI7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWlCO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWlCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBMU5ELHdDQTBOQzs7Ozs7Ozs7Ozs7QUMzT0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQixxQkFBcUIsQ0FBQyxLQUFZLEVBQUUsa0JBQTZCO0lBQzdFLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDbkcsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNwRyxPQUFPLElBQUksQ0FBQztTQUNmO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBUkQsc0RBUUM7Ozs7Ozs7Ozs7QUN2QkQsd0NBQTRDO0FBQzVDLHVDQUErQztBQUcvQyxNQUE4QixRQUFTLFNBQVEsZUFBTTtJQVNqRCxZQUFZLFNBQW9CO1FBQzVCLEtBQUssRUFBRSxDQUFDO1FBVFosY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU3QixXQUFNLEdBQWlCLElBQUksS0FBSyxFQUFFLENBQUM7UUFRL0IsOEJBQThCO1FBRTlCLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRELGFBQWE7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsZUFBZTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV6RSxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUNKO0FBMUJELDJCQTBCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkQsK0NBQTZCO0FBQzdCLCtDQUFpQztBQUNqQywrQ0FBZ0M7QUFDaEMsK0NBQWdDO0FBQ2hDLCtDQUErQjtBQUMvQiwrQ0FBZ0M7QUFDaEMsK0NBQW1DO0FBQ25DLCtDQUE4QjtBQUM5QiwrQ0FBOEI7QUFDOUIsK0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RoQywrQ0FBOEI7QUFDOUIsK0NBQW9DO0FBQ3BDLDhDQUFnQztBQUNoQywrQ0FBNEI7QUFDNUIsK0NBQWlDO0FBQ2pDLDhDQUFrQztBQUNsQywrQ0FBZ0M7QUFDaEMsK0NBQWlDO0FBQ2pDLDhDQUF1Qjs7Ozs7Ozs7Ozs7QUNSdkIsc0NBQW9DO0FBQ3BDLGdEQUFxRDtBQUNyRCwrQ0FBc0Q7QUFDdEQsaURBQXVEO0FBQ3ZELGlEQUF5RDtBQUV6RCxtREFBd0U7QUFJeEUsK0NBQThEO0FBSzlELGlEQUEyRDtBQUMzRCxrREFBNkQ7QUFFN0QsVUFBVTtBQUNWLHdDQUEyQztBQUUzQyxNQUFzQixXQUFXO0lBcUI3Qjs7T0FFRztJQUNIO1FBbEJBOztXQUVHO1FBQ0ksU0FBSSxHQUFnQyxRQUFRLENBQUM7UUFnQmhELG9CQUFvQjtRQUNwQiw4QkFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLDhCQUFhLENBQUMsUUFBUSxDQUFDLElBQUksMkJBQVksRUFBRSxDQUFDLENBQUM7UUFFM0MscURBQXFEO1FBQ3JELGdDQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFM0IsZUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLGdDQUFjLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RixlQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLGdDQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLElBQUk7UUFDYixlQUFNLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwRSxJQUFJLGdCQUFnQixHQUFXLGVBQWUsQ0FBQztRQUUvQyxvR0FBb0c7UUFDcEcsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELHNCQUFzQjtRQUN0QixJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDO1lBQ3RFLGdCQUFnQixHQUFHLEdBQUcsNkJBQWEsQ0FBQyxPQUFPLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNyRTtRQUVELDZCQUE2QjtRQUM3QixJQUFJLFlBQVksR0FBYSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEcsa0ZBQWtGO1FBQ2xGLDRCQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUE2QixFQUFFLEVBQUU7WUFDN0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDhCQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEY7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakY7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXJCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVmLG1DQUFtQztZQUNuQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBYTtRQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZCLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixJQUFJLEVBQUUsR0FBRztZQUNULE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSztTQUMxQixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssUUFBUSxDQUFDLElBQVk7UUFDekIsK0VBQStFO1FBQy9FLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5Qiw2Q0FBNkM7UUFFN0Msd0ZBQXdGO1FBQ3hGLG1EQUFtRDtRQUNuRCx1QkFBdUI7UUFDdkIsTUFBTTtRQUVOLCtDQUErQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLGlDQUFpQztRQUNqQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7QUE5R0Qsa0NBOEdDOzs7Ozs7Ozs7OztBQ25JRCw0Q0FBbUQ7QUFDbkQsNENBQXlEO0FBQ3pELDRDQUE4RDtBQUM5RCw0Q0FBd0Q7QUFDeEQsNENBQXdEO0FBQ3hELDRDQUFzRDtBQUN0RCw0Q0FBcUQ7QUFDckQsNENBQXNEO0FBRXRELE1BQWEsWUFBWTs7QUFBekIsb0NBY0M7QUFiRzs7R0FFRztBQUNXLDJCQUFjLEdBQVU7SUFDbEMseUJBQVk7SUFDWiwrQkFBa0I7SUFDbEIsb0NBQXVCO0lBQ3ZCLDhCQUFpQjtJQUNqQiw4QkFBaUI7SUFDakIsNEJBQWU7SUFDZiwyQkFBYztJQUNkLDRCQUFlO0NBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJOLDhDQUF5QjtBQUN6QiwrQ0FBd0I7QUFDeEIsK0NBQXdCO0FBQ3hCLCtDQUF1QjtBQUN2QiwrQ0FBdUI7QUFDdkIsK0NBQXdCO0FBQ3hCLCtDQUF5QjtBQUN6QiwrQ0FBMEI7QUFDMUIsK0NBQWdDO0FBQ2hDLCtDQUFrQztBQUNsQywrQ0FBaUM7Ozs7Ozs7Ozs7O0FDVmpDLHNDQUFvQztBQUVwQzs7R0FFRztBQUNILE1BQWEsS0FBSztJQUdkO1FBQ0ksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQW9CO1FBQ25DLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLFFBQVEsQ0FBQyxLQUFvQjtRQUNqQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUNoQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVTtRQUNwQixJQUFJLFVBQWtCLENBQUM7UUFFdkIsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUMzQjtZQUNJLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQjthQUNJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFDaEM7WUFDSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQ0k7WUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksVUFBVSxDQUFDO1FBRWYsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUMzQjtZQUNJLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQjthQUNJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFDaEM7WUFDSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQ0k7WUFDRCxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxVQUFVLEdBQUcsV0FBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QyxDQUFDOztBQXhETCxzQkF5REM7QUF4RGlCLFdBQUssR0FBeUIsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUNOMUQ7O0dBRUc7QUFDSCxNQUFhLEtBQUs7SUFDZCxZQUNXLElBQWEsRUFDYixPQUFpQixFQUNqQixNQUFnQixFQUNoQixLQUFjO1FBSGQsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFTO0lBR3pCLENBQUM7Q0FDSjtBQVRELHNCQVNDOzs7Ozs7Ozs7O0FDWkQsTUFBcUIsSUFBSTtJQUN4QixnQkFBZSxDQUFDO0lBRVQsTUFBTSxDQUFDLFFBQVE7UUFDckIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLE1BQWM7UUFDckQsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBa0IsRUFBRSxVQUFrQjtRQUMvRCxJQUFJLENBQUMsR0FBVyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQVcsVUFBVSxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQXNCO1FBQzVDLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV6QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQ25ELElBQUksQ0FBQyxHQUFXLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBVyxNQUFNLENBQUM7UUFFdkIsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBTSxFQUFFLENBQU07UUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdkIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdB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QUVHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFNekI7O09BRUc7SUFDSSxRQUFRLEtBQW1CLENBQUM7SUFBQSxDQUFDO0lBRXBDOztPQUVHO0lBQ0ksTUFBTSxLQUFtQixDQUFDO0lBQUEsQ0FBQztJQUVsQzs7O09BR0c7SUFDSSxjQUFjLENBQUMsTUFBYyxJQUFTLENBQUM7SUFBQSxDQUFDO0lBRS9DOzs7T0FHRztJQUNJLGNBQWMsQ0FBQyxNQUFjLElBQVMsQ0FBQztJQUFBLENBQUM7SUFFL0M7OztPQUdHO0lBQ0ksYUFBYSxDQUFDLE1BQWMsSUFBUyxDQUFDO0lBQUEsQ0FBQztJQUU5Qzs7O09BR0c7SUFDSSxZQUFZLENBQUMsU0FBYztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksWUFBWSxDQUFhLGFBQWtCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFlLENBQUM7SUFDakUsQ0FBQztDQUNKO0FBcERELDRDQW9EQyIsImZpbGUiOiJ5YWstZW5naW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ5YWstZW5naW5lXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInlhay1lbmdpbmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wieWFrLWVuZ2luZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI1KTtcbiIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuLi9ncmFwaGljcy9jYW1lcmFcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wcmltaXRpdmVzL3BvaW50J1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9wcmltaXRpdmVzL3RyYW5zZm9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmFDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbWVyYT86IENhbWVyYSkge1xyXG4gXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRlckNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9wb2ludHM6IEFycmF5PFBvaW50PiA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNmb3JtIFxyXG4gICAgICogQHBhcmFtIGlzVHJpZ2dlciBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybTogVHJhbnNmb3JtLCBcclxuICAgICAgICBwdWJsaWMgaXNUcmlnZ2VyPzogYm9vbGVhbikge1xyXG5cclxuICAgICAgICAvLyBUb3AgbGVmdC5cclxuICAgICAgICB0aGlzLl9wb2ludHMucHVzaChuZXcgUG9pbnQodHJhbnNmb3JtLngsIHRyYW5zZm9ybS55KSk7XHJcblxyXG4gICAgICAgIC8vIFRvcCByaWdodC5cclxuICAgICAgICB0aGlzLl9wb2ludHMucHVzaChuZXcgUG9pbnQodHJhbnNmb3JtLnggKyB0cmFuc2Zvcm0ud2lkdGgsIHRyYW5zZm9ybS55KSk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSBsZWZ0LlxyXG4gICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkgKyB0cmFuc2Zvcm0uaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSByaWdodC5cclxuICAgICAgICB0aGlzLl9wb2ludHMucHVzaChuZXcgUG9pbnQodHJhbnNmb3JtLnggKyB0cmFuc2Zvcm0ud2lkdGgsIHRyYW5zZm9ybS55ICsgdHJhbnNmb3JtLmhlaWdodCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcGF0aCBvZiB0aGUgaW1hZ2UgbG9hZGVkIGludG8gdGhlIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNvdXJjZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29tcG9uZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpbGwgY29sb3IgZm9yIHRoZSBlbnRpdHkgaS5lICgjZmZmZmZmKS5cclxuICAgICAqIFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGZpbGxTdHlsZSA9ICcjZmZmZmZmJztcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbGxTdHlsZT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBhbHBoYSAob3BhY2l0eSkgb2YgdGhlIGVudGl0eS5cclxuICAgICAqIFxyXG4gICAgICogQHJlbWFya3NcclxuICAgICAqIFRoZSBhbHBoYSBjYW4gYmUgc2V0IGJldHdlZW4gMCBhbmQgMS5cclxuICAgICAqIFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGFscGhhID0gMTtcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFscGhhOiBudW1iZXIgPSAxO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2NyaXB0Q29tcG9uZW50ICB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc2NyaXRhYmxlRW50aXR5PzogYW55KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnN0YW5jZSE6IGFueTsgLy9TY3JpcHRhYmxlRW50aXR5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlUmVuZGVyZXJDb21wb25lbnQge1xyXG4gICAgcHVibGljIGxheWVyITogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyB0aWxlc2V0SW5kZXghOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHJvdz86IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29sdW1uPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIGxheWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyB0aWxlc2V0SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHRpbGVzOiBudW1iZXJbXSA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG59IiwiXHJcbi8vIEJ1bGsgc2NlbmUvbWFuYWdlciBpbXBvcnRzLlxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLic7XHJcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29sbGlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNjcmlwdENvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaWxlbWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENvbXBvbmVudE1hbmFnZXIgfSBmcm9tICcuL2NvbXBvbmVudC1tYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyRmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIG1hbmFnZXJzOiBNYXA8YW55LCBhbnk+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJvb3RzdHJhcCgpOiB2b2lkIHtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihUYWdDb21wb25lbnQubmFtZSwgbmV3IENvbXBvbmVudE1hbmFnZXI8VGFnQ29tcG9uZW50PigpKTtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihUcmFuc2Zvcm1Db21wb25lbnQubmFtZSwgbmV3IENvbXBvbmVudE1hbmFnZXI8VHJhbnNmb3JtQ29tcG9uZW50PigpKTtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihDYW1lcmFDb21wb25lbnQubmFtZSwgbmV3IENvbXBvbmVudE1hbmFnZXI8Q2FtZXJhQ29tcG9uZW50PigpKTtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihNYXRlcmlhbENvbXBvbmVudC5uYW1lLCBuZXcgQ29tcG9uZW50TWFuYWdlcjxNYXRlcmlhbENvbXBvbmVudD4oKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoU3ByaXRlUmVuZGVyZXJDb21wb25lbnQubmFtZSwgbmV3IENvbXBvbmVudE1hbmFnZXI8U3ByaXRlUmVuZGVyZXJDb21wb25lbnQ+KCkpO1xyXG4gICAgICAgIE1hbmFnZXJGYWN0b3J5LnJlZ2lzdGVyKENvbGxpZGVyQ29tcG9uZW50Lm5hbWUsIG5ldyBDb21wb25lbnRNYW5hZ2VyPENvbGxpZGVyQ29tcG9uZW50PigpKTtcclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5yZWdpc3RlcihJbWFnZUNvbXBvbmVudC5uYW1lLCBuZXcgQ29tcG9uZW50TWFuYWdlcjxJbWFnZUNvbXBvbmVudD4oKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoU2NyaXB0Q29tcG9uZW50Lm5hbWUsIG5ldyBDb21wb25lbnRNYW5hZ2VyPFNjcmlwdENvbXBvbmVudD4oKSk7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkucmVnaXN0ZXIoVGlsZW1hcENvbXBvbmVudC5uYW1lLCBuZXcgQ29tcG9uZW50TWFuYWdlcjxUaWxlbWFwQ29tcG9uZW50PigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBBZGQgdHlwZSBjb250cmFpbnRzLlxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3Rlcihjb21wb25lbnROYW1lOiBzdHJpbmcsIGNvbXBvbmVudE1hbmFnZXJJbnN0YW5jZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5oYXMoY29tcG9uZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudE1hbmFnZXJJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0PFRDb21wb25lbnRNYW5hZ2VyPihjb21wb25lbnROYW1lOiBzdHJpbmcpOiBUQ29tcG9uZW50TWFuYWdlciB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oYFJldHJpdmluZyBjb21wb25lbnQgbWFuYWdlciBpbnN0YW5jZSBmb3IgJHtjb21wb25lbnROYW1lfWAsIE1hbmFnZXJGYWN0b3J5Lm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5nZXQoY29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBgTWFuYWdlciBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZDogJHtjb21wb25lbnROYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsb2coKTogdm9pZCB7XHJcbiAgICAgICAgTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gY29uc29sZS5sb2cobWFuYWdlcikpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gTG9nVGhyZXNob2xkIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgREFUQSA9IDEsXHJcbiAgICBERUJVRyA9IDIsXHJcbiAgICBJTkZPID0gMyxcclxuICAgIEVSUk9SID0gNCxcclxuICAgIENSSVRJQ0FMID0gNVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcclxuICAgIHN0YXRpYyB0aHJlc2hvbGRzOiBMb2dUaHJlc2hvbGRbXSA9IFtMb2dUaHJlc2hvbGQuREFUQSwgTG9nVGhyZXNob2xkLkRFQlVHLCBMb2dUaHJlc2hvbGQuSU5GTywgTG9nVGhyZXNob2xkLkVSUk9SLCBMb2dUaHJlc2hvbGQuQ1JJVElDQUxdO1xyXG5cclxuICAgIHN0YXRpYyBkZWJ1Zyhtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy50aHJlc2hvbGRzLmluY2x1ZGVzKExvZ1RocmVzaG9sZC5ERUJVRykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYFtZQUsgREVCVUddOiAke21zZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5mbyhtc2c6IHN0cmluZywgc291cmNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudGhyZXNob2xkcy5pbmNsdWRlcyhMb2dUaHJlc2hvbGQuSU5GTykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKGAlYyBbWUFLIElORk8gLSAke3NvdXJjZX1dOiAke21zZ31gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXJyb3IobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudGhyZXNob2xkcy5pbmNsdWRlcyhMb2dUaHJlc2hvbGQuRVJST1IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtZQUsgRVJST1JdOiAke21zZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JpdGljYWwobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudGhyZXNob2xkcy5pbmNsdWRlcyhMb2dUaHJlc2hvbGQuQ1JJVElDQUwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtZQUsgQ1JJVElDQUxdOiAke21zZ31gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGF0YShtc2c6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRocmVzaG9sZHMuaW5jbHVkZXMoTG9nVGhyZXNob2xkLkRBVEEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyBbWUFLIERBVEFdOiAke21zZ31gLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnLCBkYXRhKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2dyYXBoaWNzL2NhbWVyYSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTY3JlZW5YKGNhbWVyYTogQ2FtZXJhKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54IC0gY2FtZXJhLnZpZXdwb3J0Lng7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xhbXBYKG1pbjogbnVtYmVyLCBtYXhMb3dlclJhbmdlOiBudW1iZXIsIG1heFVwcGVyUmFuZ2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMueCA9IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4TG93ZXJSYW5nZSwgbWF4VXBwZXJSYW5nZSkpOyAgXHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2xhbXBYKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnggPCBtaW4pIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gbWluO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXgpIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gbWF4O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGFtcFkobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueSA8PSBtaW4pIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gbWluO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnkgPj0gbWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IG1heDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycChzdGFydFZhbHVlOiBudW1iZXIsIGVuZFZhbHVlOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgPCAwID8gMCA6IGFtb3VudDtcclxuICAgICAgICBhbW91bnQgPSBhbW91bnQgPiAxID8gMSA6IGFtb3VudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0VmFsdWUgKyAoZW5kVmFsdWUgLSBzdGFydFZhbHVlKSAqIGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBuZXcgZW1wdHkgdHJhbnNmb3JtIG9iamVjdC4gTWVhbmluZyB0aGUgeCwgeSwgd2lkdGgsIGFuZCBoZWlnaHRcclxuICAgICAqIHZhbHVlcyBhcmUgYWxsIHplcm8uXHJcbiAgICAgKiBcclxuICAgICAqIEBhdXRob3IgTlNTdXJlXHJcbiAgICAgKiBAc2luY2UgMTEvMTIvMjAyMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0IGVtcHR5KCk6IFRyYW5zZm9ybSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0oMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVGltZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxhc3RUaW1lc3RhbXA6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWx0YVRpbWU6IGFueTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZnBzOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGVEZWx0YVRpbWUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYoIVRpbWUubGFzdFRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICBUaW1lLmxhc3RUaW1lc3RhbXAgPSB0aW1lO1xyXG4gICAgICAgICAgICBUaW1lLmZwcyA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgVGltZS5kZWx0YVRpbWUgPSAodGltZSAtIFRpbWUubGFzdFRpbWVzdGFtcCkvMTAwMDtcclxuICAgICAgICAgVGltZS5sYXN0VGltZXN0YW1wID0gdGltZTtcclxuICAgICAgICAgVGltZS5mcHMgPSAxLyBUaW1lLmRlbHRhVGltZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZWQgaW4gd29ybGQgY29vcmRpbmF0ZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2aWV3cG9ydCE6IFRyYW5zZm9ybTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlZCBpbiB3b3JsZCBjb29yZGluYXRlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1heCE6IFBvaW50O1xyXG5cclxuICAgIG9ydGhvZ3JhcGhpY1NpemU6IG51bWJlciA9IDU7XHJcblxyXG4gICAgaXNDbGFtcGVkWCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3cG9ydC54ID49IHRoaXMubWF4LnggLyAyIHx8IHRoaXMudmlld3BvcnQueCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NsYW1wZWRZKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdwb3J0LnkgPj0gdGhpcy5tYXgueSAvIDIgfHwgdGhpcy52aWV3cG9ydC55ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vY29yZS9tYW5hZ2VyLWZhY3RvcnknO1xyXG5pbXBvcnQgeyBTY3JpcHRDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuXHJcbi8qKlxyXG4gKiBCYXNlIG9iamVjdCBjbGFzcyB1c2VkIGZvciBzcHJpdGVzLCBjb2xsaWRlcnMsIHByaW1pdGl2ZXMsIGV0Yy4gQ29udGFpbnNcclxuICogc2hhcmVkIGNvZGUgY29tbW9uIGFjcm9zcyBtb3N0IGNsYXNzZXMuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5TU3VyZVxyXG4gKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlIDEyIGNoYXJhY3RlciBJRCBmb3IgZWFjaCBlbnRpdHkuXHJcbiAgICAgKi9cclxuICAgIC8vIGlkOiBzdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgMTIpO1xyXG4gICAgaWQ6IHN0cmluZyA9ICcnOyAvLyBSZWZhY3RvcmVkIHRvIG51bWJlciBmb3IgRUNTLlxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGVudGl0eS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5hbWU/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBlbnRpdHkgc2hvdWxkIGJlIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tcG9uZW50PFRDb21wb25lbnQ+KGNvbXBvbmVudEluc3RhbmNlOiBUQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoKDxhbnk+Y29tcG9uZW50SW5zdGFuY2UpLmNvbnN0cnVjdG9yLm5hbWUpIGFzIGFueTtcclxuICAgICAgICBtYW5hZ2VyLmFkZENvbXBvbmVudEluc3RhbmNlKHRoaXMsIGNvbXBvbmVudEluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50PFRDb21wb25lbnQ+KGNvbXBvbmVudFR5cGU6IGFueSk6IFRDb21wb25lbnQge1xyXG4gICAgICAgIC8vIGlmIChjb21wb25lbnRUeXBlLm5hbWUgPT09IFNjcmlwdENvbXBvbmVudC5uYW1lKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGNvbXBvbmVudFR5cGUubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIHRocm93IFwiR2V0dGluZyBzY3JpcHQgY29tcG9uZW50cyBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZC5cIjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoY29tcG9uZW50VHlwZS5uYW1lKTtcclxuICAgICAgICByZXR1cm4gKDxhbnk+bWFuYWdlcikuaW5zdGFuY2VzWyg8YW55Pm1hbmFnZXIpLm1hcFt0aGlzLmlkXV0gYXMgVENvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NyaXB0SW5zdGFuY2VzKCk6IFNjcmlwdENvbXBvbmVudFtdIHtcclxuICAgICAgICAvLyBsZXQgc2NyaXB0TWFuYWdlciA9IE1hbmFnZXJGYWN0b3J5LmdldChTY3JpcHRDb21wb25lbnQubmFtZSkgYXMgU2NyaXB0Q29tcG9uZW50TWFuYWdlcjtcclxuXHJcbiAgICAgICAgLy8gaWYgKHNjcmlwdE1hbmFnZXIubWFwLmhhcyh0aGlzLmlkKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzY3JpcHRNYW5hZ2VyLmluc3RhbmNlcy5maWx0ZXIoeCA9PiBzY3JpcHRNYW5hZ2VyLm1hcC5nZXQodGhpcy5pZCkuaW5jbHVkZXMoeC5pZCkpKTtcclxuICAgICAgICAvLyAgICAgLy8gVE9ETzogVGhpcyB3aWxsIG5vdCB3b3JrIGZvciBzY3JpcHQgY29tcG9uZW50cy5cclxuICAgICAgICAvLyAgICAgcmV0dXJuIHNjcmlwdE1hbmFnZXIuaW5zdGFuY2VzLmZpbHRlcih4ID0+IHNjcmlwdE1hbmFnZXIubWFwLmdldCh0aGlzLmlkKS5pbmNsdWRlcyh4LmlkKSkgYXMgU2NyaXB0Q29tcG9uZW50W107XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnROYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vICAgICBsZXQgbWFuYWdlciA9IE1hbmFnZXJGYWN0b3J5LmdldChjb21wb25lbnROYW1lKTtcclxuXHJcbiAgICAvLyAgICAgaWYgKG1hbmFnZXIuZW50aXR5RGF0YU1hcC5oYXModGhpcy5pZCkpIHtcclxuICAgIC8vICAgICAgICAgbGV0IGNvbXBvbmVudEluc3RhbmNlSWQ6IG51bWJlciA9IG1hbmFnZXIuZW50aXR5RGF0YU1hcC5nZXQodGhpcy5pZCk7XHJcbiAgICAvLyAgICAgICAgIG1hbmFnZXIuZGF0YS5zcGxpY2UobWFuYWdlci5kYXRhLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNvbXBvbmVudEluc3RhbmNlSWQpLCAxKTtcclxuICAgIC8vICAgICAgICAgbWFuYWdlci5lbnRpdHlEYXRhTWFwLmRlbGV0ZSh0aGlzLmlkKTtcclxuICAgIC8vICAgICAgICAgbWFuYWdlci5kYXRhRW50aXR5TWFwLmRlbGV0ZShjb21wb25lbnRJbnN0YW5jZUlkKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG1hbmFnZXIpO1xyXG4gICAgLy8gfVxyXG59IiwiaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuLi9zY2VuZS9tYW5pZmVzdCc7XHJcblxyXG4vKipcclxuICogQ29udGFpbnMgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gaW5zdGFuY2UuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5TU3VyZVxyXG4gKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIExvYWRlZCByZXNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlbmdpbmVDb25maWc6IE1hbmlmZXN0IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3aWR0aDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBiYXNlVXJsOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IHNpemUgb2YgdGhlIHNxdWFyZXMgb2YgdGhlIGNhbnZhcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBncmlkU3F1YXJlU2l6ZTogbnVtYmVyID0gMzI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBmaWxsIHRoYXQgaW1tZWRpYXRlbHkgZmlsbCB0aGUgY2FudmFzIGFyZWEgYWZ0ZXIgdGhlIGNsZWFyQ2FudmFzIG1ldGhvZCB0byBjYWxsZWQgaW4gdGhlIGRyYXcgbWV0aG9kLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNhbnZhc0ZpbGw6IHN0cmluZyA9ICcjMTgxODE4JztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gaW4gc2VsZWN0aW9uIG1vZGUgdGhpcyBpcyB0aGUgZmlsbCBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgYXJlYS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZWxlY3Rpb25UcmFuc2Zvcm1GaWxsOiBzdHJpbmcgPSAncmdiYSgyNTIsMjQ4LDIyNywgMC43KSc7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi9zY2VuZS9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN5c3RlbSB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBzeXN0ZW0uXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRlc3RcclxuICAgICAqIEBwYXJhbSBlbnRpdHkgdGVzdFxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBkaXNwb3NlKGVudGl0eTogRW50aXR5KTogdm9pZDtcclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvc2NlbmUnO1xyXG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSAnLi90aWxlc2V0JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVuZGVyZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY2FudmFzIHRvIHJlbmRlciB0aGUgY3VycmVudCBzY2VuZSB0by5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IGVuZ2luZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY3VycmVudCBzY2VuZSB0byByZW5kZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzY2VuZTogU2NlbmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGlsZXNldHMgdG8gdXNlIGZvciB0aGUgY3VycmVudCBzY2VuZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IHRpbGVzZXRzOiBUaWxlc2V0W107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gbG9hZHMuXHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGluaXQoKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXdzIHRvIHRoZSByZW5kZXJlci5cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZHJhdygpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgRW50aXR5TWFuYWdlciB9IGZyb20gJy4uL2NvcmUvZW50aXR5LW1hbmFnZXInO1xyXG5pbXBvcnQgeyBUaWxlc2V0IH0gZnJvbSAnLi4vZ3JhcGhpY3MvdGlsZXNldCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvc2NlbmUnO1xyXG5pbXBvcnQgeyBMb2FkU2NlbmVSZXR1cm4gfSBmcm9tICcuLi9tb2RlbHMvcmV0dXJucy9sb2FkLXNjZW5lLXJldHVybic7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZChzY2VuZU5hbWU6IHN0cmluZywgYmFzZVVybDogc3RyaW5nID0gJycpOiBQcm9taXNlPExvYWRTY2VuZVJldHVybj4ge1xyXG5cdFx0TG9nZ2VyLmluZm8oJ1N0YXJ0ZWQgbG9hZGluZyBzY2VuZS4nLCBTY2VuZU1hbmFnZXIubmFtZSk7XHJcblxyXG5cdFx0bGV0IHNjZW5lUGF0aDogc3RyaW5nID0gYCR7c2NlbmVOYW1lfS5qc29uYDtcclxuXHJcblx0XHRpZiAoYmFzZVVybCkge1xyXG5cdFx0XHRzY2VuZVBhdGggPSBgJHtiYXNlVXJsfVxcXFwke3NjZW5lUGF0aH1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNjZW5lUGF0aCk7XHJcblx0XHRsZXQgc2NlbmU6IFNjZW5lID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdExvZ2dlci5pbmZvKCdTY2VuZSBsb2FkZWQgYW5kIHBhcnNlZCBzdWNjZXNzZnVsbHknLCBTY2VuZU1hbmFnZXIubmFtZSk7XHJcblxyXG5cdFx0Ly8gUGFyc2VkIGVudGl0aWVzIHRvIHR5cGVzY3JpcHQgb2JqZWN0cy5cclxuXHRcdEVudGl0eU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51bnBhY2tFbnRpdHlNYW5pZmVzdHMoc2NlbmUpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGlsZXNldHM6IEFycmF5PFRpbGVzZXQ+ID0gbmV3IEFycmF5KCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgdGlsZXNldE5hbWUgb2Ygc2NlbmUudGlsZXNldHMpIHtcclxuXHRcdFx0bGV0IHRpbGVzZXRJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0bGV0IHRpbGVzZXRQYXRoOiBzdHJpbmcgPSBgJHtiYXNlVXJsfS90aWxlc2V0cy8ke3RpbGVzZXROYW1lfWA7XHJcblxyXG5cdFx0XHQvLyBpZiAoQ29uZmlndXJhdGlvbi5iYXNlVXJsKSB7XHJcblx0XHRcdC8vIFx0dGlsZXNldFBhdGggPSBgZmlsZTovLyR7Q29uZmlndXJhdGlvbi5iYXNlVXJsLnJlcGxhY2UoL1xcXFwvZywgXCIvXCIpfS8ke3RpbGVzZXRQYXRofWA7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcblx0XHRcdHRpbGVzZXRJbWFnZS5zcmMgPSB0aWxlc2V0UGF0aDtcclxuXHJcblx0XHRcdGF3YWl0IHRpbGVzZXRJbWFnZS5kZWNvZGUoKTtcclxuXHJcblx0XHRcdHRpbGVzZXRzLnB1c2gobmV3IFRpbGVzZXQodGlsZXNldEltYWdlKSk7XHJcblxyXG5cdFx0XHRMb2dnZXIuaW5mbyhgU2NlbmUgdGlsZXNldCAke3RpbGVzZXROYW1lfSBsb2FkZWRgLCBTY2VuZU1hbmFnZXIubmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0TG9nZ2VyLmluZm8oJ0ZpbmlzaGVkIGxvYWRpbmcgc2NlbmUnLCBTY2VuZU1hbmFnZXIubmFtZSk7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBMb2FkU2NlbmVSZXR1cm4oc2NlbmUsIHRpbGVzZXRzKTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9jb3JlL21hbmFnZXItZmFjdG9yeSc7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2dyYXBoaWNzL2NhbWVyYSc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL3NjZW5lL2VudGl0eSc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUvc2NlbmUnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3ByaW1pdGl2ZXMvcG9pbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9wcmltaXRpdmVzL3RyYW5zZm9ybSc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcclxuXHJcbi8vIEJ1bGsgY29tcG9uZW50cy9tYW5hZ2VyIGltcG9ydHMuXHJcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ29sbGlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5TWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjaGFyYWN0ZXJzOiBzdHJpbmcgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFbnRpdHlNYW5hZ2VyO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRW50aXR5TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFFbnRpdHlNYW5hZ2VyLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEVudGl0eU1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgRW50aXR5TWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEVudGl0eU1hbmFnZXIuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGl0aWVzOiBFbnRpdHlbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBlbnRpdHkgYW5kIHN0b3JlcyBpdCB3aXRoaW4gdGhlIGVudGl0eSBtYW5hZ2VyLlxyXG4gICAgICogQHJldHVybnMgVGhlIG5ld2x5IGNyZWF0ZWQgZW50aXR5IHBvcHVsYXRlZCB3aXRoIHRoZSByZXF1aXJlZCBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlKCk6IEVudGl0eSB7XHJcbiAgICAgICAgbGV0IGVudGl0eTogRW50aXR5ID0gbmV3IEVudGl0eSgpO1xyXG5cclxuICAgICAgICB0aGlzLmVudGl0aWVzLnB1c2goZW50aXR5KTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFbnRpdHlNYW5hZ2VyLmNoYXJhY3RlcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWQgKz0gRW50aXR5TWFuYWdlci5jaGFyYWN0ZXJzLnN1YnN0cmluZyhjaGFyYWN0ZXJJbmRleCwgY2hhcmFjdGVySW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZW50aXR5LmlkID0gaWQ7XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgcmVxdWlyZWQgY29tcG9uZW50cyB0byB0aGUgZW50aXR5LlxyXG4gICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IFRhZ0NvbXBvbmVudChgZW50aXR5JHtlbnRpdHkuaWR9YCkpO1xyXG4gICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybUNvbXBvbmVudChUcmFuc2Zvcm0uZW1wdHkpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIG9mIHRoZSBnaXZlbiBlbnRpdHkgYWxvbmcgd2l0aCBhbnkgcmVmZXJlbmNlcyB3aXRoaW4gYW55IGNvbXBvbmVudCBtYW5hZ2VyIG9yIHN5c3RlbXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byBkaXNwb3NlIG9mLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZShlbnRpdHk6IEVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZW50aXRpZXMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gZW50aXR5LmlkKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIHJlZmVyZW5jZXMgc3RvcmVkIGluIGVhY2ggb2YgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGluc3RhbmNlcy5cclxuICAgICAgICAgICAgLy8gTWFuYWdlckZhY3RvcnkubWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcjogQ29tcG9uZW50TSkgPT4gbWFuYWdlci5kaXNwb3NlKGVudGl0eSkpO1xyXG4gICAgICAgICAgICAvLyBTeXN0ZW1NYW5hZ2VyLnN5c3RlbXMuZm9yRWFjaCgoc3lzdGVtOiBTeXN0ZW0pID0+IHN5c3RlbS5kaXNwb3NlKGVudGl0eSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWRzIHRoZSBlbnRpdGllcy5cclxuICAgICAqIEBwYXJhbSBzY2VuZUNvbmZpZyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVucGFja0VudGl0eU1hbmlmZXN0cyhzY2VuZUNvbmZpZzogU2NlbmUpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGFyc2VkRW50aXRpZXM6IEVudGl0eVtdID0gW107XHJcblxyXG4gICAgICAgIC8vIEJvb3RzdHJhcCBlbnRpdGllcy5cclxuICAgICAgICBzY2VuZUNvbmZpZy5lbnRpdHlNYW5pZmVzdHMuZm9yRWFjaCgoZW50aXR5TWFuaWZlc3Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW50aXR5ID0gbmV3IEVudGl0eSgpO1xyXG5cclxuICAgICAgICAgICAgZW50aXR5LmlkID0gZW50aXR5TWFuaWZlc3QuaWQ7XHJcbiAgICAgICAgICAgIGVudGl0eS5lbmFibGVkID0gZW50aXR5TWFuaWZlc3QuZW5hYmxlZDtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgc291cmNlUHJvcGVydHkgaW4gZW50aXR5TWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzb3VyY2VDb21wb25lbnQgPSBlbnRpdHlNYW5pZmVzdFtzb3VyY2VQcm9wZXJ0eV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VQcm9wZXJ0eSA9PT0gJ3Nwcml0ZVJlbmRlcmVyQ29tcG9uZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnRpdHkuYWRkQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxheWVyOiBzb3VyY2VDb21wb25lbnQubGF5ZXIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGlsZXNldDogc291cmNlQ29tcG9uZW50LnRpbGVzZXQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcm93OiBzb3VyY2VDb21wb25lbnQucm93LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbHVtbjogc291cmNlQ29tcG9uZW50LmNvbHVtblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc291cmNlUHJvcGVydHkgPT09ICd0cmFuc2Zvcm1Db21wb25lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybUNvbXBvbmVudChuZXcgVHJhbnNmb3JtKHNvdXJjZUNvbXBvbmVudC54LCBzb3VyY2VDb21wb25lbnQueSwgc291cmNlQ29tcG9uZW50LndpZHRoLCBzb3VyY2VDb21wb25lbnQuaGVpZ2h0KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzb3VyY2VQcm9wZXJ0eSA9PT0gJ2NhbWVyYUNvbXBvbmVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYTogQ2FtZXJhID0gbmV3IENhbWVyYSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnZpZXdwb3J0ID0gbmV3IFRyYW5zZm9ybShzb3VyY2VDb21wb25lbnQuY2FtZXJhLnZpZXdwb3J0LngsIHNvdXJjZUNvbXBvbmVudC5jYW1lcmEudmlld3BvcnQueSwgc291cmNlQ29tcG9uZW50LmNhbWVyYS52aWV3cG9ydC53aWR0aCwgc291cmNlQ29tcG9uZW50LmNhbWVyYS52aWV3cG9ydC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEubWF4ID0gbmV3IFBvaW50KHNvdXJjZUNvbXBvbmVudC5jYW1lcmEubWF4LngsIHNvdXJjZUNvbXBvbmVudC5jYW1lcmEubWF4LnkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmFkZENvbXBvbmVudChuZXcgQ2FtZXJhQ29tcG9uZW50KGNhbWVyYSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzb3VyY2VQcm9wZXJ0eSA9PT0gJ3RhZ0NvbXBvbmVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5LmFkZENvbXBvbmVudChuZXcgVGFnQ29tcG9uZW50KHNvdXJjZUNvbXBvbmVudC5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNvdXJjZVByb3BlcnR5ID09PSAnY29sbGlkZXJDb21wb25lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5hZGRDb21wb25lbnQobmV3IENvbGxpZGVyQ29tcG9uZW50KHNvdXJjZUNvbXBvbmVudC50cmFuc2Zvcm0sIHNvdXJjZUNvbXBvbmVudC5pc1RyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExvZ2dlci5pbmZvKGBTY2VuZSBlbnRpdHkgJHtlbnRpdHlNYW5pZmVzdC5pZH0gcGFyc2VkYCwgRW50aXR5TWFuYWdlci5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHBhcnNlZEVudGl0aWVzLnB1c2goZW50aXR5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgRW50aXR5TWFuYWdlci5nZXRJbnN0YW5jZSgpLmVudGl0aWVzID0gcGFyc2VkRW50aXRpZXM7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEVudGl0eU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5lbnRpdGllc1swXS5nZXRDb21wb25lbnQ8VGFnQ29tcG9uZW50PihUYWdDb21wb25lbnQpKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmluZm8oYEZpbmlzaGVkIHBhcnNpbmcgJHtwYXJzZWRFbnRpdGllcy5sZW5ndGh9IGVudGl0aWVzYCwgRW50aXR5TWFuYWdlci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRPRE86IE1vdmUgdG8gdGhlIGVkaXRvci5cclxuICAgICAqIFxyXG4gICAgICogUGFja3MgdGhlIGVudGl0aWVzIHdpdGhpbiBlYWNoIGNvbXBvbmVudCBtYW5hZ2VyIGludG8gYSBzaW5nbGUgYXJyYXkgZm9yIHNhdmluZyB0byB0aGUgc2NlbmUganNvbiBmaWxlLlxyXG4gICAgICogQHJldHVybnMgVGhlIGxpc3Qgb2YgcGFja2VkIGVudGl0aWVzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcGFja0VudGl0aWVzKCk6IGFueVtdIHsgLy8gRW50aXR5TWFuaWZlc3RcclxuICAgICAgICAvLyBsZXQgZW50aXR5Q29uZmlnczogRW50aXR5W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gRW50aXR5TWFuYWdlci5nZXRJbnN0YW5jZSgpLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgZW50aXR5Q29uZmlnOiBhbnkgPSB7fTtcclxuXHJcbiAgICAgICAgLy8gICAgIENvbnN0YW50cy5jb21wb25lbnRUeXBlcy5mb3JFYWNoKChjb21wb25lbnRUeXBlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgY29tcG9uZW50SW5zdGFuY2U6IENvbXBvbmVudCA9IGVudGl0eS5nZXRDb21wb25lbnQoY29tcG9uZW50VHlwZSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNvbXBvbmVudEluc3RhbmNlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZW50aXR5Q29uZmlnW2NvbXBvbmVudFR5cGUubmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGNvbXBvbmVudFR5cGUubmFtZS5zbGljZSgxKV0gPSBjb21wb25lbnRJbnN0YW5jZTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXMoZW50aXR5Q29uZmlnKS5sZW5ndGggIT09IDAgJiYgZW50aXR5Q29uZmlnLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAvLyAgICAgICAgIGVudGl0eUNvbmZpZ3MucHVzaChlbnRpdHlDb25maWcpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBlbnRpdHlDb25maWdzO1xyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbXBvbmVudHMoZW50aXR5OiBFbnRpdHkpOiBhbnlbXSB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudHM6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgIE1hbmFnZXJGYWN0b3J5Lm1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZXIubWFwW2VudGl0eS5pZF0pIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChtYW5hZ2VyLmluc3RhbmNlc1ttYW5hZ2VyLm1hcFtlbnRpdHkuaWRdXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uL3NjZW5lL2VudGl0eSc7XHJcbmltcG9ydCB7IFNjcmlwdENvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIEVudGl0eUNvbXBvbmVudE1hcCB7XHJcbiAgICBbZW50aXR5SWQ6IHN0cmluZ106IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1hbmFnZXI8VENvbXBvbmVudD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29tcG9uZW50IGluc3RhbmNlIGZvciB0aGUgc3BlY2lmaWMgbWFuYWdlciB0aGF0IGluaGVyaXRzIHRoZSBjb21wb25lbnQgbWFuYWdlci4gRm9yIGV4YW1wbGVcclxuICAgICAqIGlmIHRoZSBUYWdDb21wb25lbnRNYW5hZ2VyIGlzIHRoZSBpbmhlcnRpbmcgdGhlbiB0aGlzIHdpbGwgY29udGFpbiBhbGwgb2YgdGhlIHRhZyBjb21wb25lbnQgaW5zdGFuY2VzLlxyXG4gICAgICovXHJcbiAgICBpbnN0YW5jZXM6IFRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbXBvbmVudCBpbnN0YW5jZSBmb3IgdGhlIHNwZWNpZmljIG1hbmFnZXIgdGhhdCBpbmhlcml0cyB0aGUgY29tcG9uZW50IG1hbmFnZXIuIEZvciBleGFtcGxlXHJcbiAgICAgKiBpZiB0aGUgVGFnQ29tcG9uZW50TWFuYWdlciBpcyB0aGUgaW5oZXJ0aW5nIHRoZW4gdGhpcyB3aWxsIGNvbnRhaW4gYWxsIG9mIHRoZSB0YWcgY29tcG9uZW50IGluc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgZW50aXRpZXM6IEVudGl0eVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250YWlucyBhIG1hcCBiZXR3ZWVuIHRoZSBpZCBvZiBhbiBlbnRpdHkgYW5kIGFsbCBpdHMgYXNzb2NpYXRlZCBjb21wb25lbnQgdHlwZXMuXHJcbiAgICAgKi9cclxuICAgIG1hcDogRW50aXR5Q29tcG9uZW50TWFwID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcnlzIHRvIGFkZCB0aGUgaW5zdGFuY2Ugb2YgYSBjb21wb25lbnQgdG8gYW4gZW50aXR5LiBJZiB0aGUgY29tcG9uZW50IGFscmVhZHkgZXhpc3RzIGZvciB0aGUgZW50aXR5IGFuZCBleGNlcHRpb24gd2lsbCBiZSB0aHJvd24uXHJcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGVudGl0aWVzIG1heSBoYXZlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgc2NyaXB0IGNvbXBvbmVudC5cclxuICAgICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0byBhc3NvY2lhdGVkIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2l0aC5cclxuICAgICAqIEBwYXJhbSBjb21wb25lbnRJbnN0YW5jZSBUaGUgY29tcG9uZW50IGluc3RhbmNlIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBlbnRpdHkuXHJcbiAgICAgKi9cclxuICAgIGFkZENvbXBvbmVudEluc3RhbmNlKGVudGl0eTogRW50aXR5LCBjb21wb25lbnRJbnN0YW5jZTogVENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcFtlbnRpdHkuaWRdKSB7XHJcbiAgICAgICAgICAgIC8vIEVudGl0aWVzIGFyZSBhbGxvd2VkIHRvIGhhdmUgbXVsdGlwbGUgc2NyaXB0IGNvbXBvbmVudCBpbnN0YW5jZXMgc28gdGhlIGR1cGxpY2F0ZSBjb21wb25lbnQgY2hlY2sgZG9lcyBub3QgYXBwbHkgdG8gaW5zdGFuY2VzIG9mIHRoZSBzY3JpcHQgdHlwZS5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRJbnN0YW5jZSAhPT0gdHlwZW9mIFNjcmlwdENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihjb21wb25lbnRJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgWyR7KDxhbnk+Y29tcG9uZW50SW5zdGFuY2UpLmNvbnN0cnVjdG9yLm5hbWV9XTogWW91IGNhbid0IG5vdCBoYXZlIG11bHRpcGxlIGNvbXBvbmVudCBvZiB0aGUgc2FtZSB0eXBlIG9uIGVudGl0eSB1bmxlc3MgdGhhdCBjb21wb25lbnQgaXMgYSBzY3JpcHQuYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTdG9yZSB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpdGhpbiB0aGUgY3VycmVudCBtYW5hZ2VyLlxyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goY29tcG9uZW50SW5zdGFuY2UpO1xyXG4gICAgICAgIHRoaXMubWFwW2VudGl0eS5pZF0gPSB0aGlzLmluc3RhbmNlcy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlKGVudGl0eTogRW50aXR5KTogVENvbXBvbmVudCB8IG51bGwge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWFwW2VudGl0eS5pZF07XHJcblxyXG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEaXNwb3NlIG9mIHRoZSBlbnRpdHkgcmVmZXJlbmNlIGFuZCBhbnkgcmVsYXRlZCBkYXRhLiBDYWxsZWQgd2hlbiBhbiBlbnRpdHkgaXMgZGVzdHJveWVkLlxyXG4gICAgICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IHRvIGRpc3Bvc2Ugb2YgdGhlIHJlZmVyZW5jZXMgZm9yLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZShlbnRpdHk6IEVudGl0eSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTY3JpcHRDb21wb25lbnRNYW5hZ2VyJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1hcFtlbnRpdHkuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLnNwbGljZSh0aGlzLm1hcFtlbnRpdHkuaWRdKTtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1hcFtlbnRpdHkuaWRdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVudGl0eUluZGV4OiBudW1iZXIgPSB0aGlzLmVudGl0aWVzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGVudGl0eS5pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50aXR5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0aWVzLnNwbGljZShlbnRpdHlJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUaWxlc2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpbWFnZT86IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVzZXQgfSBmcm9tICcuLi8uLi9ncmFwaGljcy90aWxlc2V0JztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi8uLi9zY2VuZS9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZFNjZW5lUmV0dXJuIHtcclxuICAgIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcbiAgICBwdWJsaWMgdGlsZXNldHM6IEFycmF5PFRpbGVzZXQ+ID0gbmV3IEFycmF5KCk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgdGlsZXNldHM6IFRpbGVzZXRbXSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgICB0aGlzLnRpbGVzZXRzID0gdGlsZXNldHM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTeXN0ZW0gfSBmcm9tICcuLi9zeXN0ZW1zL3N5c3RlbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3lzdGVtTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN5c3RlbXM6IGFueVtdID0gW107XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlcihzeXN0ZW06IFN5c3RlbSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChTeXN0ZW1NYW5hZ2VyLnN5c3RlbXMuZmluZEluZGV4KHggPT4geC5uYW1lID09PSBzeXN0ZW0ubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIFN5c3RlbU1hbmFnZXIuc3lzdGVtcy5wdXNoKHN5c3RlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KHN5c3RlbU5hbWU6IHN0cmluZyk6IFN5c3RlbSB7XHJcbiAgICAgICAgcmV0dXJuIFN5c3RlbU1hbmFnZXIuc3lzdGVtcy5maW5kKHggPT4geC5uYW1lID09PSBzeXN0ZW1OYW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbGxpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNjcmlwdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi9jb3JlL21hbmFnZXItZmFjdG9yeSc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL3NjZW5lL2VudGl0eSc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgQ29sbGlzaW9uRGlyZWN0aW9uIH0gZnJvbSAnLi9jb2xsaXNpb24tZGlyZWN0aW9uJztcclxuXHJcbmltcG9ydCB7IFN5c3RlbSB9IGZyb20gJy4uLy4uL3N5c3RlbXMvc3lzdGVtJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TWFuYWdlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50LW1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpc2lvblN5c3RlbSBleHRlbmRzIFN5c3RlbSB7XHJcblx0cHVibGljIG5hbWU6IHN0cmluZyA9ICdjb2xsaXNpb24nO1xyXG5cclxuXHRwdWJsaWMgY3VycmVudEVudGl0eUNvbGxpc2lvbnM6IE1hcDxhbnksIGFueVtdPiA9IG5ldyBNYXAoKTtcclxuXHJcblx0cHVibGljIGRpc3Bvc2UoZW50aXR5OiBFbnRpdHkpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmhhcyhlbnRpdHkuaWQpKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEVudGl0eUNvbGxpc2lvbnMuZGVsZXRlKGVudGl0eS5pZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5mb3JFYWNoKCh2YWx1ZXM6IGFueVtdLCBrZXk6IG51bWJlcikgPT4ge1xyXG5cdFx0XHRsZXQgdmFsdWVJbmRleDogYW55ID0gdmFsdWVzLmluZGV4T2YoZW50aXR5LmlkKTtcclxuXHJcblx0XHRcdGlmICh2YWx1ZUluZGV4ICE9PSAtMSkge1xyXG5cdFx0XHRcdHZhbHVlcy5zcGxpY2UodmFsdWVJbmRleCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHRcdGxldCBtYW5hZ2VyOiBDb21wb25lbnRNYW5hZ2VyPENvbGxpZGVyQ29tcG9uZW50PiA9IE1hbmFnZXJGYWN0b3J5LmdldChDb2xsaWRlckNvbXBvbmVudC5uYW1lKTtcclxuXHRcdFxyXG5cdFx0Ly8gVE9ETzogUmVwbGFjZSB0aGlzIHdpdGggYSBtb3JlIHJvYnVzdCBjb2xsaXNpb24gZGVjdGlvbiBpbXBsZW1lbnRhdGlvbi4gRm9yIG5vdyB0aGlzIGlzIGZpbmUgZm9yIHRoZSBudW1iZXIgb2Ygc3ByaXRlcyB3ZSBhcmUgcmVuZGVyaW5nIHdpdGggY29sbGlkZXJzLlxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtYW5hZ2VyLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGlpID0gaSArIDE7IGlpIDwgbWFuYWdlci5lbnRpdGllcy5sZW5ndGg7IGlpKyspIHtcclxuXHRcdFx0XHR0aGlzLnJlc29sdmVDb2xsaXNpb24obWFuYWdlci5lbnRpdGllc1tpXSwgbWFuYWdlci5lbnRpdGllc1tpaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlc29sdmVDb2xsaXNpb24oc291cmNlRW50aXR5OiBFbnRpdHksIHRhcmdldEVudGl0eTogRW50aXR5KTogQ29sbGlzaW9uRGlyZWN0aW9uIHwgdW5kZWZpbmVkIHtcclxuXHRcdGlmICghc291cmNlRW50aXR5IHx8ICF0YXJnZXRFbnRpdHkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzb3VyY2VDb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBzb3VyY2VFbnRpdHkuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KSBhcyBDb2xsaWRlckNvbXBvbmVudDtcclxuXHRcdGxldCB0YXJnZXRDb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSB0YXJnZXRFbnRpdHkuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KSBhcyBDb2xsaWRlckNvbXBvbmVudDtcclxuXHJcblx0XHRsZXQgc291cmNlVHJhbnNmb3JtQ29tcG9uZW50OiBUcmFuc2Zvcm1Db21wb25lbnQgPSAoc291cmNlRW50aXR5LmdldENvbXBvbmVudChUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFRyYW5zZm9ybUNvbXBvbmVudCk7XHJcblx0XHRsZXQgdGFyZ2V0VHJhbnNmb3JtQ29tcG9uZW50OiBUcmFuc2Zvcm1Db21wb25lbnQgPSAodGFyZ2V0RW50aXR5LmdldENvbXBvbmVudChUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFRyYW5zZm9ybUNvbXBvbmVudCk7XHJcblxyXG5cdFx0aWYgKCFzb3VyY2VUcmFuc2Zvcm1Db21wb25lbnQgfHwgIXRhcmdldFRyYW5zZm9ybUNvbXBvbmVudCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnW0VOVElUWSBOTyBMT05HRVIgRVhJU1RTIEFCT1JUSU5HIENPTExJU0lPTiBDSEVDS10nKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzb3VyY2VUcmFuc2Zvcm06IFRyYW5zZm9ybSA9IHNvdXJjZVRyYW5zZm9ybUNvbXBvbmVudC50cmFuc2Zvcm07XHJcblx0XHRsZXQgdGFyZ2V0VHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSB0YXJnZXRUcmFuc2Zvcm1Db21wb25lbnQudHJhbnNmb3JtO1xyXG5cclxuXHRcdC8vIGdldCB0aGUgdmVjdG9ycyB0byBjaGVjayBhZ2FpbnN0XHJcblx0XHRsZXQgdlggPSBzb3VyY2VUcmFuc2Zvcm0ueCArIHNvdXJjZVRyYW5zZm9ybS53aWR0aCAvIDIgLSAodGFyZ2V0VHJhbnNmb3JtLnggKyB0YXJnZXRUcmFuc2Zvcm0ud2lkdGggLyAyKTtcclxuXHRcdGxldCB2WSA9IHNvdXJjZVRyYW5zZm9ybS55ICsgc291cmNlVHJhbnNmb3JtLmhlaWdodCAvIDIgLSAodGFyZ2V0VHJhbnNmb3JtLnkgKyB0YXJnZXRUcmFuc2Zvcm0uaGVpZ2h0IC8gMik7XHJcblxyXG5cdFx0Ly8gSGFsZiB3aWR0aHMgYW5kIGhhbGYgaGVpZ2h0cyBvZiB0aGUgb2JqZWN0c1xyXG5cdFx0bGV0IHd3MiA9IHNvdXJjZVRyYW5zZm9ybS53aWR0aCAvIDIgKyB0YXJnZXRUcmFuc2Zvcm0ud2lkdGggLyAyO1xyXG5cdFx0bGV0IGhoMiA9IHNvdXJjZVRyYW5zZm9ybS5oZWlnaHQgLyAyICsgdGFyZ2V0VHJhbnNmb3JtLmhlaWdodCAvIDI7XHJcblxyXG5cdFx0bGV0IGNvbERpciA9IENvbGxpc2lvbkRpcmVjdGlvbi5OT05FO1xyXG5cclxuXHRcdC8vIElmIHRoZSB4IGFuZCB5IHZlY3RvciBhcmUgbGVzcyB0aGFuIHRoZSBoYWxmIHdpZHRoIG9yIGhhbGYgaGVpZ2h0LCB0aGV5IHdlIG11c3QgYmUgaW5zaWRlIHRoZSBvYmplY3QsIGNhdXNpbmcgYSBjb2xsaXNpb24uXHJcblx0XHRpZiAoTWF0aC5hYnModlgpIDwgd3cyICYmIE1hdGguYWJzKHZZKSA8IGhoMikge1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudEVudGl0eUNvbGxpc2lvbnMuaGFzKHNvdXJjZUVudGl0eS5pZCkgfHwgdGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5nZXQoc291cmNlRW50aXR5LmlkKSEuaW5kZXhPZih0YXJnZXRFbnRpdHkuaWQpID09PSAtMSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5oYXMoc291cmNlRW50aXR5LmlkKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5zZXQoc291cmNlRW50aXR5LmlkLCBbdGFyZ2V0RW50aXR5LmlkXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5nZXQoc291cmNlRW50aXR5LmlkKSEucHVzaCh0YXJnZXRFbnRpdHkuaWQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gT25seSByZXNvbHZlIHRoZSBjb2xsaXNpb24gaWYgYm90aCB0aGUgc291cmNlIGFuZCB0YXJnZXQgY29sbGlkZXJzIGFyZSBub3QgdHJpZ2dlcnMuXHJcblx0XHRcdFx0aWYgKCFzb3VyY2VDb2xsaWRlci5pc1RyaWdnZXIgJiYgIXRhcmdldENvbGxpZGVyLmlzVHJpZ2dlcikge1xyXG5cdFx0XHRcdFx0Ly8gZmlndXJlcyBvdXQgb24gd2hpY2ggc2lkZSB3ZSBhcmUgY29sbGlkaW5nICh0b3AsIGJvdHRvbSwgbGVmdCwgb3IgcmlnaHQpXHJcblx0XHRcdFx0XHRsZXQgb1ggPSB3dzIgLSBNYXRoLmFicyh2WCk7XHJcblx0XHRcdFx0XHRsZXQgb1kgPSBoaDIgLSBNYXRoLmFicyh2WSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gVE9ETzogRW5zdXJlIHdlIGdldCB0aGUgY29sbGlzaW9uIGRpcmVjdGlvbiBldmVuIGZvciB0cmlnZ2Vycy5cclxuXHRcdFx0XHRcdGlmIChvWCA+PSBvWSkge1xyXG5cdFx0XHRcdFx0XHRpZiAodlkgPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sRGlyID0gQ29sbGlzaW9uRGlyZWN0aW9uLlRPUDtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VUcmFuc2Zvcm0ueSArPSBvWTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xEaXIgPSBDb2xsaXNpb25EaXJlY3Rpb24uQk9UVE9NO1xyXG5cdFx0XHRcdFx0XHRcdHNvdXJjZVRyYW5zZm9ybS55IC09IG9ZO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAodlggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sRGlyID0gQ29sbGlzaW9uRGlyZWN0aW9uLkxFRlQ7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlVHJhbnNmb3JtLnggKz0gb1g7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0Y29sRGlyID0gQ29sbGlzaW9uRGlyZWN0aW9uLlJJR0hUO1xyXG5cdFx0XHRcdFx0XHRcdHNvdXJjZVRyYW5zZm9ybS54IC09IG9YO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdUUklHR0VSIEVOVEVSJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coc291cmNlRW50aXR5KTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRhcmdldEVudGl0eSk7XHJcblxyXG5cdFx0XHRcdFx0c291cmNlRW50aXR5LmdldFNjcmlwdEluc3RhbmNlcygpLmZvckVhY2goKHNjcmlwdEluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZSAmJiBzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlcikge1xyXG5cdFx0XHRcdFx0XHRcdHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlckVudGVyKHRhcmdldEVudGl0eSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YXJnZXRFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHNjcmlwdEluc3RhbmNlLmluc3RhbmNlICYmIHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlckVudGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIoc291cmNlRW50aXR5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdUUklHR0VSIFNUQVknKTtcclxuXHJcblx0XHRcdFx0c291cmNlRW50aXR5LmdldFNjcmlwdEluc3RhbmNlcygpLmZvckVhY2goKHNjcmlwdEluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2UgJiYgc2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyRW50ZXIhKSB7XHJcblx0XHRcdFx0XHRcdHNjcmlwdEluc3RhbmNlLmluc3RhbmNlLm9uVHJpZ2dlclN0YXkodGFyZ2V0RW50aXR5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YXJnZXRFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZSAmJiBzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlciEpIHtcclxuXHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyU3RheShzb3VyY2VFbnRpdHkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5oYXMoc291cmNlRW50aXR5LmlkKSAmJiB0aGlzLmN1cnJlbnRFbnRpdHlDb2xsaXNpb25zLmdldChzb3VyY2VFbnRpdHkuaWQpIS5pbmRleE9mKHRhcmdldEVudGl0eS5pZCkgIT09IC0xKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50RW50aXR5Q29sbGlzaW9ucy5kZWxldGUoc291cmNlRW50aXR5LmlkKTtcclxuXHJcblx0XHRcdFx0KDxhbnk+TWFuYWdlckZhY3RvcnkuZ2V0KFNjcmlwdENvbXBvbmVudC5uYW1lKSkuaW5zdGFuY2VzO1xyXG5cclxuXHRcdFx0XHRzb3VyY2VFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZSAmJiBzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlciEpIHtcclxuXHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyTGVhdmUodGFyZ2V0RW50aXR5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YXJnZXRFbnRpdHkuZ2V0U2NyaXB0SW5zdGFuY2VzKCkuZm9yRWFjaCgoc2NyaXB0SW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRcdGlmIChzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZSAmJiBzY3JpcHRJbnN0YW5jZS5pbnN0YW5jZS5vblRyaWdnZXJFbnRlciEpIHtcclxuXHRcdFx0XHRcdFx0c2NyaXB0SW5zdGFuY2UuaW5zdGFuY2Uub25UcmlnZ2VyTGVhdmUoc291cmNlRW50aXR5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb2xEaXI7IC8vIElmIHlvdSBuZWVkIGluZm8gb2YgdGhlIHNpZGUgdGhhdCBjb2xsaWRlZFxyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgZW51bSBDb2xsaXNpb25EaXJlY3Rpb24ge1xyXG4gICAgTk9ORSA9IDAsXHJcbiAgICBUT1AgPSAxLFxyXG4gICAgUklHSFQgPSAyLFxyXG4gICAgQk9UVE9NID0gMyxcclxuICAgIExFRlQgPSA0XHJcbn0iLCIvLyBpbXBvcnQgeyBTY3JpcHRDb21wb25lbnRNYW5hZ2VyIH0gZnJvbSAnY29tcG9uZW50cy9tYW5hZ2Vycy9TY3JpcHRDb21wb25lbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgU2NyaXB0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL3NjZW5lL2VudGl0eSc7XHJcblxyXG5pbXBvcnQgeyBNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uL2NvcmUvbWFuYWdlci1mYWN0b3J5JztcclxuaW1wb3J0IHsgU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW0ge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdzY3JpcHQnO1xyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbGV0IHNjcmlwdENvbXBvbmVudE1hbmFnZXIgPSBNYW5hZ2VyRmFjdG9yeS5nZXQoU2NyaXB0Q29tcG9uZW50Lm5hbWUpIGFzIFNjcmlwdENvbXBvbmVudE1hbmFnZXI7XHJcblxyXG4gICAgICAgIC8vIHNjcmlwdENvbXBvbmVudE1hbmFnZXIuZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5OiBFbnRpdHkpID0+IHtcclxuICAgICAgICAvLyAgICAgbGV0IHNjcmlwdENvbXBvbmVudCA9IHNjcmlwdENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoZW50aXR5KSBhcyBTY3JpcHRDb21wb25lbnQ7XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAoIXNjcmlwdENvbXBvbmVudC5pbnN0YW5jZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgc2NyaXB0Q29tcG9uZW50Lmluc3RhbmNlID0gbmV3ICg8YW55PnNjcmlwdENvbXBvbmVudCkuc2NyaXRhYmxlRW50aXR5KCk7XHJcbiAgICAgICAgLy8gICAgICAgICBzY3JpcHRDb21wb25lbnQuaW5zdGFuY2Uub25DcmVhdGUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgc2NyaXB0Q29tcG9uZW50Lmluc3RhbmNlLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoZW50aXR5OiBFbnRpdHkpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4vYmFzZS1yZW5kZXJlcic7XHJcbmltcG9ydCBNYXQ0IGZyb20gJy4vTWF0NCc7XHJcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tICcuL3RpbGVzZXQnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lL3NjZW5lJztcclxuXHJcbmNsYXNzIERyYXdhYmxlIHtcclxuICAgIHB1YmxpYyBidWZmZXI/OiBXZWJHTEJ1ZmZlciB8IG51bGw7XHJcbiAgICBwdWJsaWMgcG9zaXRpb25zPzogbnVtYmVyW107XHJcbn1cclxuXHJcbmNsYXNzIEltYWdlIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJHTFJlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcclxuICAgIHB1YmxpYyBzY2VuZTogU2NlbmU7XHJcblxyXG4gICAgcHVibGljIGVuZ2luZUNhbnZhcyE6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIHB1YmxpYyB0aWxlc2V0czogVGlsZXNldFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgMkQgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHRoZSBkZWZhdWx0IGNhbnZhcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnRleHQhOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgcHVibGljIHNoYWRlclBhdGg6IHN0cmluZyA9ICcvc2hhZGVycyc7XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJvZ3JhbSE6IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBwcml2YXRlIF9pbWFnZVByb2dyYW0hOiBXZWJHTFByb2dyYW07XHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24hOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3JBdHRyaWJ1dGVMb2NhdGlvbiE6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9yZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uITogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3JVbmlmb3JtTG9jYXRpb24hOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF90cmFuc2xhdGlvblVuaWZvcm1Mb2NhdGlvbiE6IFdlYkdMVW5pZm9ybUxvY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgX3JvdGF0aW9uVW5pZm9ybUxvY2F0aW9uITogV2ViR0xVbmlmb3JtTG9jYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBfc2NhbGVVbmlmb3JtTG9jYXRpb24hOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9tYXRyaXhVbmlmb3JtTG9jYXRpb24hOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9kcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF92ZXJ0ZXhTaGFkZXJzOiBXZWJHTFNoYWRlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfZnJhZ21lbnRTaGFkZXJzOiBXZWJHTFNoYWRlcltdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfdGVzdFRyYW5zbGF0aW9uQW1vdW50OiBudW1iZXJbXSA9IFswLCAwLCAwXTsgLy8geCx5LHpcclxuXHJcbiAgICBwcml2YXRlIF90ZXN0Um90YXRpb25BbW91bnQ6IG51bWJlcltdID0gWzAsIDEsIDBdOyAvLyB4LHkselxyXG5cclxuICAgIHByaXZhdGUgX3Rlc3RTY2FsZUFtb3VudDogbnVtYmVyW10gPSBbMSwgMSwgMF07IC8veCx5LHpcclxuXHJcbiAgICBwcml2YXRlIF90ZXN0VHJhbnNsYXRlU3BlZWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xvckJ1ZmZlciE6IFdlYkdMQnVmZmVyIHwgbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogU2NlbmUsIHRpbGVzZXRzOiBUaWxlc2V0W10pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgdGhpcy50aWxlc2V0cyA9IHRpbGVzZXRzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZW5naW5lQ2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykhO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aHJvdyBcIldlYkdMIG5vdCBzdXBwb3J0ZWQuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuZW5naW5lQ2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IHZlcnRleHRTaGFkZXJTb3VyY2U6IHN0cmluZyA9IGF3YWl0IChhd2FpdCBmZXRjaChgJHt0aGlzLnNoYWRlclBhdGh9L3ZlcnRleC1zaGFkZXIuZ2xzbGApKS50ZXh0KCk7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50U2hhZGVyU291cmNlOiBzdHJpbmcgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7dGhpcy5zaGFkZXJQYXRofS9mcmFnbWVudC1zaGFkZXIuZ2xzbGApKS50ZXh0KCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IFJlZmFjdG9yIGludG8gYmFzaWMgaGVscGVyIG1ldGhvZC5cclxuICAgICAgICBsZXQgdmVydGV4dFNoYWRlcjogV2ViR0xTaGFkZXIgPSB0aGlzLl9jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LlZFUlRFWF9TSEFERVIsIHZlcnRleHRTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgIGxldCBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXIgPSB0aGlzLl9jcmVhdGVTaGFkZXIodGhpcy5jb250ZXh0LkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcHJvZ3JhbSBhbmQgbGluayB0aGUgc2hhZGVycy5cclxuICAgICAgICB0aGlzLl9wcm9ncmFtID0gdGhpcy5fY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXh0U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XHJcblxyXG4gICAgICAgIC8vIExvb2sgd2hlcmUgcG9zaXRpb24gZGF0YSB3aWxsIGdvLlxyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmNvbnRleHQuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5fcHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuICAgICAgICB0aGlzLl9jb2xvckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICdhX2NvbG9yJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbG9yQnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2NvbG9yQnVmZmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgbmV3IFVpbnQ4QXJyYXkoW1xyXG4gICAgICAgICAgICAyNTUsIDI1NSwgMjU1LFxyXG4gICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwXHJcbiAgICAgICAgXSksIHRoaXMuY29udGV4dC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAgIC8vIExvb2tzIHVwIHVuaWZvcm1zIGZvciBzaGFkZXIuXHJcbiAgICAgICAgLy8gRG8gdGhpcyBvbiBpbml0IG5vdCBpbiB0aGUgcmVuZGVyIGxvb3AuXHJcbiAgICAgICAgdGhpcy5fY29sb3JVbmlmb3JtTG9jYXRpb24gPSB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICd1X2NvbG9yJykhO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdXRpb25Vbmlmb3JtTG9jYXRpb24gPSB0aGlzLmNvbnRleHQuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sICd1X3Jlc29sdXRpb24nKSE7XHJcbiAgICAgICAgdGhpcy5fbWF0cml4VW5pZm9ybUxvY2F0aW9uID0gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLl9wcm9ncmFtLCAndV9tYXRyaXgnKSE7XHJcblxyXG4gICAgICAgIHRoaXMuX2NyZWF0ZURyYXdhYmxlKFtcclxuICAgICAgICAgICAgMTAsIDIwLCAwLCAvLyB0cmkgMSB2ZXJ0IDFcclxuICAgICAgICAgICAgODAsIDIwLCAwLCAvLyB0cmkgMSB2ZXJ0IDJcclxuICAgICAgICAgICAgMTAsIDMwLCAwLCAvLyB0cmkgMSB2ZXJ0IDNcclxuICAgICAgICAgICAgMTAsIDMwLCAwLFxyXG4gICAgICAgICAgICA4MCwgMjAsIDAsXHJcbiAgICAgICAgICAgIDgwLCAzMCwgMFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLl9jcmVhdGVEcmF3YWJsZShbXHJcbiAgICAgICAgLy8gICAgIDEwMCwgMjAwLCAwLFxyXG4gICAgICAgIC8vICAgICA4MDAsIDIwMCwgMCxcclxuICAgICAgICAvLyAgICAgMTAwLCAzMDAsIDAsXHJcbiAgICAgICAgLy8gICAgIDEwMCwgMzAwLCAwLFxyXG4gICAgICAgIC8vICAgICA4MDAsIDIwMCwgMCxcclxuICAgICAgICAvLyAgICAgODAwLCAzMDAsIDBcclxuICAgICAgICAvLyBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVEcmF3YWJsZShwb3NpdGlvbnM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRyYXdhYmxlOiBEcmF3YWJsZSA9IG5ldyBEcmF3YWJsZSgpO1xyXG5cclxuICAgICAgICBkcmF3YWJsZS5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XHJcbiAgICAgICAgZHJhd2FibGUuYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCBkcmF3YWJsZS5idWZmZXIpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5idWZmZXJEYXRhKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoZHJhd2FibGUucG9zaXRpb25zKSwgdGhpcy5jb250ZXh0LlNUQVRJQ19EUkFXKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZHJhd2FibGVzLnB1c2goZHJhd2FibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NvbnZlcnRBbmdsZVVuaXRDaXJjbGVDb29yZGluYXRlcyhhbmdsZUluRGVncmVlczogbnVtYmVyKTogYW55IHtcclxuICAgICAgICB2YXIgYW5nbGVJblJhZGlhbnMgPSBhbmdsZUluRGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgICAgIGxldCBzaW5lID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgICAgIGxldCBjb3NpbmUgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNpbmU6IHNpbmUsXHJcbiAgICAgICAgICAgIGNvc2luZTogY29zaW5lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlSW5EZWdyZXNzOiBudW1iZXIgPSAwO1xyXG4gICAgYW5nbGVJblJhZGlhbnM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tXRUJHTF06IERyYXcnKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRlc3QgdHJhbnNsYXRlXHJcbiAgICAgICAgLy8gdGhpcy5fdGVzdFRyYW5zbGF0aW9uQW1vdW50WzBdICs9IHRoaXMuX3Rlc3RUcmFuc2xhdGVTcGVlZCAqIFRpbWUuZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmFuZ2xlSW5EZWdyZXNzICs9IDEwICogVGltZS5kZWx0YVRpbWU7XHJcblxyXG4gICAgICAgIC8vIFBvaW50cyBvbiBhIHVuaXQgY2lyY2xlIGFyZSBjYWxsZWQgc2luZSBhbmQgY29zaW5lIChzaW5lID0geCkgKGNvc2luZSA9IHkpLlxyXG4gICAgICAgIGxldCB1bml0Q2lyY2xlQ29vcmRpbmF0ZXM6IGFueSA9IHRoaXMuX2NvbnZlcnRBbmdsZVVuaXRDaXJjbGVDb29yZGluYXRlcyh0aGlzLmFuZ2xlSW5EZWdyZXNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGVzdFJvdGF0aW9uQW1vdW50WzBdID0gdW5pdENpcmNsZUNvb3JkaW5hdGVzLnNpbmU7XHJcbiAgICAgICAgdGhpcy5fdGVzdFJvdGF0aW9uQW1vdW50WzFdID0gdW5pdENpcmNsZUNvb3JkaW5hdGVzLmNvc2luZTtcclxuXHJcbiAgICAgICAgLy8gVGVsbHMgV2ViR0wgdG8gY29udmVydCB0aGUgY2xpcCBzcGFjZSB2YWx1ZXMgd2Ugc2V0IGdsX3Bvc2l0aW9uIHRvIGluIHRoZSB2ZXJ0ZXh0IHNoYWRlciBiYWNrIGludG8gcGl4ZWxzIChzY3JlZW4gc3BhY2UpLlxyXG4gICAgICAgIC8vIC0xIG1hcHMgdG8gMCBhbmQgMSBtYXBzIHRvIHRoZSBjYW52YXMgd2lkdGggc2FtZSBnb2VzIGZvciB0aGUgeS1heGlzLlxyXG4gICAgICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCgwLCAwLCB0aGlzLmVuZ2luZUNhbnZhcy53aWR0aCwgdGhpcy5lbmdpbmVDYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNhbnZhcyBieSBtYWtpbmcgaXQgdHJhbnNwYXJlbnQuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyQ29sb3IoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyKHRoaXMuY29udGV4dC5DT0xPUl9CVUZGRVJfQklUKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnVzZVByb2dyYW0odGhpcy5fcHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIC8vIFRyYW5zZm9ybSBmcm9tIGNsaXAgc3BhY2UgYmFjayBpbnRvIHBpeGVscyBmb3IgcG9zaXRpb25hbCBkYXRhLlxyXG4gICAgICAgIHRoaXMuY29udGV4dC51bmlmb3JtMmYodGhpcy5fcmVzb2x1dGlvblVuaWZvcm1Mb2NhdGlvbiwgdGhpcy5lbmdpbmVDYW52YXMud2lkdGgsIHRoaXMuZW5naW5lQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCB0aGUgZHJhd2FibGVzIHRvIHJlbmRlci5cclxuICAgICAgICB0aGlzLl9kcmF3YWJsZXMuZm9yRWFjaCgoZHJhd2FibGU6IERyYXdhYmxlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFNob3VsZCB0aGlzIGJlIGRvbmUgaW4gZWFjaCBpdGVyYXRpb24/IE9yIGJlZm9yZT9cclxuICAgICAgICAgICAgLy8gRW5hYmxlIHBvc2l0aW9uIGF0dHJpYnV0ZSBpbiB2ZXJ0ZXh0IHNoYWRlci4gU28gV2ViR0wgY2FuIHVzZSB0aGUgZGF0YSB3ZSBzZXQgaW4gdGhlIEFSUkFZX0JVRkZFUi5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX3Bvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGhpcy5jb250ZXh0LkFSUkFZX0JVRkZFUiwgZHJhd2FibGUuYnVmZmVyISk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2l6ZTogbnVtYmVyID0gMzsgLy8gMiBjb21wb25lbnRzIHBlciBpdGVyYXRpb24gLT4gMyBmb3Igb3J0aG9ncmFwaGljLlxyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuY29udGV4dC5GTE9BVDsgLy8gdGhlIGRhdGEgaXMgMzJiaXQgZmxvYXRzXHJcbiAgICAgICAgICAgIGxldCBub3JtYWxpemU6IGJvb2xlYW4gPSBmYWxzZTsgLy8gZG9uJ3Qgbm9ybWFsaXplIHRoZSBkYXRhXHJcbiAgICAgICAgICAgIGxldCBzdHJpZGU6IG51bWJlciA9IDA7IC8vIDAgPSBtb3ZlIGZvcndhcmQgc2l6ZSAqIHNpemVvZih0eXBlKSBlYWNoIGl0ZXJhdGlvbiB0byBnZXQgdGhlIG5leHQgcG9zaXRpb25cclxuICAgICAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDsgLy8gc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyXHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fcG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBTaG91bGQgdGhpcyBiZSBkb25lIGluIGVhY2ggaXRlcmF0aW9uPyBPciBiZWZvcmU/XHJcbiAgICAgICAgICAgIC8vIEVuYWJsZSBwb3NpdGlvbiBhdHRyaWJ1dGUgaW4gdmVydGV4dCBzaGFkZXIuIFNvIFdlYkdMIGNhbiB1c2UgdGhlIGRhdGEgd2Ugc2V0IGluIHRoZSBBUlJBWV9CVUZGRVIuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLl9jb2xvckF0dHJpYnV0ZUxvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIHRoaXMuX2NvbG9yQnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjU2l6ZTogbnVtYmVyID0gMzsgLy8gMiBjb21wb25lbnRzIHBlciBpdGVyYXRpb24gLT4gMyBmb3Igb3J0aG9ncmFwaGljLlxyXG4gICAgICAgICAgICBsZXQgY1R5cGUgPSB0aGlzLmNvbnRleHQuVU5TSUdORURfQllURTsgLy8gdGhlIGRhdGEgaXMgMzJiaXQgZmxvYXRzXHJcbiAgICAgICAgICAgIGxldCBjTm9ybWFsaXplOiBib29sZWFuID0gZmFsc2U7IC8vIGRvbid0IG5vcm1hbGl6ZSB0aGUgZGF0YVxyXG4gICAgICAgICAgICBsZXQgY1N0cmlkZTogbnVtYmVyID0gMDsgLy8gMCA9IG1vdmUgZm9yd2FyZCBzaXplICogc2l6ZW9mKHR5cGUpIGVhY2ggaXRlcmF0aW9uIHRvIGdldCB0aGUgbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgY09mZnNldDogbnVtYmVyID0gMDsgLy8gc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYnVmZmVyXHJcbiAgICBcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fY29sb3JBdHRyaWJ1dGVMb2NhdGlvbiwgY1NpemUsIGNUeXBlLCBjTm9ybWFsaXplLCBjU3RyaWRlLCBjT2Zmc2V0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBTZXQgdW5pZm9ybXNcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnVuaWZvcm00Zih0aGlzLl9jb2xvclVuaWZvcm1Mb2NhdGlvbiwgMSwgMSwgMSwgMSk7IC8vIGNvbG9yXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgbGVmdCA9IDA7XHJcbiAgICAgICAgICAgIC8vIHZhciByaWdodCA9IHRoaXMuY29udGV4dC5jYW52YXMud2lkdGg7XHJcbiAgICAgICAgICAgIC8vIHZhciBib3R0b20gPSB0aGlzLmNvbnRleHQuY2FudmFzLmhlaWdodDtcclxuICAgICAgICAgICAgLy8gdmFyIHRvcCA9IDA7XHJcbiAgICAgICAgICAgIC8vIHZhciBuZWFyID0gNDAwO1xyXG4gICAgICAgICAgICAvLyB2YXIgZmFyID0gLTQwMDtcclxuICAgICAgICAgICAgLy8gdmFyIG1hdHJpeCA9IE1hdDQub3J0aG9ncmFwaGljKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXRyaXggPSBNYXQ0LnByb2plY3Rpb24odGhpcy5jb250ZXh0LmNhbnZhcy53aWR0aCwgdGhpcy5jb250ZXh0LmNhbnZhcy5oZWlnaHQsIDQwMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBUaGlzIHdhcyBvbmx5IGNvbW1lbnRlZCBvdXQgdG8gZ2V0IHRoZSBidWlsZCB3b3JraW5nLlxyXG4gICAgICAgICAgICAvLyBtYXRyaXggPSBNYXQ0LnRyYW5zbGF0ZShtYXRyaXgsIHRoaXMuX3Rlc3RUcmFuc2xhdGlvbkFtb3VudFswXSwgdGhpcy5fdGVzdFRyYW5zbGF0aW9uQW1vdW50WzFdLCB0aGlzLl90ZXN0VHJhbnNsYXRpb25BbW91bnRbMl0pO1xyXG4gICAgICAgICAgICAvLyBtYXRyaXggPSBNYXQ0LnhSb3RhdGUobWF0cml4LCB0aGlzLmFuZ2xlSW5EZWdyZXNzICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAgIC8vIG1hdHJpeCA9IE1hdDQueVJvdGF0ZShtYXRyaXgsIHRoaXMuYW5nbGVJbkRlZ3Jlc3MgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAgICAgLy8gbWF0cml4ID0gTWF0NC56Um90YXRlKG1hdHJpeCwgdGhpcy5hbmdsZUluRGVncmVzcyAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICAvLyBtYXRyaXggPSBNYXQ0LnNjYWxlKG1hdHJpeCwgdGhpcy5fdGVzdFNjYWxlQW1vdW50WzBdLCB0aGlzLl90ZXN0U2NhbGVBbW91bnRbMV0sIHRoaXMuX3Rlc3RTY2FsZUFtb3VudFsyXSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGp1c3Qgb3JpZ2luLiBIb3cgZG9lcyB0aGlzIGFjdHVhbGx5IGFkanVzdCB0aGUgcm90YXRpb24gcG9pbnQ/IENhbid0IHNlZW0gdG8gZ2V0IGl0IHdvcmtpbmc/XHJcbiAgICAgICAgICAgIC8vIG1hdHJpeCA9IE1hdDQudHJhbnNsYXRlKG1hdHJpeCwgMTUwLCAxNTAsIDE1MCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudW5pZm9ybU1hdHJpeDRmdih0aGlzLl9tYXRyaXhVbmlmb3JtTG9jYXRpb24sIGZhbHNlLCBtYXRyaXgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByaW1pdGl2ZVR5cGU6IG51bWJlciA9IHRoaXMuY29udGV4dC5UUklBTkdMRVM7XHJcbiAgICAgICAgICAgIGxldCBkcmF3T2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZHJhd0NvdW50OiBudW1iZXIgPSA2OyAvLyBzcXVhcmUgZnJvbSB0d28gdHJpYW5nbGVzIHdvdWxkIGJlIDYuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIGRyYXdPZmZzZXQsIGRyYXdDb3VudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIGRyYXdJbWFnZSh0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIHRleHR1cmVXaWR0aDogbnVtYmVyLCB0ZXh0dXJlSGVpZ2h0OiBudW1iZXIsIGRlc3RpbmF0aW9uWDogbnVtYmVyLCBkZXN0aW5hdGlvblk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC5iaW5kVGV4dHVyZSh0aGlzLmNvbnRleHQuVEVYVFVSRV8yRCk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHRoaXMuX2ltYWdlUHJvZ3JhbSk7XHJcblxyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRoaXMuY29udGV4dC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKTtcclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25Mb2NhdGlvbik7XHJcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25Mb2NhdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcclxuICAgIC8vICAgICB0aGlzLmNvbnRleHQuYmluZEJ1ZmZlcih0aGlzLmNvbnRleHQuQVJSQVlfQlVGRkVSLCB0ZXhjb29yZEJ1ZmZlcik7XHJcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleGNvb3JkTG9jYXRpb24pO1xyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRleGNvb3JkTG9jYXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XHJcblxyXG4gICAgLy8gICAgIC8vIHRoaXMgbWF0cml4IHdpbGwgY29udmVydCBmcm9tIHBpeGVscyB0byBjbGlwIHNwYWNlXHJcbiAgICAvLyAgICAgdmFyIG1hdHJpeCA9IE1hdDMub3J0aG9ncmFwaGljKDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCwgMCwgLTEsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIHRoaXMgbWF0cml4IHdpbGwgdHJhbnNsYXRlIG91ciBxdWFkIHRvIGRzdFgsIGRzdFlcclxuICAgIC8vICAgICBtYXRyaXggPSBtNC50cmFuc2xhdGUobWF0cml4LCBkc3RYLCBkc3RZLCAwKTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyB0aGlzIG1hdHJpeCB3aWxsIHNjYWxlIG91ciAxIHVuaXQgcXVhZFxyXG4gICAgLy8gICAgIC8vIGZyb20gMSB1bml0IHRvIHRleFdpZHRoLCB0ZXhIZWlnaHQgdW5pdHNcclxuICAgIC8vICAgICBtYXRyaXggPSBNYXQ0LnNjYWxlKG1hdHJpeCwgdGV4V2lkdGgsIHRleEhlaWdodCwgMSk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy8gU2V0IHRoZSBtYXRyaXguXHJcbiAgICAvLyAgICAgdGhpcy5jb250ZXh0LnVuaWZvcm1NYXRyaXg0ZnYobWF0cml4TG9jYXRpb24sIGZhbHNlLCBtYXRyaXgpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIFRlbGwgdGhlIHNoYWRlciB0byBnZXQgdGhlIHRleHR1cmUgZnJvbSB0ZXh0dXJlIHVuaXQgMFxyXG4gICAgLy8gICAgIHRoaXMuY29udGV4dC51bmlmb3JtMWkodGV4dHVyZUxvY2F0aW9uLCAwKTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyBkcmF3IHRoZSBxdWFkICgyIHRyaWFuZ2xlcywgNiB2ZXJ0aWNlcylcclxuICAgIC8vICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgNik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgc2hhZGVyIG9mIHRoZSBnaXZlbiB0eXBlIHVzaW5nIHRoZSBzaGFkZXIgc291cmNlIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gc2hhZGVyVHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIgZWl0aGVyIFZFUlRFWFRfU0hBREVSIG9yIEZSQUdNRU5UX1NIQURFUi5cclxuICAgICAqIEBwYXJhbSBzaGFkZXJTb3VyY2UgVGhlIHNvdXJjZSB0ZXh0IG9mIHRoZSBzaGFkZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2NyZWF0ZVNoYWRlcihzaGFkZXJUeXBlOiBHTGVudW0sIHNoYWRlclNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xyXG4gICAgICAgIGxldCBzaGFkZXI6IFdlYkdMU2hhZGVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKSE7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBzaGFkZXIgc291cmNlIHRleHQgdG8gYmUgcGxhY2VkIGludG8gdGhlbiBjb21waWxlLlxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcblxyXG4gICAgICAgIGxldCBzdWNjZXNzZnVsOiBib29sZWFuID0gdGhpcy5jb250ZXh0LmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIHRoaXMuY29udGV4dC5DT01QSUxFX1NUQVRVUyk7XHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBSZWZhY3RvciBpbnRvIHNvbWUgc29ydCBvZiBnZW5lcmFsIGRpc3Bvc2UgZnVuY3Rpb24gZm9yIHNoYWRlcnMuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0LmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICB0aHJvdyBgW1NIQURFUiBFUlJPUl06IFVuYWJsZSB0byBsb2FkIHNoYWRlciAke3NoYWRlclR5cGV9YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExpbmtzIHZlcnRleCBzaGFkZXIgYW5kIGZyYWdtZW50IHNoYWRlciBpbnRvIGEgV2ViR0wgcHJvZ3JhbS5cclxuICAgICAqIEBwYXJhbSB2ZXJ0ZXh0U2hhZGVyIFRoZSB2ZXJ0ZXggc2hhZGVyIHRvIGxpbmsgdG8gdGhlIHByb2dyYW0uXHJcbiAgICAgKiBAcGFyYW0gZnJhZ21lbnRTaGFkZXIgVGhlIGZyYWdtZW50IHNoYWRlciB0byBsaW5rIHRvIHRoZSBwcm9ncmFtLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9jcmVhdGVQcm9ncmFtKHZlcnRleHRTaGFkZXI6IFdlYkdMU2hhZGVyLCBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXIpOiBXZWJHTFByb2dyYW0ge1xyXG4gICAgICAgIGxldCBwcm9ncmFtOiBXZWJHTFByb2dyYW0gPSB0aGlzLmNvbnRleHQuY3JlYXRlUHJvZ3JhbSgpITtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogQWRkIGNoZWNrcyB0byBkZXRlcm1pbmUgdGhhdCBlYWNoIHNoYWRlciBwYXJhbWV0ZXIgaXMgYWN0dWFsbHkgb2YgdGhlIGNvcnJlY3Qgc2hhZGVyIHR5cGUuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXh0U2hhZGVyKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmtQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICBsZXQgc3VjY2Vzc2Z1bDogYm9vbGVhbiA9IHRoaXMuY29udGV4dC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIHRoaXMuY29udGV4dC5MSU5LX1NUQVRVUyk7XHJcblxyXG4gICAgICAgIGlmIChzdWNjZXNzZnVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVE9ETzogUmVmYWN0b3IgaW50byBzb21lIHNvcnQgb2YgZ2VuZXJhbCBkaXNwb3NlIGZ1bmN0aW9uIGZvciBwcm9ncmFtcy5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICB0aHJvdyBgW1NIQURFUiBFUlJPUl06IFVuYWJsZSB0byBsaW5rIHNoYWRlcnMgdG8gcHJvZ3JhbWA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXQ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCBcclxuICAgICAgICAgICAgMCwgMSwgMCwgXHJcbiAgICAgICAgICAgIDAsIDAsIDFcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24odHJhbnNsYXRlWDogbnVtYmVyLCB0cmFuc2xhdGVZOiBudW1iZXIsIHRyYW5zbGF0ZVo6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgeDogbnVtYmVyID0gdHJhbnNsYXRlWDtcclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gdHJhbnNsYXRlWTtcclxuICAgICAgICBsZXQgejogbnVtYmVyID0gdHJhbnNsYXRlWjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgeCwgeSwgeiwgMVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB4Um90YXRpb24oYW5nbGVJblJhZGlhbnM6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGMsIHMsIDAsXHJcbiAgICAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHlSb3RhdGlvbihhbmdsZUluUmFkaWFuczogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHpSb3RhdGlvbihhbmdsZUluUmFkaWFuczogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYywgcywgMCwgMCxcclxuICAgICAgICAgICAgLXMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgc2NhbGluZyhzeDogbnVtYmVyLCBzeTogbnVtYmVyLCBzejogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsICAwLCAgMCxcclxuICAgICAgICAgICAgMCwgc3ksICAwLCAgMCxcclxuICAgICAgICAgICAgMCwgIDAsIHN6LCAgMCxcclxuICAgICAgICAgICAgMCwgIDAsICAwLCAgMSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogYW55LCBiOiBhbnkpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYjAxID0gYlswICogNCArIDFdO1xyXG4gICAgICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYjEwID0gYlsxICogNCArIDBdO1xyXG4gICAgICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYjEzID0gYlsxICogNCArIDNdO1xyXG4gICAgICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYjIyID0gYlsyICogNCArIDJdO1xyXG4gICAgICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYjMxID0gYlszICogNCArIDFdO1xyXG4gICAgICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMDEgPSBhWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBhMTAgPSBhWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBhMTMgPSBhWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBhMjIgPSBhWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBhMzEgPSBhWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjAgKyBiMDMgKiBhMzAsXHJcbiAgICAgICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzEsXHJcbiAgICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzIsXHJcbiAgICAgICAgICBiMDAgKiBhMDMgKyBiMDEgKiBhMTMgKyBiMDIgKiBhMjMgKyBiMDMgKiBhMzMsXHJcbiAgICAgICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzAsXHJcbiAgICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzEsXHJcbiAgICAgICAgICBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIgKyBiMTMgKiBhMzIsXHJcbiAgICAgICAgICBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzMsXHJcbiAgICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgICBiMjAgKiBhMDEgKyBiMjEgKiBhMTEgKyBiMjIgKiBhMjEgKyBiMjMgKiBhMzEsXHJcbiAgICAgICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcbiAgICAgICAgICBiMzAgKiBhMDAgKyBiMzEgKiBhMTAgKyBiMzIgKiBhMjAgKyBiMzMgKiBhMzAsXHJcbiAgICAgICAgICBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzEsXHJcbiAgICAgICAgICBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzIsXHJcbiAgICAgICAgICBiMzAgKiBhMDMgKyBiMzEgKiBhMTMgKyBiMzIgKiBhMjMgKyBiMzMgKiBhMzMsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHRyYW5zbGF0ZShtOiBudW1iZXIsIHR4OiBudW1iZXIsIHR5OiBudW1iZXIsIHR6OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShtLCBNYXQ0LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyB4Um90YXRlKG06IG51bWJlciwgYW5nbGVJblJhZGlhbnM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXQ0Lm11bHRpcGx5KG0sIE1hdDQueFJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgeVJvdGF0ZShtOiBudW1iZXIsIGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShtLCBNYXQ0LnlSb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHpSb3RhdGUobTogbnVtYmVyLCBhbmdsZUluUmFkaWFuczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdDQubXVsdGlwbHkobSwgTWF0NC56Um90YXRpb24oYW5nbGVJblJhZGlhbnMpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBzY2FsZShtOiBudW1iZXIsIHN4OiBudW1iZXIsIHN5OiBudW1iZXIsIHN6OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTWF0NC5tdWx0aXBseShtLCBNYXQ0LnNjYWxpbmcoc3gsIHN5LCBzeikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcHJvamVjdGlvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGVwdGg6IG51bWJlcikge1xyXG4gICAgICAgIC8vIE5vdGU6IFRoaXMgbWF0cml4IGZsaXBzIHRoZSBZIGF4aXMgc28gMCBpcyBhdCB0aGUgdG9wLlxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgMiAvIHdpZHRoLCAwLCAwLCAwLFxyXG4gICAgICAgICAgIDAsIC0yIC8gaGVpZ2h0LCAwLCAwLFxyXG4gICAgICAgICAgIDAsIDAsIDIgLyBkZXB0aCwgMCxcclxuICAgICAgICAgIC0xLCAxLCAwLCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgb3J0aG9ncmFwaGljKGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHRvcDogbnVtYmVyLCBuZWFyOiBudW1iZXIsIGZhcjogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDIgLyAocmlnaHQgLSBsZWZ0KSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMiAvICh0b3AgLSBib3R0b20pLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAyIC8gKG5lYXIgLSBmYXIpLCAwLFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIChsZWZ0ICsgcmlnaHQpIC8gKGxlZnQgLSByaWdodCksXHJcbiAgICAgICAgICAgIChib3R0b20gKyB0b3ApIC8gKGJvdHRvbSAtIHRvcCksXHJcbiAgICAgICAgICAgIChuZWFyICsgZmFyKSAvIChuZWFyIC0gZmFyKSxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59IiwiLy8gTG9jYWwgaW1wb3J0cy5cclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vcHJpbWl0aXZlcy9wb2ludFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vcHJpbWl0aXZlcy90cmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSBcIi4vYmFzZS1yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lL3NjZW5lJztcclxuaW1wb3J0IHsgTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi9jb3JlL21hbmFnZXItZmFjdG9yeSc7XHJcblxyXG4vLyBDb21wb25lbnQgaW1wb3J0cy5cclxuaW1wb3J0IHsgU3ByaXRlUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFRpbGVtYXBDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcclxuXHJcbmltcG9ydCB7IExheWVyIH0gZnJvbSAnLi9sYXllcic7XHJcbmltcG9ydCB7IFRpbGVzZXQgfSBmcm9tICcuL3RpbGVzZXQnO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tICcuL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbXBvbmVudE1hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9jb21wb25lbnQtbWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1JlbmRlcmVyIGV4dGVuZHMgQmFzZVJlbmRlcmVyIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNhbnZhcyB0byByZW5kZXIgdGhlIGN1cnJlbnQgc2NlbmUgdG8uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmdpbmVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGN1cnJlbnQgc2NlbmUgdG8gcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2NlbmU6IFNjZW5lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRpbGVzZXRzIHRvIHVzZSBmb3IgdGhlIGN1cnJlbnQgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0aWxlc2V0czogVGlsZXNldFtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgMkQgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHRoZSBkZWZhdWx0IGNhbnZhcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYWluIHNjZW5lIGNhbWVyYSB0aGlzIGlzIGFsd2F5cyBoZXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWFpbkNhbWVyYTogQ2FtZXJhID0gbmV3IENhbWVyYSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFNjZW5lLCB0aWxlc2V0czogVGlsZXNldFtdKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgICAgIHRoaXMudGlsZXNldHMgPSB0aWxlc2V0cztcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRocm93IFwiWW91IGNhbm5vdCBpbml0aWFsaXplIHRoZSByZW5kZXJlciB3aXRob3V0IGEgc2NlbmUuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGlsZXNldHMgfHwgdGhpcy50aWxlc2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJZb3UgY2Fubm90IGluaXRpYWxpemUgdGhlIHJlbmRlcmVyIHdpdGhvdXQgYW55IHRpbGVzZXRzLlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZ2luZS1jYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSA8Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEPnRoaXMuZW5naW5lQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgY2FudmFzIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIExvZ2dlci5pbmZvKCdTdGFydGVkIGluaXRpYWxpemluZyBjYW52YXMgcmVuZGVyZXInLCBDYW52YXNSZW5kZXJlci5uYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLm9uQ2FudmFzTW91c2VEb3duKGV2ZW50KSk7XHJcbiAgICAgICAgdGhpcy5lbmdpbmVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4gdGhpcy5vbkNhbnZhc01vdXNlVXAoZXZlbnQpKTtcclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHRoaXMub25DYW52YXNNb3VzZU1vdmUoZXZlbnQpKTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgY2FtZXJhIGZvciB0aGUgcmVuZGVyZXIuXHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnZpZXdwb3J0ID0gbmV3IFRyYW5zZm9ybSgwLCAwLCB0aGlzLmdldENhbnZhc1dpZHRoKCksIHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KCkpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5tYXggPSBuZXcgUG9pbnQoKHRoaXMuc2NlbmUuY29sdW1ucyAqIHRoaXMuc2NlbmUudGlsZVNpemUpIC0gdGhpcy5tYWluQ2FtZXJhLnZpZXdwb3J0LndpZHRoLCAodGhpcy5zY2VuZS5yb3dzICogdGhpcy5zY2VuZS50aWxlU2l6ZSkgLSB0aGlzLm1haW5DYW1lcmEudmlld3BvcnQuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ0ZpbmlzaGVkIGluaXRpYWxpemluZyBjYW52YXMgcmVuZGVyZXInLCBDYW52YXNSZW5kZXJlci5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgYW55IGVudGl0aWVzIHRvIHRoZSBjYW52YXMgaWYgdGhleSBoYXZlIHRoZSBzcHJpdGUgcmVuZGVyZXIgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBkcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENsZWFyIHRoZSBjYW52YXMgZm9yIHRoZSBuZXh0IHJlbmRlciBjYWxsLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVuZGVyIHRoZSB0aWxlbWFwIGFuZCBzdGFuZGFsb25lIHNwcml0ZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRW5zdXJlIHRoZSBjYW52YXMgaXMgcmVzaXplZCB0byBtYXRjaCB0aGUgY3VycmVudCBzaXplIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NlbmUubGF5ZXJzLmZvckVhY2goKGxheWVyOiBMYXllciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGF5ZXIuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSB0aWxlbWFwIHNwcml0ZXMgZm9yIHRoZSBjdXJyZW50IGxheWVyLlxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbGVtYXBNYW5hZ2VyOiBDb21wb25lbnRNYW5hZ2VyPFRpbGVtYXBDb21wb25lbnQ+ID0gTWFuYWdlckZhY3RvcnkuZ2V0KFRpbGVtYXBDb21wb25lbnQubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZW1hcE1hbmFnZXIuaW5zdGFuY2VzLmZvckVhY2goKHRpbGVtYXBJbnN0YW5jZTogVGlsZW1hcENvbXBvbmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFydENvbCA9IDA7IC8vIE1hdGguZmxvb3IoY2FtZXJhLnZpZXdwb3J0LnggLyB0aGlzLnNjZW5lLnRpbGVTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kQ29sID0gNjQ7IC8vIHN0YXJ0Q29sICsgKGNhbWVyYS52aWV3cG9ydC53aWR0aCAvIHRoaXMuc2NlbmUudGlsZVNpemUpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRSb3cgPSAwOyAvLyBNYXRoLmZsb29yKGNhbWVyYS52aWV3cG9ydC55IC8gdGhpcy5zY2VuZS50aWxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVuZFJvdyA9IDY0OyAvLyBzdGFydFJvdyArIChjYW1lcmEudmlld3BvcnQuaGVpZ2h0IC8gdGhpcy5zY2VuZS50aWxlU2l6ZSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRYID0gMDsgLy8gLWNhbWVyYS52aWV3cG9ydC54ICsgc3RhcnRDb2wgKiB0aGlzLnNjZW5lLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXRZID0gMDsgLy8gLWNhbWVyYS52aWV3cG9ydC55ICsgc3RhcnRSb3cgKiB0aGlzLnNjZW5lLnRpbGVTaXplO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBzdGFydENvbDsgY29sIDw9IGVuZENvbDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gc3RhcnRSb3c7IHJvdyA8PSBlbmRSb3c7IHJvdysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlOiBudW1iZXIgPSB0aWxlbWFwSW5zdGFuY2UudGlsZXNbcm93ICogNjQgKyBjb2xdOyAvLyB0aGlzLnNjZW5lLmNvbHVtbnNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IChjb2wgLSBzdGFydENvbCkgKiAzMiArIG9mZnNldFg7IC8vIHRoaXMuc2NlbmUudGlsZVNpemVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gKHJvdyAtIHN0YXJ0Um93KSAqIDMyICsgb2Zmc2V0WTsgLy8gdGhpcy5zY2VuZS50aWxlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc2V0c1t0aWxlbWFwSW5zdGFuY2UudGlsZXNldEluZGV4XS5pbWFnZSEsIC8vdGhpcy50aWxlc2V0c1tsYXllci50aWxlc2V0XS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUgKiAzMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoeCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCh5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlbmRlciBhbnkgc3RhbmRhbG9uZSBzcHJpdGVzIGZvciB0aGUgY3VycmVudCBsYXllci5cclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGVNYW5hZ2VyOiBDb21wb25lbnRNYW5hZ2VyPFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50PiA9IE1hbmFnZXJGYWN0b3J5LmdldChTcHJpdGVSZW5kZXJlckNvbXBvbmVudC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVNYW5hZ2VyLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVSZW5kZXJlciA9IHNwcml0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoZW50aXR5KSBhcyBTcHJpdGVSZW5kZXJlckNvbXBvbmVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlVHJhbnNmb3JtID0gZW50aXR5LmdldENvbXBvbmVudChUcmFuc2Zvcm1Db21wb25lbnQpIGFzIFRyYW5zZm9ybUNvbXBvbmVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gZW50aXR5LmdldENvbXBvbmVudChNYXRlcmlhbENvbXBvbmVudCkgYXMgTWF0ZXJpYWxDb21wb25lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5TWF0ZXJpYWwobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc2V0c1swXS5pbWFnZSEsLy8gdGhpcy50aWxlc2V0c1tzcHJpdGVSZW5kZXJlckNvbXBvbmVudC5sYXllcl0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZVJlbmRlcmVyLmNvbHVtbiEgKiB0aGlzLnNjZW5lLnRpbGVTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVSZW5kZXJlci5yb3chICogdGhpcy5zY2VuZS50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlVHJhbnNmb3JtLnRyYW5zZm9ybS54IC0gMCwgLy8gY2FtZXJhT2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlVHJhbnNmb3JtLnRyYW5zZm9ybS55IC0gMCwgLy8gY2FtZXJhT2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50aWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlNYXRlcmlhbChtYXRlcmlhbENvbXBvbmVudDogTWF0ZXJpYWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gbWF0ZXJpYWxDb21wb25lbnQuZmlsbFN0eWxlITtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBtYXRlcmlhbENvbXBvbmVudC5hbHBoYTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY2FudmFzIGZvciB0aGUgbmV4dCBkcmF3IGNhbGwuXHJcbiAgICAgKiBcclxuICAgICAqIEBhdXRob3IgTlNTdXJlXHJcbiAgICAgKiBAc2luY2UgMTEvOC8yMDIwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyQ2FudmFzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nZXRDYW52YXNXaWR0aCgpLCB0aGlzLmdldENhbnZhc0hlaWdodCgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZXMgdGhlIGNhbnZhcyBjYW52YXMgdG8gZml0IHRoZSBkaW1lbnNpb25zIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgICAqIFxyXG4gICAgICogQGF1dGhvciBOU1N1cmVcclxuICAgICAqIEBzaW5jZSAxMS84LzIwMjBcclxuICAgICAqL1xyXG4gICAgcmVzaXplQ2FudmFzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmdldENhbnZhc1dpZHRoKCkgIT09IHdpbmRvdy5pbm5lcldpZHRoIHx8IHRoaXMuZ2V0Q2FudmFzSGVpZ2h0KCkgIT09IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENhbnZhc1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDYW52YXNIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHdpZHRoIG9mIHRoZSBjYW52YXMuXHJcbiAgICAgKi9cclxuICAgIGdldENhbnZhc0hlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZUNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGhlaWdodCBvZiB0aGUgY2FudmFzLlxyXG4gICAgICovXHJcbiAgICBnZXRDYW52YXNXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZUNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgY2FudmFzLlxyXG4gICAgICogQHBhcmFtIGhlaWdodCBUaGUgaGVpZ2h0IHRvIHNldCB0aGUgY2FudmFzIHRvLlxyXG4gICAgICovXHJcbiAgICBzZXRDYW52YXNIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZ2luZUNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgY2FudmFzLlxyXG4gICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCB0byBzZXQgdGhlIGNhbnZhcyB0by5cclxuICAgICAqL1xyXG4gICAgc2V0Q2FudmFzV2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5naW5lQ2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW52YXNNb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW91c2Vkb3duJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW52YXNNb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21vdXNldXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbnZhc01vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3VzZW1vdmUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB4L3kgY29vcmRpbmF0ZSBpcyBjb250YWluZWQgd2l0aCB0aGUgZ2l2ZW4gZGltZW5zaW9ucy4gVGhpbmtcclxuICogaWYgYSBtb3VzZSBpcyBob3ZlcmluZyBvdmVyIGEgYnV0dG9uLlxyXG4gKiBcclxuICogQGF1dGhvciBOU1N1cmVcclxuICogQHNpbmNlIDExLzkvMjAyMFxyXG4gKiBcclxuICogQHBhcmFtIHBvaW50IFRoZSBwb2ludCB0aGF0IG5lZWRzIHRvIGJlIGNoZWNrZWQgYWdhaW5zdCB0aGUgZ2l2ZW4gY29udGFpbmVyIGRpbWVuc2lvbnMuXHJcbiAqIEBwYXJhbSBjb250YWluZXJPcmlnaW4gVGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgb2YgY29udGFpbmVyLlxyXG4gKiBAcGFyYW0gY29udGFpbmVyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBjb250YWluZXIuXHJcbiAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgY29udGFpbmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29vcmRpbmF0ZUNvbnRhaW5lZChwb2ludDogUG9pbnQsIGNvbnRhaW5lclRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICBpZiAocG9pbnQueCA+PSBjb250YWluZXJUcmFuc2Zvcm0ueCAmJiAocG9pbnQueCA8PSAoY29udGFpbmVyVHJhbnNmb3JtLnggKyBjb250YWluZXJUcmFuc2Zvcm0ud2lkdGgpKSkge1xyXG4gICAgICAgIGlmIChwb2ludC55ID49IGNvbnRhaW5lclRyYW5zZm9ybS55ICYmIChwb2ludC55IDw9IChjb250YWluZXJUcmFuc2Zvcm0ueSArIGNvbnRhaW5lclRyYW5zZm9ybS5oZWlnaHQpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vc2NlbmUvZW50aXR5JztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9wcmltaXRpdmVzL3BvaW50JztcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy90cmFuc2Zvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgaXNUcmlnZ2VyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc1RyaWdnZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHBvaW50czogQXJyYXk8UG9pbnQ+ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgYWJzdHJhY3Qgb25Db2xsaXNpb25FbnRlcigpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3Qgb25Db2xsaXNpb25MZWF2ZSgpOiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyYW5zZm9ybTogVHJhbnNmb3JtKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcblxyXG4gICAgICAgIC8vIFRvcCBsZWZ0LlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSkpO1xyXG5cclxuICAgICAgICAvLyBUb3AgcmlnaHQuXHJcbiAgICAgICAgdGhpcy5wb2ludHMucHVzaChuZXcgUG9pbnQodHJhbnNmb3JtLnggKyB0cmFuc2Zvcm0ud2lkdGgsIHRyYW5zZm9ybS55KSk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSBsZWZ0LlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHRyYW5zZm9ybS54LCB0cmFuc2Zvcm0ueSArIHRyYW5zZm9ybS5oZWlnaHQpKTtcclxuXHJcbiAgICAgICAgLy8gQm90dG9tIHJpZ2h0LlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHRyYW5zZm9ybS54ICsgdHJhbnNmb3JtLndpZHRoLCB0cmFuc2Zvcm0ueSArIHRyYW5zZm9ybS5oZWlnaHQpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vY29yZS9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3JhcGhpY3MvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2xvZ2dpbmcvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVscy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcGh5c2ljcy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJpbWl0aXZlcy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9zeXN0ZW1zL2luZGV4JzsiLCJleHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQtbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlndXJhdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9lbnRpdHktbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWFuYWdlci1mYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9zY2VuZS1tYW5hZ2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zeXN0ZW0tbWFuYWdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGltZSc7IiwiaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gJy4uL2NvcmUvc2NlbmUtbWFuYWdlcic7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9jb3JlL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBTeXN0ZW1NYW5hZ2VyIH0gZnJvbSAnLi4vY29yZS9zeXN0ZW0tbWFuYWdlcic7XHJcbmltcG9ydCB7IE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vY29yZS9tYW5hZ2VyLWZhY3RvcnknO1xyXG5cclxuaW1wb3J0IHsgQ29sbGlzaW9uU3lzdGVtIH0gZnJvbSAnLi4vc3lzdGVtcy9jb2xsaXNpb24vY29sbGlzaW9uLXN5c3RlbSc7XHJcblxyXG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4uL3NjZW5lL21hbmlmZXN0JztcclxuXHJcbmltcG9ydCB7IFNjcmlwdFN5c3RlbSB9IGZyb20gJy4uL3N5c3RlbXMvc2NyaXB0L1NjcmlwdFN5c3RlbSc7XHJcbmltcG9ydCB7IExvYWRTY2VuZVJldHVybiB9IGZyb20gJy4uL21vZGVscy9yZXR1cm5zL2xvYWQtc2NlbmUtcmV0dXJuJztcclxuXHJcbi8vIFJlbmRlcmVycyBpbXBsZW1lbnRhdGlvbnMuXHJcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2dyYXBoaWNzL2Jhc2UtcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBXZWJHTFJlbmRlcmVyIH0gZnJvbSAnLi4vZ3JhcGhpY3Mvd2ViZ2wtcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4uL2dyYXBoaWNzL2NhbnZhcy1yZW5kZXJlcic7XHJcblxyXG4vLyBMb2dnaW4uXHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dpbmcvbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRhaW5zIHRoZSByZW5kZXJpbmcgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBtYWluIGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW5kZXJlciE6IEJhc2VSZW5kZXJlcjsgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGbGFnIHRoYXQgZGV0ZXJtaW5lcyB3aGF0IHJlbmRlcmVyIHdpbGwgYmUgdXNlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyB8ICd3ZWJnbCcgfCAnY2FudmFzJyA9ICdjYW52YXMnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1haW4gaW5wdXQgc3lzdGVtLlxyXG4gICAgICovXHJcbiAgICAvLyBwdWJsaWMgaW5wdXQ6IElucHV0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkZWQgdG9cclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgb25TdGFydCgpOiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1haW4gY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIHN5c3RlbXMuXHJcbiAgICAgICAgU3lzdGVtTWFuYWdlci5yZWdpc3RlcihuZXcgQ29sbGlzaW9uU3lzdGVtKCkpO1xyXG4gICAgICAgIFN5c3RlbU1hbmFnZXIucmVnaXN0ZXIobmV3IFNjcmlwdFN5c3RlbSgpKTtcclxuXHJcbiAgICAgICAgLy8gTWFwIGNvbXBvbmVudCBtYW5hZ2VyIGluc3RhbmNlIHRvIGNvbXBvbmVudCB0eXBlcy5cclxuICAgICAgICBNYW5hZ2VyRmFjdG9yeS5ib290c3RyYXAoKTtcclxuXHJcbiAgICAgICAgTG9nZ2VyLmluZm8oYFJlZ2lzdGVyZWQgJHtNYW5hZ2VyRmFjdG9yeS5tYW5hZ2Vycy5zaXplfSBtYW5hZ2VyKHMpYCwgQXBwbGljYXRpb24ubmFtZSk7XHJcbiAgICAgICAgTG9nZ2VyLmRhdGEoJ1JlZ2lzdGVyZWQgbWFuYWdlcihzKScsIE1hbmFnZXJGYWN0b3J5Lm1hbmFnZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjdHVhbGx5IGJlZ2lucyB0aGUgZ2FtZSBpbnN0YW5jZS4gUHJvY2Vzc2VzIHRoZSBjb25maWd1cmF0aW9uLlxyXG4gICAgICogXHJcbiAgICAgKiBAYXV0aG9yIE5TU3VyZVxyXG4gICAgICogQHNpbmNlIDExLzgvMjAyMFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBMb2dnZXIuaW5mbygnW1N0YXJ0ZWQgaW5pdGlhbGl6aW5nIGFwcGxpY2F0aW9uXScsIEFwcGxpY2F0aW9uLm5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgZW5naW5lQ29uZmlnUGF0aDogc3RyaW5nID0gJ21hbmlmZXN0Lmpzb24nO1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmVzIHdoYXQgYmFzZSB1cmwgdG8gdXNlIGZvciBsb2FkaW5nIGFwcGxpY2F0aW9uIHJlc291cmNlcyAodGlsZXNldCwgY29uZmlndXJhdGlvbnMsIGV0YykuXHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxuICAgICAgICAvLyBVc2VkIGluIHRoZSBlZGl0b3IuXHJcbiAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ2Jhc2VVcmwnKSkge1xyXG4gICAgICAgICAgICBDb25maWd1cmF0aW9uLmJhc2VVcmwgPSBkZWNvZGVVUklDb21wb25lbnQodXJsUGFyYW1zLmdldCgnYmFzZVVybCcpISk7XHJcbiAgICAgICAgICAgIGVuZ2luZUNvbmZpZ1BhdGggPSBgJHtDb25maWd1cmF0aW9uLmJhc2VVcmx9LyR7ZW5naW5lQ29uZmlnUGF0aH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTG9hZCBlbmdpbmUgY29uZmlndXJhdGlvbi5cclxuICAgICAgICBsZXQgZW5naW5lQ29uZmlnOiBNYW5pZmVzdCA9IGF3YWl0IChhd2FpdCBmZXRjaChlbmdpbmVDb25maWdQYXRoKS5jYXRjaCh0aGlzLmhhbmRsZUxvYWRFcnJvcikpLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gTG9hZCB0aGUgZmlyc3Qgc2NlbmUgYW5kIGluaXQgdGhlIHJlbmRlcmVyIHdpdGggdGhlIGRlZmF1bHQgc2NlbmUgYW5kIHRpbGVzZXRzLlxyXG4gICAgICAgIFNjZW5lTWFuYWdlci5sb2FkKGVuZ2luZUNvbmZpZy5zY2VuZXNbMF0pLnRoZW4oKGxvYWRTY2VuZVJ0bjogTG9hZFNjZW5lUmV0dXJuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICd3ZWJnbCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcihsb2FkU2NlbmVSdG4uc2NlbmUsIGxvYWRTY2VuZVJ0bi50aWxlc2V0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGxvYWRTY2VuZVJ0bi5zY2VuZSwgbG9hZFNjZW5lUnRuLnRpbGVzZXRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHRoaXMub25TdGFydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIG1haW4gYXBwbGljYXRpb24gbG9vcC5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZTogbnVtYmVyKSA9PiB0aGlzLm1haW5Mb29wKHRpbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUxvYWRFcnJvcihyZXNwb25zZTogYW55KTogUmVzcG9uc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBjb2RlOiA1MDAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmVycm9yXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1haW4gbG9vcCBjb250YWlucyBhbGwgdGhlIHJlbmRlcmluZyBsb2dpYyB3aWxsIGJlIGNhbGxlZCBmcm9tIHdpdGhpbiB0aGlzIGZ1bmN0aW9uLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gdGltZSBUaGUgdGltZSBiZXR3ZWVuIHRoZSBhbmltYXRpb24gZnJhbWVzLlxyXG4gICAgICogXHJcbiAgICAgKiBAYXV0aG9yIE5TU3VyZVxyXG4gICAgICogQHNpbmNlIDExLzgvMjAyMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1haW5Mb29wKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBwZXJpcGhlcmFsIGRhdGEgKHRpbWUsIG1vdXNlLCBldGMpIGZvciB1c2Ugd2l0aGluIHRoZSByZW5kZXIgc3lzdGVtcy5cclxuICAgICAgICBUaW1lLmNhbGN1bGF0ZURlbHRhVGltZSh0aW1lKTtcclxuICAgICAgICAvLyBNb3VzZS51cGRhdGUodGhpcy5yZW5kZXJlci5tb3VzZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFueSByZWdpc3RlcmVkIHN5c3RlbXMgYW5kIGV4ZWN1dGUgdGhlIHVwZGF0ZSBtZXRob2QgZm9yIGVhY2ggc3lzdGVtLlxyXG4gICAgICAgIC8vIFN5c3RlbU1hbmFnZXIuc3lzdGVtcy5mb3JFYWNoKChzeXN0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBzeXN0ZW0udXBkYXRlKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGRyYXcgbWV0aG9kIHdpdGhpbiB0aGUgcmVuZGVyZXIuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5kcmF3KCk7XHJcblxyXG4gICAgICAgIC8vIFJlcXVlc3QgYSBuZXcgYW5pbWF0aW9uIGZyYW1lLlxyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWU6IG51bWJlcikgPT4gdGhpcy5tYWluTG9vcCh0aW1lKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYWdDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgVHJhbnNmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFNwcml0ZVJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENvbGxpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2NlbmUvY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IENhbWVyYUNvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3NjZW5lL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBTY3JpcHRDb21wb25lbnQgfSBmcm9tICcuLi9zY2VuZS9jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBZYWtDb25zdGFudHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHlwZXMgb2YgYWxsIG9mIHRoZSBhdmFpbGFibGUgY29tcG9uZW50cy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb21wb25lbnRUeXBlczogYW55W10gPSBbXHJcbiAgICAgICAgVGFnQ29tcG9uZW50LFxyXG4gICAgICAgIFRyYW5zZm9ybUNvbXBvbmVudCxcclxuICAgICAgICBTcHJpdGVSZW5kZXJlckNvbXBvbmVudCxcclxuICAgICAgICBNYXRlcmlhbENvbXBvbmVudCxcclxuICAgICAgICBDb2xsaWRlckNvbXBvbmVudCxcclxuICAgICAgICBDYW1lcmFDb21wb25lbnQsXHJcbiAgICAgICAgSW1hZ2VDb21wb25lbnQsXHJcbiAgICAgICAgU2NyaXB0Q29tcG9uZW50XHJcbiAgICBdO1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jYW1lcmEnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lucHV0JztcclxuZXhwb3J0ICogZnJvbSAnLi9sYXllcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTWF0Myc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTWF0NCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW91c2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nwcml0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdGlsZXNldCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1yZW5kZXJlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2FudmFzLXJlbmRlcmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi93ZWJnbC1yZW5kZXJlcic7IiwiaW1wb3J0IHsgVGltZSB9IGZyb20gJy4uL2NvcmUvdGltZSc7XHJcblxyXG4vKipcclxuICogVHJhY2tzIGtleWJvYXJkIGlucHV0IG9ubHkuIEZvciBtb3VzZSBpbnB1dCB1c2UgTW91c2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICAgcHVibGljIHN0YXRpYyBjb2RlczogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMuX29uS2V5RG93bihldmVudCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy5fb25LZXlVcChldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIElucHV0LmNvZGVzLnNldChldmVudC5jb2RlLnRvTG93ZXJDYXNlKCksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoSW5wdXQuY29kZXMuaGFzKGV2ZW50LmNvZGUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgSW5wdXQuY29kZXMuc2V0KGV2ZW50LmNvZGUudG9Mb3dlckNhc2UoKSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzUHJlc3NlZChjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gSW5wdXQuY29kZXMuaGFzKGNvZGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBob3Jpem9udGFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHhEaXJlY3Rpb246IG51bWJlcjtcclxuXHJcbiAgICAgICAgaWYgKElucHV0LmlzUHJlc3NlZCgna2V5YScpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgeERpcmVjdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChJbnB1dC5pc1ByZXNzZWQoJ2tleWQnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHhEaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgeERpcmVjdGlvbiA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4geERpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHZlcnRpY2FsKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHlEaXJlY3Rpb247XHJcblxyXG4gICAgICAgIGlmIChJbnB1dC5pc1ByZXNzZWQoJ2tleXcnKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHlEaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoSW5wdXQuaXNQcmVzc2VkKCdrZXlzJykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB5RGlyZWN0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHlEaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHlEaXJlY3Rpb24gKiBUaW1lLmRlbHRhVGltZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSByZW5kZXIgbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGVuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBsb2NrZWQ/OiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBvcmRlcj86IG51bWJlclxyXG4gICAgKSB7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0MyB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGlkZW50aXR5KCk6IG51bWJlcltdIHtcclxuXHRcdHJldHVybiBbMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHByb2plY3Rpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcblx0XHRyZXR1cm4gWzIgLyB3aWR0aCwgMCwgMCwgMCwgLTIgLyBoZWlnaHQsIDAsIC0xLCAxLCAxXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgdHJhbnNsYXRpb24odHJhbnNsYXRlWDogbnVtYmVyLCB0cmFuc2xhdGVZOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcblx0XHRsZXQgeDogbnVtYmVyID0gdHJhbnNsYXRlWDtcclxuXHRcdGxldCB5OiBudW1iZXIgPSB0cmFuc2xhdGVZO1xyXG5cclxuXHRcdHJldHVybiBbMSwgMCwgMCwgMCwgMSwgMCwgeCwgeSwgMV07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHJvdGF0aW9uKGFuZ2xlSW5SYWRpYW5zOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcblx0XHRsZXQgYzogbnVtYmVyID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xyXG5cdFx0bGV0IHM6IG51bWJlciA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcclxuXHJcblx0XHRyZXR1cm4gW2MsIC1zLCAwLCBzLCBjLCAwLCAwLCAwLCAxXTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc2NhbGluZyhzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcblx0XHRsZXQgeDogbnVtYmVyID0gc2NhbGVYO1xyXG5cdFx0bGV0IHk6IG51bWJlciA9IHNjYWxlWTtcclxuXHJcblx0XHRyZXR1cm4gW3gsIDAsIDAsIDAsIHksIDAsIDAsIDAsIDFdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBtdWx0aXBseShhOiBhbnksIGI6IGFueSk6IG51bWJlcltdIHtcclxuXHRcdHZhciBhMDAgPSBhWzAgKiAzICsgMF07XHJcblx0XHR2YXIgYTAxID0gYVswICogMyArIDFdO1xyXG5cdFx0dmFyIGEwMiA9IGFbMCAqIDMgKyAyXTtcclxuXHRcdHZhciBhMTAgPSBhWzEgKiAzICsgMF07XHJcblx0XHR2YXIgYTExID0gYVsxICogMyArIDFdO1xyXG5cdFx0dmFyIGExMiA9IGFbMSAqIDMgKyAyXTtcclxuXHRcdHZhciBhMjAgPSBhWzIgKiAzICsgMF07XHJcblx0XHR2YXIgYTIxID0gYVsyICogMyArIDFdO1xyXG5cdFx0dmFyIGEyMiA9IGFbMiAqIDMgKyAyXTtcclxuXHRcdHZhciBiMDAgPSBiWzAgKiAzICsgMF07XHJcblx0XHR2YXIgYjAxID0gYlswICogMyArIDFdO1xyXG5cdFx0dmFyIGIwMiA9IGJbMCAqIDMgKyAyXTtcclxuXHRcdHZhciBiMTAgPSBiWzEgKiAzICsgMF07XHJcblx0XHR2YXIgYjExID0gYlsxICogMyArIDFdO1xyXG5cdFx0dmFyIGIxMiA9IGJbMSAqIDMgKyAyXTtcclxuXHRcdHZhciBiMjAgPSBiWzIgKiAzICsgMF07XHJcblx0XHR2YXIgYjIxID0gYlsyICogMyArIDFdO1xyXG5cdFx0dmFyIGIyMiA9IGJbMiAqIDMgKyAyXTtcclxuXHJcblx0XHRyZXR1cm4gW2IwMCAqIGEwMCArIGIwMSAqIGExMCArIGIwMiAqIGEyMCwgYjAwICogYTAxICsgYjAxICogYTExICsgYjAyICogYTIxLCBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIsIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCwgYjEwICogYTAxICsgYjExICogYTExICsgYjEyICogYTIxLCBiMTAgKiBhMDIgKyBiMTEgKiBhMTIgKyBiMTIgKiBhMjIsIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCwgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxLCBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjJdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyB0cmFuc2xhdGUobWF0cml4OiBudW1iZXJbXSwgdHJhbnNsYXRlWDogbnVtYmVyLCB0cmFuc2xhdGVZOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcblx0XHRyZXR1cm4gTWF0My5tdWx0aXBseShtYXRyaXgsIE1hdDMudHJhbnNsYXRpb24odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyByb3RhdGUobWF0cml4OiBudW1iZXJbXSwgYW5nbGVJblJhZGlhbnM6IG51bWJlcik6IG51bWJlcltdIHtcclxuXHRcdHJldHVybiBNYXQzLm11bHRpcGx5KG1hdHJpeCwgTWF0My5yb3RhdGlvbihhbmdsZUluUmFkaWFucykpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHNjYWxlKG1hdHJpeDogbnVtYmVyW10sIHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gTWF0My5tdWx0aXBseShtYXRyaXgsIE1hdDMuc2NhbGluZyhzY2FsZVgsIHNjYWxlWSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcblxyXG4vKipcclxuICogVHJhY2tzIG1vdXNlIGlucHV0IG9ubHkuIEZvciBrZXlib2FyZCBpbnB1dCB1c2UgSW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTW91c2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBidXR0b25zOiBNYXA8bnVtYmVyLCBib29sZWFuPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHhEaWZmOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgeURpZmY6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBsYXN0TW91c2VQb3NpdGlvbjogUG9pbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLm9uTW91c2VEb3duKGV2ZW50KSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpID0+IHRoaXMub25Nb3VzZVVwKGV2ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBNb3VzZS5idXR0b25zLnNldChldmVudC5idXR0b24sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChNb3VzZS5idXR0b25zLmhhcyhldmVudC5idXR0b24pKSB7XHJcbiAgICAgICAgICAgIE1vdXNlLmJ1dHRvbnMuc2V0KGV2ZW50LmJ1dHRvbiwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNQcmVzc2VkKGJ1dHRvbjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1vdXNlLmJ1dHRvbnMuaGFzKGJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZShtb3VzZVBvc2l0aW9uOiBQb2ludCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RNb3VzZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMueERpZmYgPSBtb3VzZVBvc2l0aW9uLnggLSB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIHRoaXMueURpZmYgPSBtb3VzZVBvc2l0aW9uLnkgLSB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3RNb3VzZVBvc2l0aW9uID0gbW91c2VQb3NpdGlvbjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHRyYW5zZm9ybTogVHJhbnNmb3JtLFxyXG4gICAgICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyB0aWxlc2V0PzogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyB0aWxlc2V0VHJhbnNmb3JtOiBUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZW1wdHlcclxuICAgICkge1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYXJlLXRyYW5zZm9ybXMtZXF1YWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FyZS10cmFuc2Zvcm1zLW92ZXJsYXBwaW5nJztcclxuZXhwb3J0ICogZnJvbSAnLi9jdXJyZW50LXZpZXdwb3J0LWdyaWQtc3F1YXJlJztcclxuZXhwb3J0ICogZnJvbSAnLi9pcy1jYW52YXMtZW1wdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL2lzLWNvb3JkaW5hdGUtY29udGFpbmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9pcy10cmFuc2Zvcm0tZW1wdHknO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjcmVlbi10by13b3JsZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vd29ybGQtdG8tc2NyZWVuJzsiLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9wcmltaXRpdmVzL3RyYW5zZm9ybSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJlVHJhbnNmb3Jtc0VxdWFsKHNvdXJjZVRyYW5zZm9ybTogVHJhbnNmb3JtLCB0YXJnZXRUcmFuc2Zvcm06IFRyYW5zZm9ybSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHNvdXJjZVRyYW5zZm9ybS54ID09PSB0YXJnZXRUcmFuc2Zvcm0ueCAmJiBzb3VyY2VUcmFuc2Zvcm0ueSA9PT0gdGFyZ2V0VHJhbnNmb3JtLnkgJiYgc291cmNlVHJhbnNmb3JtLndpZHRoID09PSB0YXJnZXRUcmFuc2Zvcm0ud2lkdGggJiYgc291cmNlVHJhbnNmb3JtLmhlaWdodCA9PT0gdGFyZ2V0VHJhbnNmb3JtLmhlaWdodDtcclxufSIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuaW1wb3J0IHsgaXNDb29yZGluYXRlQ29udGFpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9pcy1jb29yZGluYXRlLWNvbnRhaW5lZCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJlVHJhbnNmb3Jtc092ZXJsYXBwaW5nKHNvdXJjZVRyYW5zZm9ybTogVHJhbnNmb3JtLCB0YXJnZXRUcmFuc2Zvcm06IFRyYW5zZm9ybSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGlzQ29vcmRpbmF0ZUNvbnRhaW5lZChuZXcgUG9pbnQoc291cmNlVHJhbnNmb3JtLngsIHNvdXJjZVRyYW5zZm9ybS55KSwgdGFyZ2V0VHJhbnNmb3JtKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Nvb3JkaW5hdGVDb250YWluZWQobmV3IFBvaW50KHNvdXJjZVRyYW5zZm9ybS54ICsgc291cmNlVHJhbnNmb3JtLndpZHRoLCBzb3VyY2VUcmFuc2Zvcm0ueSksIHRhcmdldFRyYW5zZm9ybSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNDb29yZGluYXRlQ29udGFpbmVkKG5ldyBQb2ludChzb3VyY2VUcmFuc2Zvcm0ueCwgc291cmNlVHJhbnNmb3JtLnkgKyBzb3VyY2VUcmFuc2Zvcm0uaGVpZ2h0KSwgdGFyZ2V0VHJhbnNmb3JtKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Nvb3JkaW5hdGVDb250YWluZWQobmV3IFBvaW50KHNvdXJjZVRyYW5zZm9ybS54ICsgc291cmNlVHJhbnNmb3JtLndpZHRoLCBzb3VyY2VUcmFuc2Zvcm0ueSArIHNvdXJjZVRyYW5zZm9ybS5oZWlnaHQpLCB0YXJnZXRUcmFuc2Zvcm0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2NvcmUvY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRXb3JsZFBvc2l0aW9uKHBvaW50OiBQb2ludCk6IFBvaW50IHtcclxuICAgIGxldCBncmlkQ29vcmRpbmF0ZXMgPSBuZXcgUG9pbnQoMCwgMCk7XHJcbiAgICBcclxuICAgIGdyaWRDb29yZGluYXRlcy54ID0gTWF0aC5mbG9vcihwb2ludC54IC8gQ29uZmlndXJhdGlvbi5ncmlkU3F1YXJlU2l6ZSk7XHJcbiAgICBncmlkQ29vcmRpbmF0ZXMueSA9IE1hdGguZmxvb3IocG9pbnQueSAvIENvbmZpZ3VyYXRpb24uZ3JpZFNxdWFyZVNpemUpO1xyXG5cclxuICAgIHJldHVybiBncmlkQ29vcmRpbmF0ZXM7XHJcbn0iLCIvKipcclxuICogSXRlcmF0ZXMgdGhlIGltYWdlIGRhdGEgb2YgdGhlIGNhbnZhcyB0byBkZXRlcm1pbmUgaWYgdGhlIGNhbnZhc1xyXG4gKiBpcyBlbXB0eSBvciBub3QuXHJcbiAqIEBwYXJhbSBjYW52YXMgVGhlIGNhbnZhcyB0byBjaGVjayBpZiBpdCBpcyBlbXB0eS5cclxuICogXHJcbiAqIEBhdXRob3IgTlNTdXJlXHJcbiAqIEBzaW5jZSAxMS8xMC8yMDIwXHJcbiAqIFxyXG4gKiBSZWYgLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzM4NjcwNy9ob3ctdG8tY2hlY2staWYtYS1jYW52YXMtaXMtYmxhbmtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0NhbnZhc0JsYW5rKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBcclxuICAgIGNvbnN0IHBpeGVsQnVmZmVyID0gbmV3IFVpbnQzMkFycmF5KFxyXG4gICAgICBjb250ZXh0IS5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KS5kYXRhLmJ1ZmZlclxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gIXBpeGVsQnVmZmVyLnNvbWUoY29sb3IgPT4gY29sb3IgIT09IDApO1xyXG4gIH0iLCJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICcuLi9wcmltaXRpdmVzL3RyYW5zZm9ybSc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIHRyYW5zZm9ybSBvYmplY3QgaXMgZW1wdHkuIE1lYW5pbmcgdGhlIHgsIHksIHdpZHRoLCBhbmQgaGVpZ2h0XHJcbiAqIHZhbHVlcyBhcmUgYWxsIHplcm8uXHJcbiAqIFxyXG4gKiBAcGFyYW0gdHJhbnNmb3JtIFRoZSB0cmFuc2Zvcm0gdG8gY2hlY2sgaWYgaXQgaXMgZW1wdHkuXHJcbiAqIFxyXG4gKiBAYXV0aG9yIE5TU3VyZVxyXG4gKiBAc2luY2UgMTEvMTIvMjAyMFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNmb3JtRW1wdHkodHJhbnNmb3JtOiBUcmFuc2Zvcm0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cmFuc2Zvcm0ueCA9PT0gMCAmJiB0cmFuc2Zvcm0ueSA9PT0gMCAmJiB0cmFuc2Zvcm0ud2lkdGggPT09IDAgJiYgdHJhbnNmb3JtLmhlaWdodCA9PT0gMFxyXG59IiwiaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSAnLi4vZ3JhcGhpY3MvY2FtZXJhJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JlZW5Ub1dvcmxkKGNhbWVyYTogQ2FtZXJhLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHt4OiB4ICsgY2FtZXJhLnZpZXdwb3J0LngsIHk6IHkgKyBjYW1lcmEudmlld3BvcnQueX07XHJcbiAgfSIsImltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2dyYXBoaWNzL2NhbWVyYSc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd29ybGRUb1NjcmVlbihjYW1lcmE6IENhbWVyYSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb2ludCB7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHggLSBjYW1lcmEudmlld3BvcnQueCwgeSAtIGNhbWVyYS52aWV3cG9ydC55KTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vbG9nZ2VyJzsiLCJleHBvcnQgKiBmcm9tICcuL3JldHVybnMvbG9hZC1zY2VuZS1yZXR1cm4nOyIsImV4cG9ydCAqIGZyb20gJy4vY29sbGlzaW9uL2NvbGxpZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb2xsaXNpb24vc3F1YXJlLWNvbGxpZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9waHlzaWNzJzsiLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi9sb2dnaW5nL2xvZ2dlcic7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vLi4vcHJpbWl0aXZlcy9wb2ludCc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMvdHJhbnNmb3JtJztcclxuaW1wb3J0IENvbGxpZGVyIGZyb20gJy4uLy4uL3BoeXNpY3MvY29sbGlzaW9uL2NvbGxpZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNxdWFyZUNvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXIge1xyXG4gICAgcG9pbnRzOiBBcnJheTxQb2ludD4gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm06IFRyYW5zZm9ybSkge1xyXG4gICAgICAgIHN1cGVyKHRyYW5zZm9ybSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG5cclxuICAgICAgICAvLyBUb3AgbGVmdC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkpKTtcclxuXHJcbiAgICAgICAgLy8gVG9wIHJpZ2h0LlxyXG4gICAgICAgIHRoaXMucG9pbnRzLnB1c2gobmV3IFBvaW50KHRyYW5zZm9ybS54ICsgdHJhbnNmb3JtLndpZHRoLCB0cmFuc2Zvcm0ueSkpO1xyXG5cclxuICAgICAgICAvLyBCb3R0b20gbGVmdC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCwgdHJhbnNmb3JtLnkgKyB0cmFuc2Zvcm0uaGVpZ2h0KSk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSByaWdodC5cclxuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKG5ldyBQb2ludCh0cmFuc2Zvcm0ueCArIHRyYW5zZm9ybS53aWR0aCwgdHJhbnNmb3JtLnkgKyB0cmFuc2Zvcm0uaGVpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29sbGlzaW9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgTG9nZ2VyLmluZm8oJ1NxdWFyZSBjb2xsaWRlciB0cmlnZ2VyIGVudGVyJywgdGhpcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Db2xsaXNpb25MZWF2ZSgpOiB2b2lkIHtcclxuICAgICAgICBMb2dnZXIuaW5mbygnU3F1YXJlIGNvbGxpZGVyIHRyaWdnZXIgbGVhdmUnLCB0aGlzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vY29sbGlzaW9uL2NvbGxpZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyBHUkFWSVRBVElPTkFMX0NPTlNUQU5UOiBudW1iZXIgPSA5Ljg7XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbGxpZGVyczogQXJyYXk8Q29sbGlkZXI+ID0gbmV3IEFycmF5KCk7XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL3BvaW50JztcclxuZXhwb3J0ICogZnJvbSAnLi90cmFuc2Zvcm0nOyIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9tYW5pZmVzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUnOyIsImV4cG9ydCBjbGFzcyBNYW5pZmVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzY2VuZXM6IEFycmF5PHN0cmluZz5cclxuICAgICkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICcuLi9ncmFwaGljcy9sYXllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcm93czogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBjb2x1bW5zOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHRpbGVTaXplOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHRpbGVzZXRzOiBBcnJheTxzdHJpbmc+ID0gW10sXHJcbiAgICAgICAgcHVibGljIHRpbGVtYXA6IGFueSA9IHt9LFxyXG4gICAgICAgIHB1YmxpYyBlbnRpdGllczogQXJyYXk8YW55PiA9IFtdLFxyXG4gICAgICAgIHB1YmxpYyBsYXllcnM6IEFycmF5PExheWVyPiA9IFtdLFxyXG4gICAgICAgIHB1YmxpYyBlbnRpdHlNYW5pZmVzdHM6IEFycmF5PGFueT4gPSBbXVxyXG4gICAgICAgICkge1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0ZS1tYW5hZ2VyJzsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBkYXRhOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbW1pdDxUVHlwZT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUVHlwZSkge1xyXG4gICAgICAgIFN0YXRlTWFuYWdlci5kYXRhLnNldChrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldDxUVHlwZT4oa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoU3RhdGVNYW5hZ2VyLmRhdGEuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxUVHlwZT5TdGF0ZU1hbmFnZXIuZGF0YS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZXhpc3RzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFN0YXRlTWFuYWdlci5kYXRhLmhhcyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFN0YXRlTWFuYWdlci5kYXRhLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIFN0YXRlTWFuYWdlci5kYXRhLmRlbGV0ZShrZXkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb2xsaXNpb24vY29sbGlzaW9uLWRpcmVjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29sbGlzaW9uL2NvbGxpc2lvbi1zeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjcmlwdC9TY3JpcHRTeXN0ZW0nO1xyXG5leHBvcnQgKiBmcm9tICcuL3NjcmlwdC9TY3JpcHRhYmxlRW50aXR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9zeXN0ZW0nOyIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL3NjZW5lL2VudGl0eSc7XHJcblxyXG4vKipcclxuICogVXNlciBpbmhlcml0cyB0aGlzIG9uIHRoZSBzY3JpcHQgY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY3JpcHRhYmxlRW50aXR5IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBzZXQgYnkgdGhlIHNjcmlwdCBzeXN0ZW0gd2hlbiBpbnN0YW50aWF0aW5nIHRoZSBzY3JpcHRhYmxlIGVudGl0eS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGVudGl0eSE6IEVudGl0eTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVkIHdoZW4gdGhlIHNjcmlwdCBpbnN0YW5jZSBpcyBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DcmVhdGUoKTogc3RyaW5nIHwgdm9pZCB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGVkIGV2ZXJ5IGl0ZXJhdGlvbiBvZiB0aGUgbWFpbiBsb29wLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHN0cmluZyB8IHZvaWQge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBlbnRpdHkgaGFzIGEgdHJpZ2dlciBjb2xsaWRlciBhbmQgaW50ZXJhY3RzIHdpdGggYW5vdGhlciBjb2xsaWRlci5cclxuICAgICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0aGF0IGZpcmVkIHRoZSBlbnRlciB0cmlnZ2VyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25UcmlnZ2VyRW50ZXIoZW50aXR5OiBFbnRpdHkpOiB2b2lkIHt9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmlyZXMgd2hlbiB0aGUgZW50aXR5IGhhcyBhIHRyaWdnZXIgY29sbGlkZXIgYW5kIGludGVyYWN0cyB3aXRoIGFub3RoZXIgY29sbGlkZXIuXHJcbiAgICAgKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgdGhlIGZpcmUgdGhlIGxlYXZlIHRyaWdnZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblRyaWdnZXJMZWF2ZShlbnRpdHk6IEVudGl0eSk6IHZvaWQge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlcyB3aGVuIHRoZSBlbnRpdHkgaGFzIGEgdHJpZ2dlciBjb2xsaWRlciBhbmQgaW50ZXJhY3RzIHdpdGggYW5vdGhlciBjb2xsaWRlci5cclxuICAgICAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSB0aGF0IGZpcmVkIHRoZSBzdGF5IHRyaWdnZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblRyaWdnZXJTdGF5KGVudGl0eTogRW50aXR5KTogdm9pZCB7fTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgY29tcG9uZW50IHRvIHRoZSBlbnRpdHkgYXNzb2NpYXRlZCB3aXRoIHRoZSBzY3JpcHQuXHJcbiAgICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gYWRkIHRvIHRoZSBlbnRpdHkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29tcG9uZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVudGl0eS5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSBjb21wb25lbnQgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGZyb20gdGhlIGVudGl0eSBhc3NvY2lhdGVkIHdpdGggdGhlIHNjcmlwdC4gSWYgbm8gY29tcG9uZW50IGlzIGZvdW5kIHRoZW5cclxuICAgICAqIG51bGwgd2lsbCBiZSByZXR1cm4uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBnZXQgZnJvbSB0aGUgZW50aXR5LlxyXG4gICAgICogQHJldHVybnMgVGhlIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQ8VENvbXBvbmVudD4oY29tcG9uZW50VHlwZTogYW55KTogVENvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXR5LmdldENvbXBvbmVudChjb21wb25lbnRUeXBlKSBhcyBUQ29tcG9uZW50O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==