<template>
	<div class="scene-hierarchy-component" v-if="entities && entity">
		<div class="scene-editor-panel-header is-shadowed">
			<span class="title">Scene Hierarchy</span>
			<div class="actions">
				<button type="button" @click="toggleAddMode()">
					<i class="fa fa-plus"></i>
				</button>
			</div>
		</div>
		<div class="tree-component" v-if="entities">
			<ul>
				<li v-for="existingEntity in entities" :key="existingEntity.id" @click="selectEntity(existingEntity)" v-bind:class="{ selected: entity.id === existingEntity.id }">
					<i class="fa fa-cube"></i>&nbsp;
					<span>{{ getName(existingEntity) }}</span>
					<tree v-if="existingEntity.children" :entities="existingEntity.children"></tree>
				</li>
			</ul>
		</div>
		<modal v-if="isAddingEntity" :is-open="isAddingEntity" :title="'New Entity'" :modal-size="'modal-sm'" @on-modal-saved="save()" @on-modal-closed="isAddingEntity = false">
			<div class="entity-form">
				<div class="form-section">
					<div class="form-label">Entity Name</div>
					<input type="text" v-model="pendingEntity.name" placeholder="Enter an entity name" />
				</div>
				<div>
					<div class="checkbox">
						<input type="checkbox" id="is-entity-enabled" name="is-entity-enabled" v-model="pendingEntity.enabled" />
						<label for="is-entity-enabled">Enabled</label>
					</div>
				</div>
			</div>
		</modal>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import CameraComponent from '../../../engine/src/components/camera/CameraComponent';
import Entity from '../../../engine/src/components/entity';
import EntityManager from '../../../engine/src/components/EntityManager';
import TagComponent from '../../../engine/src/components/tag/TagComponent';
import Modal from './Modal.vue';

@Component({
	components: {
		Modal
	}
})
export default class SceneHierarchy extends Vue {
  // Store state.
	@State scene;
	@State entity;

	// Store actions.
	@Action setEntity;

	private isAddingEntity: boolean = false;
	private entities: Entity[] = [];
	private pendingEntity: Entity = new Entity();

	toggleAddMode(): void {
		this.isAddingEntity = true;
	}

	save(): void {
		EntityManager.getInstance().create();
	}

	selectEntity(entity: Entity): void {
		this.setEntity(entity);
		this.$emit('on-entity-selected');
	}

	getName(entity: Entity): string {
		console.log(entity);

		let tagComponent: TagComponent = entity.getComponent<TagComponent>(TagComponent);
		
		if (tagComponent) {
			return tagComponent.name.charAt(0).toUpperCase() + tagComponent.name.slice(1);
		}

		return 'Entity';
	}

	@Watch('scene', { immediate: true })
	onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
		if (newValue) {
			this.entities = EntityManager.getInstance().entities;
			this.selectEntity(this.entities[0]);
		}
	}
}
</script>

<style lang="scss" scoped>
.scene-hierarchy-component {
	flex: 1;
}
</style>
