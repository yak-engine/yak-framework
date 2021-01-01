<template>
	<div class="inspector-component">
		<div class="scene-editor-panel-header">
			<span class="title"><i class="fa fa-cube fa-lg"></i> Inspector</span>
			<div class="actions">
				<button type="button" @click="toggleAddMode()">
					<i class="fa fa-plus"></i>
				</button>
			</div>
		</div>
		<div class="inspector-body">
			<component-template v-for="(entityComponent, index) in entityComponents" :key="index" :entity-component="entityComponent">
				
			</component-template>
		</div>
		<modal v-if="isAddingComponent" :is-open="isAddingComponent" :title="'Add new component'" :modal-size="'modal-sm'" @on-modal-saved="save()" @on-modal-closed="isAddingComponent = false">
			<div class="entity-form">
				<div class="form-section">
					<div class="form-label">Component</div>
					<select>
						<option v-for="(componentName, index) in componentNames" :key="index">
							{{ componentName }}
						</option>
					</select>
				</div>
			</div>
		</modal>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import ComponentTemplate from './Inspector/ComponentTemplate.vue';
import Modal from './Modal.vue';
import { component } from 'vue/types/umd';

import Entity from '../../../engine/src/components/entity';
import Constants from '../../../engine/src/constants';
import { constants } from 'fs-extra';
import { State } from 'vuex-class';
import SceneConfig from '../../../engine/src/models/scene-config';
import EntityManager from '../../../engine/src/components/EntityManager';
import EngineMaterialComponent from '../../../engine/src/components/material/MaterialComponent';

@Component({
	components: {
		Modal,
		ComponentTemplate
	}
})
export default class Inspector extends Vue {
	@State entity: Entity;
	@State scene: SceneConfig;

	entityComponents: Array<any> = [];

	isAddingComponent: boolean = false;

	get componentNames(): string[] {
		return Constants.componentNames;
	}

	bootstrapAvailableComponents(): void {
		this.entityComponents = Constants.componentNames.filter((componentName) => {
			return this.entity.getComponent<any>(componentName) !== null;
		})
		.map((componentName) => {
			let componentInstance = this.entity.getComponent<any>(componentName);

			return {
				componentInstance: componentInstance,
				componentName: componentName
			};
		});
	}

	toggleAddMode(): void {
		this.isAddingComponent = true;
	}

	save(): void {
		this.entity.addComponent(new EngineMaterialComponent('white', 0));
		this.scene.name = 'test';
	}

	@Watch('entity', { immediate: true })
	onEntityChanged(newValue: any, oldValue: any): void {
		if(newValue) {
			this.bootstrapAvailableComponents();
		}
	}
}
</script>

<style lang="scss" scoped>
.inspector-component {
	flex: 1;
	
	.inspector-body {
	padding: 15px;
	}
}
</style>
