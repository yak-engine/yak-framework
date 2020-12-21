<template>
  <div class="tree-component" v-if="layers">
      <div class="scene-editor-panel-header is-shadowed">
        <span class="title">Manage Scene Layers</span>
        <div class="actions">
          <button type="button" @click="isManagingLayer = true;">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <ul>
          <li v-for="(layer, index) in layers" :key="index" @click="selectLayer(index)" v-bind:class="{ 'selected': selectedIndex === index }">
            <span role="button" class="btn-toggle-layer" aria-label="Toggle layer visibility" style="margin-right: 5px;">
                <i class="fa fa-eye"></i>
            </span>
            <span role="button" class="btn-lock-layer" aria-label="Lock layer for editing" style="margin-right: 5px;">
                <i class="fa fa-unlock"></i>
            </span>&nbsp;
            <span>{{layer.name}}</span>
          </li>
      </ul>
      <div class="modal-overlay" :class="{'open': isManagingLayer}" style="z-index: 999" v-if="layer">
        <div class="modal">
          <div class="modal-header flex flex-r justify-content-between">
            <span class="modal-title">Layer Configuration</span>
            <div class="modal-actions">
              <div role="button" tabindex="0" @click="isManagingLayer = false">
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
              <input type="text" v-model="layer.order" placeholder="Enter the layer order" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="button-group">
              <button type="button" class="button fill-green-darken-1 text-white" @click="save()">Save project</button>
              <button type="button" class="button fill-red-darken-1 text-white" @click="isManagingLayer = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Layer from "../../../engine/src/graphics/layer";

@Component
export default class SceneLayers extends Vue {
  @Prop() layers: Array<any>;

  layer: Layer = new Layer();
  isManagingLayer: boolean = false;

  selectedIndex: number = 0;

  selectLayer(index: number): void {
    this.selectedIndex = index;
    this.$emit('on-layer-selected', this.selectedIndex);
  }

  save(): void {
    
  }

  @Watch('layers')
  onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
    if (newValue) {
      this.selectedIndex = 0;
    }
  }
};

</script>

<style lang="scss" scoped>

</style>