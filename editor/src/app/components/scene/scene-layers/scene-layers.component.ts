import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import Layer from '../../../../../../engine/src/graphics/layer';
import Scene from '../../../../../../engine/src/models/scene';

@Component({
  selector: '[app-scene-layers]',
  templateUrl: './scene-layers.component.html',
  styleUrls: ['./scene-layers.component.scss']
})
export class SceneLayersComponent {
	public scene!: Scene;

	public layer!: Layer;

  	public selectedIndex: number = 0;

  	public isManagingLayer: boolean = false;

	constructor(private _stateService: StateService) {
		this._stateService.scene$.subscribe((scene: Scene | null) => {
            if (scene) {
                this.scene = scene;
            }
        });
	}

	selectLayer(index: number): void {
		this.selectedIndex = index;
	}

	save(): void {
        let index: number = this.scene!.layers.findIndex((x: Layer) => x.name === this.layer!.name);

        // if (index === -1) {
        //     this.scene.layers.push(this.layer);
        // } else {
        //     this.scene.layers[this.selectedIndex] = this.layer;
        // }

        this._stateService.setScene(this.scene!);

        // this.layer = null;
	}

	remove(): void {
		this.scene!.layers.splice(this.selectedIndex, 1);
		this._stateService.setScene(this.scene!);
	}

	toggleEditMode(): void {
    this.isManagingLayer = true;
		this.layer = Object.assign({}, this.scene!.layers[this.selectedIndex]);
	}

	toggleAddMode(): void {
    this.isManagingLayer = true;
		this.layer = new Layer();
	}

	toggleLayerProperty(property: string, index: number): void {
		if (this.selectedIndex !== index) {
			this.selectedIndex = index;
			this.layer = this.scene!.layers[this.selectedIndex];
		}

		// this.layer[property] = !this.layer[property];
        this._stateService.setScene(this.scene!);
        // this.layer = null;
	}

	// @Watch('layers')
	// onPropertyChanged(newValue: Array<any>, oldValue: Array<any>) {
	// 	if (newValue) {
	// 		this.selectedIndex = 0;
	// 		this.layer = this.scene.layers[this.selectedIndex];
	// 	}
	// }
}
