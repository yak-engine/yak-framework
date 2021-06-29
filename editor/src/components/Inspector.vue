<template>
	<div class="inspector-component">
		<div class="scene-editor-panel-header">
			<span class="title"><i class="fa fa-cube fa-lg"></i> Inspector</span>
			<div class="actions">
				<button type="button" @click="isAddingComponent = true">
					<i class="fa fa-plus"></i>
				</button>
			</div>
		</div>
		<div class="inspector-body">
			<component-template v-for="(componentInstance, index) in componentInstances" :key="index" :instance="componentInstance"></component-template>
		</div>
		<modal v-if="isAddingComponent" :is-open="isAddingComponent" :title="'Add new component'" :modal-size="'modal-sm'" @on-modal-saved="save()" @on-modal-closed="isAddingComponent = false">
			<div class="entity-form">
				<select>
					<option v-for="(componentName, index) in componentNames" :key="index">
						{{ componentName.split('Component')[0].split(/(?=[A-Z])/).join(' ') }}
					</option>
				</select>
			</div>
		</modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ComponentTemplate from './Inspector/ComponentTemplate.vue';
import Modal from './Modal.vue';
import Constants from '../../../engine/src/constants';
import { State } from 'vuex-class';
import EngineMaterialComponent from '../../../engine/src/components/MaterialComponent';
import BaseComponent from '../../../engine/src/components/component';
import Scene from '../../../engine/src/models/scene';
import Entity from '../../../engine/src/models/entity';
import EntityManager from '../../../engine/src/entity-manager';

@Component({
	components: {
		Modal,
		ComponentTemplate
	}
})
export default class Inspector extends Vue {
	@State entity: Entity;
	@State scene: Scene;

	/**
	 * All of the 
	 */
	componentInstances: Array<BaseComponent> = [];

	isAddingComponent: boolean = false;

	get componentNames(): string[] {
		return Constants.componentTypes.map((componentType) => componentType.name);
	}

	save(): void {
		this.entity.addComponent(new EngineMaterialComponent('white', 0));
		this.scene.name = 'test';
	}

	/**
	 * When the currently selected entity changes ensure we update the inspector with the 
	 * components associated with the given entity.
	 */
	@Watch('entity', { immediate: true })
	onEntityChanged(newValue: any, oldValue: any): void {
		if(newValue) {
			this.componentInstances = EntityManager.getInstance().getComponents(this.entity);
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
