<template>
  <div class="camera-component">
    <div class="text-default" style="padding-bottom: 5px; font-weight: bold; margin-bottom: 5px;">
      <i class="fa fa-map" style="margin-right: 10px;"></i>
      <span>Tilemap</span>  
    </div>
    Not yet implemented
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TilemapComponent extends Vue {
  @Prop() inspectorComponentData: string;
};

</script>

<style>

</style>