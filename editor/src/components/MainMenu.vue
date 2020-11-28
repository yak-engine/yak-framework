<template>
  <div class="main-menu-component" ref="mainMenu">
    <div class="mb-0 fill-dark text-light is-shadowed" style="z-index: 1000; border-bottom: 1px solid black;">
        <div class="">
            <ul class="nav nav-menu">
                <div class="nav-left">
                    <ul class="nav-item">
                        <li class="menu-item item-has-children">
                            <div role="button" tabindex="0" class="dropdown-toggle" @click="toggleDropdown($event)">File</div>
                            <ul class="sub-menu">
                                <li>
                                    <div role="button" tabindex="0" @click="isAddingScene = true">New scene</div>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item item-has-children">
                            <div role="button" tabindex="0" class="dropdown-toggle" @click="toggleDropdown($event)">View</div>
                            <ul class="sub-menu">
                                <li>
                                    <div>
                                        <input type="checkbox" id="toggle-layer-highlighting" name="toggle-layer-highlighting" class="chk-highlight-current-layer" />
                                        <label for="toggle-layer-highlighting">Toggle layer highlighting</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <div role="button" tabindex="0" y-ref="/options">Options</div>
                        </li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul class="nav-item">
                        <li class="menu-item">
                            <div role="button" tabindex="0" class="btn-play" @click="isPlaying = true">
                                <i class="fa fa-play text-green-darken-2 mr-default"></i>
                                <span class="text-white">PLAY</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>

    <play :is-visible="isPlaying" v-on:on-play-stopped="isPlaying = false"></play>
    <new-scene :is-open="isAddingScene" @on-new-scene-saved="isAddingScene = false" @on-new-scene-cancelled="isAddingScene = false"></new-scene>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Play from './Play.vue';
import NewScene from './NewScene.vue';

@Component({
    components: {
        Play,
        NewScene
    }
})
export default class MainMenu extends Vue {
  @Prop() private msg!: string;

  public isPlaying: boolean = false;
  public isAddingScene: boolean = false;

  constructor() {
      super();

      document.addEventListener('click', (event: MouseEvent) => {
          let mainMenu = <HTMLElement>this.$refs.mainMenu;

          console.log(mainMenu.contains(<HTMLElement>event.target));

          if (!mainMenu.contains(<HTMLElement>event.target)) {
              mainMenu.querySelectorAll('.menu-item.item-has-children.expanded').forEach((expandedMenuItem) => {
                  expandedMenuItem.classList.remove('expanded');
              })
          }
      })
  }

  toggleDropdown(event: MouseEvent) {
      let target = <HTMLElement>event.target;

      if (target.parentElement.classList.contains('item-has-children')) {
          target.parentElement.classList.add('expanded');
      }
  }
}
</script>

<style scoped lang="scss">

</style>