<template>
  <div class="scene-hierarchy-component" v-if="entities">
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
        <li v-for="entity in entities" :key="entity.id" @click="selectEntity(entity)" v-bind:class="{ 'selected': selectedEntity.id === entity.id }">
            <i class="fa fa-cube"></i>&nbsp;
            <span>{{getName(entity)}}</span>
            <tree v-if="entity.children" :entities="entity.children"></tree>
        </li>
      </ul>
    </div>
    <modal v-if="isAddingEntity" :is-open="isAddingEntity" :title="'New Entity'" :modal-size="'modal-sm'" @on-modal-saved="save()" @on-modal-closed="isAddingEntity = false">
      <div class="entity-form">
        <div class="form-section">
          <div class="form-label">Entity Name</div>
          <input type="text" v-model="entity.name" placeholder="Enter an entity name" />
        </div>
        <div>
          <div class="checkbox">
            <input type="checkbox" id="is-entity-enabled" name="is-entity-enabled" v-model="entity.enabled" />
            <label for="is-entity-enabled">Enabled</label>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import CameraComponent from "../../../engine/src/components/camera/CameraComponent";
import Entity from "../../../engine/src/components/entity";
import TagComponent from "../../../engine/src/components/tag/TagComponent";
import EngineConfig from "../../../engine/src/engine-config";
import EditorGlobal from "../editor-global";
import ProjectStorageService from "../services/project-storage.service";
import Modal from './Modal.vue';

@Component({
  components: {
    Modal
  }
})
export default class SceneHierarchy extends Vue {
  @Prop() entities: Entity[];

  isAddingEntity: boolean = false;

  entity: Entity = null;

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

  toggleAddMode(): void {
    this.entity = new Entity();
    this.isAddingEntity = true;
  }

  save(): void {
    console.log(EditorGlobal.scene);
    
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