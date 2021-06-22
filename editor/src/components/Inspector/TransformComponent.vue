<template>
  <div class="transform-component" v-if="inspectorComponentData">
    <div class="transform-values">
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">X</div>
        <input type="text" v-model="inspectorComponentData.transform.x" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">Y</div>
        <input type="text" v-model="inspectorComponentData.transform.y" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">W</div>
        <input type="text" v-model="inspectorComponentData.transform.width" />
      </div>
      <div class="transform-value flex flex-r align-items-center">
        <div class="form-label text-small">H</div>
        <input type="text" v-model="inspectorComponentData.transform.height" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import Entity from "../../../../engine/src/components/entity";
import EntityManager from "../../../../engine/src/components/EntityManager";
import EngineTransformComponent from "../../../../engine/src/components/transform/TransformComponent";
import Transform from "../../../../engine/src/primitives/transform";

@Component
export default class TransformComponent extends Vue {
  @Prop() inspectorComponentData: EngineTransformComponent;
};

</script>

<style lang="scss" scoped>
.transform-values {
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-gap: 1em;
}

.transform-values .transform-value .form-label {
  padding-right: 10px;
}
</style>