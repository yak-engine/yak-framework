// Third party imports.
import { Component, OnInit } from '@angular/core';

// Local imports.
import { PaletteMode } from 'enums/palette-mode';
import { StateService } from 'services/state.service';

@Component({
    selector: '[app-tilemap-palette]',
    templateUrl: './tilemap-palette.component.html',
    styleUrls: ['./tilemap-palette.component.scss'],
})
export class TilemapPaletteComponent implements OnInit {
    /**
     *
     */
    public paletteMode: PaletteMode = PaletteMode.NONE;

    /**
     *
     */
    public spritePreviews: any[] = [];

    /**
     *
     * @param _stateService
     */
    constructor(private _stateService: StateService) { }

    /**
     *
     */
    ngOnInit(): void {
        this._stateService.paletteMode$.subscribe(
            (paletteMode: PaletteMode) => (this.paletteMode = paletteMode)
        );
    }

    /**
     *
     * @param paletteMode
     */
    onSetPaletteMode(paletteMode: PaletteMode): void {
        this._stateService.setPaletteMode(paletteMode);
    }
}
