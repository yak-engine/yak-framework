<template>
  <div class="directory-dialog-component">
    <button type="button" @click="selectTargetPath()">Browse</button>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import { app, OpenDialogReturnValue } from "electron/main";

@Component
export default class DirectoryDialog extends Vue {

  async selectTargetPath(): Promise<void> {
    let results: OpenDialogReturnValue = await window.electron.dialog.showOpenDialog({
        properties: ['openDirectory']
    });

    if (results) {
      this.$emit('on-directory-selected', results.filePaths[0])
    }
  }
};

</script>

<style scoped lang="scss">

</style>