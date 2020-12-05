<template>
  <div class="component default-component">
    <main-menu></main-menu>
    <scene-editor></scene-editor>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import MainMenu from './MainMenu.vue';
import SceneEditor from './SceneEditor.vue';
import NewScene from './NewScene.vue';

@Component({
  components: {
    MainMenu,
    SceneEditor,
    NewScene
  }
})
export default class Default extends Vue {

  @Prop() private msg!: string;

  mounted(): void {
    // TODO: Fix this. This is an issue with the order in which components get added to the DOM. Add way to query template fragment.
    setTimeout(() => {
        // let modalToggleElems = document.querySelectorAll('.modal-toggle');

        // console.log(modalToggleElems);

        // (window as any).a11yModal.modalLayer = document.querySelector(`.${(window as any).a11yModal.options.modalLayerClass}`);

        // console.log((window as any).a11yModal.modalLayer);

        // modalToggleElems.forEach((modalToggleElem: HTMLElement) => {
        //     let modalTarget = modalToggleElem.dataset.target;

        //     modalToggleElem.addEventListener('click', () => {
        //         (window as any).a11yModal.open(modalTarget);
        //     });
        // });
    }, 2000);
  }
};

</script>

<style scoped lang="scss">

</style>