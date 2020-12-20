<template>
  <div class="inspector-component">
    <component 
      v-for="entityComponent in entityComponents" 
      :key="entityComponent.componentName" 
      :is="entityComponent.componentName" 
      :inspector-component-data="entityComponent.componentInstance" 
      style="margin-bottom: 30px;">
    </component>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import TagComponent from './Inspector/TagComponent.vue';
import TransformComponent from './Inspector/TransformComponent.vue';
import CameraComponent from './Inspector/CameraComponent.vue';
import ColliderComponent from './Inspector/ColliderComponent.vue';
import MaterialComponent from './Inspector/MaterialComponent.vue';
import SpriteRendererComponent from './Inspector/SpriteRendererComponent.vue';
import TilemapComponent from './Inspector/TilemapComponent.vue';
import { component } from "vue/types/umd";

import Entity from "../../../engine/src/components/entity";
import Constants from "../../../engine/src/constants";
import { constants } from "fs-extra";

@Component({
  components: {
    TagComponent,
    TransformComponent,
    CameraComponent,
    ColliderComponent,
    MaterialComponent,
    SpriteRendererComponent,
    TilemapComponent
  }
})
export default class Inspector extends Vue {
  @Prop() entity: Entity;

  entityComponents: Array<any> = [];

  bootstrapAvailableComponents(): void {
    this.entityComponents = Constants.componentNames.filter((componentName) => {
       return this.entity.getComponent<any>(componentName) !== null;
    }).map((componentName) => {
      let componentInstance = this.entity.getComponent<any>(componentName);

      return {
        componentInstance: componentInstance,
        componentName: componentName
      };
    });

    console.log(this.entityComponents);
  }

  @Watch('entity')
  onEntityChanged(newValue: any, oldValue: any): void {
    this.bootstrapAvailableComponents();
  }
};

</script>

<style>
.inspector-component {
  padding: 15px;
}
</style>