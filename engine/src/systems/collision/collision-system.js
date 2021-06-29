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
import ColliderComponent from '../../components/ColliderComponent';
import ScriptComponent from '../../components/ScriptComponent';
import TransformComponent from '../../components/TransformComponent';
import ManagerFactory from '../../manager-factory';
import System from '../system';
import { CollisionDirection } from './collision-direction';
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
        var manager = ManagerFactory.get(ColliderComponent.name);
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
        var sourceCollider = sourceEntity.getComponent(ColliderComponent);
        var targetCollider = targetEntity.getComponent(ColliderComponent);
        var sourceTransformComponent = sourceEntity.getComponent(TransformComponent);
        var targetTransformComponent = targetEntity.getComponent(TransformComponent);
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
        var colDir = CollisionDirection.NONE;
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
                            colDir = CollisionDirection.TOP;
                            sourceTransform.y += oY;
                        }
                        else {
                            colDir = CollisionDirection.BOTTOM;
                            sourceTransform.y -= oY;
                        }
                    }
                    else {
                        if (vX > 0) {
                            colDir = CollisionDirection.LEFT;
                            sourceTransform.x += oX;
                        }
                        else {
                            colDir = CollisionDirection.RIGHT;
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
                ManagerFactory.get(ScriptComponent.name).instances;
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
}(System));
export default CollisionSystem;
