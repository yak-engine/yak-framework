<template>
  <div class="tree-component" v-if="layers">
      <ul>
          <li v-for="(layer, index) in layers" :key="index" @click="selectLayer(index)" v-bind:class="{ 'selected': selectedIndex === index }">
              <i class="fa fa-cube"></i>&nbsp;
              <span>{{layer.name}}</span>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class SceneLayers extends Vue {
  @Prop() layers: Array<any>;

  selectedIndex: number = 0;

  selectLayer(index: number): void {
    this.selectedIndex = index;
    this.$emit('on-layer-selected', this.selectedIndex);
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