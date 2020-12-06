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
                                    <div role="button" tabindex="0" @click="isAddingProject = true">New project</div>
                                </li>
                                <li>
                                    <div role="button" tabindex="0" @click="$emit('on-open-project')">Open project</div>
                                </li>
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
                <div class="nav-center" v-if="engineConfig">
                    {{engineConfig.name}} &dot; Yak Engine
                </div>
                <div class="nav-right">
                    <ul class="nav-item">
                        <li class="menu-item">
                            <div role="button" tabindex="0" @click="minimize()">
                                <i class="fa fa-window-minimize"></i>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div role="button" tabindex="0" @click="toggleWindowState()">
                                <i class="fa fa-window-restore"></i>
                            </div>
                        </li>
                        <li class="menu-item">
                            <div role="button" tabindex="0" @click="close()">
                                <i class="fa fa-close fa-lg text-red"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
    </div>

    <new-project :is-open="isAddingProject" @on-new-project-saved="isAddingProject = false" @on-new-project-cancelled="isAddingProject = false"></new-project>
    <new-scene :is-open="isAddingScene" @on-new-scene-saved="isAddingScene = false" @on-new-scene-cancelled="isAddingScene = false"></new-scene>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

import Play from './Play.vue';
import NewScene from './NewScene.vue';
import NewProject from './NewProject.vue';
import EngineConfig from '../../../engine/src/engine-config';

@Component({
    components: {
        Play,
        NewScene,
        NewProject
    }
})
export default class MainMenu extends Vue {
  @Prop() private engineConfig: EngineConfig;

  public isAddingProject: boolean = false;
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

  toggleWindowState(): void {
      let browserWindow = (window as any).electron.getCurrentWindow();

      if (browserWindow.isMaximized()) {
          this.minimize();
      }
      else {
          this.maximize();
      }
  }

  maximize(): void {
    (window as any).electron.getCurrentWindow().maximize();
  }

  minimize(): void {
    (window as any).electron.getCurrentWindow().minimize();
  }

  close(): void {
    (window as any).electron.getCurrentWindow().close();
  }

  toggleDropdown(event: MouseEvent) {
      let target = <HTMLElement>event.target;

      if (target.parentElement.classList.contains('item-has-children')) {
          target.parentElement.classList.add('expanded');
      }
  }
};

</script>

<style scoped lang="scss">
// .main-menu-component {
//     -webkit-app-region: drag
// }

.menu-item {
    cursor: pointer;
}
</style>