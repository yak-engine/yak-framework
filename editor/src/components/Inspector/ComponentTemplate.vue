<template>
	<div class="component-template">
		<div class="flex flex-r justify-content-between align-items-center" style="padding-bottom: 10px; font-weight: bold; margin-bottom: 5px;">
			<span>{{instance.constructor.name}}</span>
			<button type="button" class="fill-transparent" aria-label="Remove component" @click="removeComponent(instance)">
                <i class="fa fa-trash text-red-lighten-2"></i>
            </button>
		</div>
		<component :key="instance.constructor.name" :is="instance.constructor.name" :inspector-component-data="instance" style="margin-bottom: 30px;"></component>
	</div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';

import TagComponent from './TagComponent.vue';
import TransformComponent from './TransformComponent.vue';
import CameraComponent from './CameraComponent.vue';
import ColliderComponent from './ColliderComponent.vue';
import MaterialComponent from './MaterialComponent.vue';
import SpriteRendererComponent from './SpriteRendererComponent.vue';
import TilemapComponent from './TilemapComponent.vue';
import BaseComponent from '../BaseComponent';
import EngineComponent from '../../../../engine/src/components/component';
import Entity from '../../../../engine/src/models/entity';

@Component({
    components: {
        TagComponent,
		TransformComponent,
		CameraComponent,
		ColliderComponent,
		MaterialComponent,
		SpriteRendererComponent,
    	TilemapComponent,
    }
})
export default class ComponentTemplate extends BaseComponent {
	@Prop() instance: EngineComponent;

	@State entity: Entity;

	removeComponent(entityComponent: any): void {
		// this.entity.removeComponent(entityComponent.componentName);
		this.saveCurrentScene();
	}
}
</script>

<style></style>
