<template>
	<div class="scene-layers-component tree-component" v-if="scene.layers">
		<div class="scene-editor-panel-header is-shadowed">
			<span class="title">Manage Scene Layers</span>
			<div class="actions">
				<button type="button" @click="toggleEditMode()">
					<i class="fa fa-gear"></i>
				</button>
				<button type="button" @click="toggleAddMode()">
					<i class="fa fa-plus"></i>
				</button>
			</div>
		</div>
		<ul>
			<li v-for="(layer, index) in scene.layers" :key="index" @click="selectLayer(index)" v-bind:class="{ selected: selectedIndex === index }">
				<span @click="toggleLayerProperty('enabled', index)" role="button" class="btn-layer-action btn-toggle-layer" aria-label="Toggle layer visibility">
					<i class="fa" :class="{ 'fa-eye': layer.enabled, 'fa-eye-slash': !layer.enabled }"></i>
				</span>
				<span @click="toggleLayerProperty('locked', index)" role="button" class="btn-layer-action btn-lock-layer" aria-label="Lock layer for editing"> <i class="fa" :class="{ 'fa-lock': layer.locked, 'fa-unlock': !layer.locked }"></i> </span>&nbsp;
				<span>{{ layer.name }}</span>
			</li>
		</ul>
		<div class="modal-overlay" :class="{ open: layer }" style="z-index: 999" v-if="layer && isManagingLayer">
			<div class="modal">
				<div class="modal-header flex flex-r justify-content-between">
					<span class="modal-title">Layer Configuration</span>
					<div class="modal-actions">
						<div role="button" tabindex="0" @click="layer = null">
							<i class="fa fa-close fa-lg text-red"></i>
						</div>
					</div>
				</div>
				<div class="modal-content">
					<div class="form-section">
						<div class="form-label">Layer name</div>
						<input type="text" v-model="layer.name" placeholder="Enter a layer name" />
					</div>
					<div class="form-section">
						<div class="form-label">Layer order</div>
						<input type="text" v-model.number="layer.order" placeholder="Enter the layer order" />
					</div>
				</div>
				<div class="modal-footer flex justify-content-between">
					<button type="button" class="button fill-green-darken-1 text-white" @click="save()">Save</button>
					<button v-if="layer.name" type="button" class="button fill-transparent text-red dangerous-action" @click="remove()">Delete</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Layer from '../../../engine/src/graphics/layer';
import Scene from '../../../engine/src/models/scene';

@Component
export default class SceneLayers extends Vue {
	@State scene: Scene;
	@Action setScene;

	layer: Layer = null;
  	selectedIndex: number = 0;
  	isManagingLayer: boolean = false;

	selectLayer(index: number): void {
		this.selectedIndex = index;
	}

	save(isDeletion: false): void {
      let index: number = this.scene.layers.findIndex(x => x.name === this.layer.name);

			if (index === -1) {
				this.scene.layers.push(this.layer);
			} else {
				this.scene.layers[this.selectedIndex] = this.layer;
			}

			this.setScene(this.scene);

			this.layer = null;
	}

	remove(): void {
		this.scene.layers.splice(this.selectedIndex, 1);
		this.setScene(this.scene);
	}

	toggleEditMode(mouseEven): void {
    this.isManagingLayer = true;
		this.layer = Object.assign({}, this.scene.layers[this.selectedIndex]);
	}

	toggleAddMode(): void {
    this.isManagingLayer = true;
		this.layer = new Layer();
	}

	toggleLayerProperty(property: string, index: number): void {
		if (this.selectedIndex !== index) {
			this.selectedIndex = index;
			this.layer = this.scene.layers[this.selectedIndex];
		}

		this.layer[property] = !this.layer[property];
    this.setScene(this.scene);
    this.layer = null;
	}

	@Watch('layers')
	onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
		if (newValue) {
			this.selectedIndex = 0;
			this.layer = this.scene.layers[this.selectedIndex];
		}
	}
}
</script>

<style lang="scss" scoped>
.scene-layers-component {
	flex: 1;
}

.btn-layer-action {
	margin-right: 10px;
}
</style>
