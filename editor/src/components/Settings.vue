<template>
  <div class="settings-component" v-if="editorSettings && isOpen">
    <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
      <div class="modal">
        <div class="modal-header flex flex-r justify-content-between">
          <span class="modal-title">Settings</span>
          <div class="modal-actions">
            <div role="button" tabindex="0" @click="$emit('on-settings-closed')">
                <i class="fa fa-close fa-lg text-red"></i>
            </div>
          </div>
        </div>
        <div class="modal-content">
          <div class="form-section">
            <div class="form-label">Default project path</div>
            <span>{{editorSettings.defaultProjectPath || 'N/A'}}</span>
            <directory-dialog @on-directory-selected="editorSettings.defaultProjectPath = $event"></directory-dialog>
          </div>
          <div class="form-section">
            <div class="form-label">Last project path</div>
            <span>{{editorSettings.lastProjectPath || 'N/A'}}</span>
          </div>
          <div class="form-section">
            <div class="form-label">Window state</div>
            <input type="text" v-model.number="editorSettings.windowState" />
          </div>
          <div class="form-section">
            <div class="form-label">Window height</div>
            <input type="number" v-model.number="editorSettings.windowHeight" />
          </div>
          <div class="form-section">
            <div class="form-label">Window width</div>
            <input type="number" v-model.number="editorSettings.windowWidth" />
          </div>
          <div class="button-group">
            <button type="button" class="button fill-green-darken-1 text-white" @click="save()">Save settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import SettingsStorageService from '../services/settings-storage.service';
import EditorSettings from '../models/editor-settings';

import DirectoryDialog from "./DirectoryDialog.vue";

@Component({
  components: {
    DirectoryDialog
  }
})
export default class Settings extends Vue {
  @Prop() isOpen: boolean;

  editorSettings: EditorSettings = null;
  
  save(): void {
    // new SettingsStorageService().save(this.editorSettings);
  }

  @Watch('isOpen')
  onEntityChanged(newValue: any, oldValue: any): void {
    if(this.isOpen) {
      this.editorSettings = new SettingsStorageService().load() || new EditorSettings();
    }
  }
};

</script>

<style scoped lang="scss">

</style>