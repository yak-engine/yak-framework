<template>
	<div class="scene-information-component" v-if="scene">
		<div class="form-section">
			<div class="form-label text-small">Tile size</div>
			<input class="tag-name" type="text" v-model.number="sceneCopy.tileSize" />
		</div>

		<div class="form-section">
			<div class="form-label text-small">Rows</div>
			<input class="tag-name" type="text" v-model.number="sceneCopy.rows" />
		</div>

		<div class="form-section">
			<div class="form-label text-small">Columns</div>
			<input class="tag-name" type="text" v-model.number="sceneCopy.columns" />
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import Scene from '../../../engine/src/models/scene';

@Component
export default class SceneInformation extends Vue {
  @State scene;
  @Action public setScene;

  sceneCopy: Scene = null;

  @Watch('scene')
  onSceneChanged(newValue: Scene, oldValue: Scene): void {
    if(newValue) {
      this.sceneCopy = Object.assign({}, this.scene);
    }
  }
}
</script>

<style scoped lang="scss">
.scene-information-component {
	flex: 1;
}
</style>
