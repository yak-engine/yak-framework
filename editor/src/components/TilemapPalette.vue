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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Tileset from '../../../engine/src/graphics/tileset';
import isCanvasBlank from '../../../engine/src/helpers/is-canvas-empty';
import EditorGlobal from '../editor-global';
import { PaletteMode } from '../enums/PaletteMode';

@Component
export default class TilemapPalette extends Vue {
  @State paletteMode;
  @Action setPaletteMode;

	spritePreviews: any[] = [];

	editorGlobal: EditorGlobal = EditorGlobal;

	mounted(): void {
		let tileset = new Image();

		tileset.onload = () => {
			let newTileset = new Tileset();
			newTileset.image = tileset;

			// Application.instance.graphics.canvas.tilesets.push(newTileset);

			// let pixelSizeX: any = (<HTMLInputElement>document.querySelector('#pixel-size-x')).value;
			// let pixelSizeY: any = (<HTMLInputElement>document.querySelector('#pixel-size-y')).value;
			// let pixelScaler: any = (<HTMLInputElement>document.querySelector('#pixel-scaler')).value;

			// let spriteList = <HTMLUListElement>document.querySelector('#sprite-list');
			// spriteList!.innerHTML = '';
			// spriteList.style.gridTemplateColumns = `repeat(auto-fit, minmax(${pixelSizeX * pixelScaler}px, 1fr)`

			// if (pixelSizeX && pixelSizeY) {
			if (true) {
				let spriteCountX = tileset.width / 32; // pixelSizeX;
				let spriteCountY = tileset.height / 32; // pixelSizeY;

				for (let row = 0; row < spriteCountY; row++) {
					for (let column = 0; column < spriteCountX; column++) {
						let canvas = <HTMLCanvasElement>document.createElement('canvas');

						canvas.width = 32; // pixelSizeX * pixelScaler;
						canvas.height = 32; // pixelSizeY * pixelScaler;

						// canvas.getContext('2d')?.drawImage(tileset, pixelSizeX * column, pixelSizeY * row, pixelSizeX, pixelSizeY, 0, 0, 32 * pixelScaler, 32 * pixelScaler);
						canvas.getContext('2d')?.drawImage(tileset, 32 * column, 32 * row, 32, 32, 0, 0, 32, 32);

						if (!isCanvasBlank(canvas)) {
							// let li = document.createElement('li');

							// li.setAttribute('data-sprite-row', row.toString());
							// li.setAttribute('data-sprite-column', column.toString());

							let spriteImg = document.createElement('img');

							this.spritePreviews.push({
								row: row,
								column: column,
								dataUrl: canvas.toDataURL()
							});

							// spriteImg.addEventListener('click', (event) => {
							//     event.stopImmediatePropagation();
							//     event.preventDefault();

							//     let prev = this.content.querySelector('ul li img.pending-sprite');

							//     if (prev) {
							//         prev.classList.remove('pending-sprite');
							//     }

							//     spriteImg.classList.add('pending-sprite');

							//     // Start pend sprite.
							//     let sprite = new Sprite();

							//     let tilesetColumns = tileset.width / pixelSizeX;
							//     let tilesetRows = tileset.height / pixelSizeY;

							//     Logger.data(`row: ${tilesetRows} // column: ${tilesetColumns}`);
							//     Logger.data(column * Application.instance.configuration.gridSquareSize);
							//     Logger.data(row * Application.instance.configuration.gridSquareSize);

							//     sprite.tilesetTransform = new Transform(
							//         column * Application.instance.configuration.gridSquareSize,
							//         row * Application.instance.configuration.gridSquareSize,
							//         Application.instance.configuration.gridSquareSize,
							//         Application.instance.configuration.gridSquareSize
							//     );

							//     sprite.tileset = 0;

							//     Application.instance.stateManager.commit<Sprite>('pending-sprite', sprite);
							// })

							// spriteImg.src = canvas.toDataURL();
							// li.appendChild(spriteImg);
							// spriteList!.appendChild(li);
						}
					}
				}
			}
		};

		tileset.onerror = () => {
			// let errorMsg = <HTMLSpanElement>this.content.querySelector('.error-msg');
			// errorMsg.style.display = 'inherit';
			// errorMsg.textContent = 'Failed to load tileset';
		};

		// tileset.src = `${EditorGlobal.project.path}/tilesets/BaseChip_pipo.png`; //tilesetPath.value;
		tileset.src = './BaseChip_pipo.png'; //tilesetPath.value;
  }
  
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
