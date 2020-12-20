<template>
  <div class="tree-component" v-if="entities">
      <ul>
          <li v-for="entity in entities" :key="entity.id" @click="selectEntity(entity)" v-bind:class="{ 'selected': selectedEntity.id === entity.id }">
              <i class="fa fa-cube"></i>&nbsp;
              <span>{{getName(entity)}}</span>
              <tree v-if="entity.children" :entities="entity.children"></tree>
          </li>
      </ul>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import CameraComponent from "../../../engine/src/components/camera/CameraComponent";
import Entity from "../../../engine/src/components/entity";
import TagComponent from "../../../engine/src/components/tag/TagComponent";
import EngineConfig from "../../../engine/src/engine-config";
import ProjectStorageService from "../services/project-storage.service";

@Component
export default class SceneHierarchy extends Vue {
  @Prop() entities: Entity[];

  @Watch('entities')
  onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
    if (newValue) {
      this.selectEntity(newValue[1]);
    }
  }

  selectedEntity: any = {};
  
  get entitiesArray(): Entity[] {
      if (this.entities) {
        return this.entities;
      }

      return [];
  }

  selectEntity(entity: Entity): void {
    this.selectedEntity = entity;
    this.$emit('on-entity-selected', this.selectedEntity);
  }

  getName(entity: Entity): string {
    if (entity.getComponent<CameraComponent>(CameraComponent.name)) {
        return 'Camera';
    }
    else {
      let tagComponent: TagComponent = entity.getComponent<TagComponent>(TagComponent.name);
      console.log(tagComponent);
      return tagComponent.name.charAt(0).toUpperCase() + tagComponent.name.slice(1);
    }
  }
};

</script>

<style lang="scss" scoped>

</style>