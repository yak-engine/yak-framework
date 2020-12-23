<template>
  <div class="modal-overlay" :class="{'open': isOpen}" style="z-index: 999">
    <div class="modal" :class="modalSize">
      <div class="modal-header flex flex-r justify-content-between">
        <span class="modal-title">{{title}}</span>
        <div class="modal-actions">
          <div role="button" tabindex="0" @click="closeModal()">
              <i class="fa fa-close fa-lg text-red"></i>
          </div>
        </div>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer flex justify-content-between">
        <button type="button" class="button fill-green-darken-1 text-white" @click="$emit('on-modal-saved')">Save</button>
        <button type="button" class="button fill-transparent text-red dangerous-action" @click="closeModal()">Close</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  @Prop() title: string;
  @Prop() isOpen: boolean;
  @Prop() modalSize: string;

  closeModal(): void {
    this.$emit('on-modal-closed');
  }
};

</script>

<style scoped lang="scss">

</style>