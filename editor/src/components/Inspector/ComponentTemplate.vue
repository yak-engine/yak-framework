<template>
	<div class="component-template">
		<div class="flex flex-r justify-content-between align-items-center" style="padding-bottom: 10px; font-weight: bold; margin-bottom: 5px;">
			<span>{{entityComponent.componentName}}</span>
			<button type="button" class="fill-transparent" aria-label="Remove component" @click="removeComponent(entityComponent)">
                <i class="fa fa-trash text-red-lighten-2"></i>
            </button>
		</div>
		<component :key="entityComponent.componentName" :is="entityComponent.componentName" :inspector-component-data="entityComponent.componentInstance" style="margin-bottom: 30px;"></component>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import TagComponent from './TagComponent.vue';
import TransformComponent from './TransformComponent.vue';
import CameraComponent from './CameraComponent.vue';
import ColliderComponent from './ColliderComponent.vue';
import MaterialComponent from './MaterialComponent.vue';
import SpriteRendererComponent from './SpriteRendererComponent.vue';
import TilemapComponent from './TilemapComponent.vue';
import EntityManager from '../../../../engine/src/components/EntityManager';
import ManagerFactory from '../../../../engine/src/components/ManagerFactory';
import { State } from 'vuex-class';
import Entity from '../../../../engine/src/components/entity';
import ComponentManager from '../../../../engine/src/components/ComponentManager';
import EngineComponent from '../../../../engine/src/components/Component';
import Scene from '../../../../engine/src/models/scene';
import BaseComponent from '../BaseComponent';

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
	@Prop() entityComponent: string;

	@State entity: Entity;

	removeComponent(entityComponent: any): void {
		this.entity.removeComponent(entityComponent.componentName);
		this.saveCurrentScene();
	}
}
</script>

<style></style>
