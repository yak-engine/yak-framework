import { Component, OnInit } from '@angular/core';
import { TransformMode } from 'src/app/enums/transform-mode';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: '[app-scene-toolbar]',
  templateUrl: './scene-toolbar.component.html',
  styleUrls: ['./scene-toolbar.component.scss']
})
export class SceneToolbarComponent implements OnInit {
    public transformMode: TransformMode = TransformMode.MOVE;

constructor(private _stateService: StateService) {
        
    }

    public ngOnInit(): void {
        this._stateService.transformMode$.subscribe((transformMode: TransformMode) => this.transformMode = transformMode);
    }

    onSetTransformMode(transformMode: TransformMode): void {
        this._stateService.setTransformMode(transformMode);
    }

    public setIsPlayMode(isPlayMode: boolean): void {
        // TODO: Save on state.
    }
}
