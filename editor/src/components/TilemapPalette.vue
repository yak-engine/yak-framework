<template>
	<div class="tilemap-palette-component">
		<div class="scene-editor-panel-header is-shadowed">
			<span class="title">Tilemap Palette</span>
			<div class="actions">
				<ul class="nav nav-menu mb-0 text-white">
					<div class="nav-left">
						<ul class="nav-item">
							<li :class="{'selected': paletteMode === 1 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(1)" title="Select">
									<i class="fa fa-mouse-pointer text-blue-lighten-5"></i>
								</div>
							</li>
							<li :class="{'selected': paletteMode === 2 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(2)" data-editor-mode="2" title="Stamp">
									<i class="fa fa-cube text-white"></i>
								</div>
							</li>
							<li :class="{'selected': paletteMode === 3 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(3)" title="Shape fill">
									<i class="fa fa-object-group text-white"></i>
								</div>
							</li>
							<li :class="{'selected': paletteMode === 4 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(4)" title="Bucket fill">
									<i class="fa fa-flask text-white"></i>
								</div>
							</li>
							<li :class="{'selected': paletteMode === 5 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(5)" title="Select same tile">
									<i class="fa fa-object-group text-white"></i>
								</div>
							</li>
							<li :class="{'selected': paletteMode === 6 }">
								<div role="button" class="btn-toolbar-item" tabindex="0" @click="onSetPaletteMode(6)" title="Eraser">
									<i class="fa fa-eraser text-red-lighten-2"></i>
								</div>
							</li>
						</ul>
					</div>
				</ul>
			</div>
		</div>
		<div style="padding: 15px; height: 300px; overflow-y: auto;">
			<ul>
				<li v-for="(preview, index) in spritePreviews" :key="index">
					<img :src="preview.dataUrl" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { PaletteMode } from '../enums/PaletteMode';

@Component
export default class TilemapPalette extends Vue {
  @State paletteMode;
  @Action setPaletteMode;

	spritePreviews: any[] = [];
  
  onSetPaletteMode(paletteMode: PaletteMode): void {
    this.setPaletteMode(paletteMode);
  }
}
</script>

<style lang="scss" scoped>
.tilemap-palette-component {
	flex-basis: 300px;
	background-color: #181818;
	max-height: 300px;
}

ul {
	display: grid;
	grid-template-columns: repeat(12, 1fr);

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		cursor: pointer;
	}
}

.scene-editor-panel-header {
	padding: 0;
	height: 47px;

	.title {
		padding: 8px 15px;
	}
}
</style>
