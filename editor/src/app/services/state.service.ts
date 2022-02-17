// Third party imports.
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

// Local imports.
import { PaletteMode } from "enums/palette-mode";
import { TransformMode } from "enums/transform-mode";
import { Project } from "models/project";

// Engine imports.
import { Scene } from "@yak-engine/models/scene";
import { Entity } from "@yak-engine/models/entity";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public project$: BehaviorSubject<Project | null> = new BehaviorSubject<Project | null>(null);

    get project() {
        return this.paletteMode$.getValue();
    }

    public setProject(project: Project): void {
        this.project$?.next(project);
    }

    public scene$: BehaviorSubject<Scene | null> = new BehaviorSubject<Scene | null>(null);

    get scene() {
        return this.scene$.getValue();
    }

    public setScene(scene: Scene): void {
        this.scene$.next(scene);
    }

    public entity$: BehaviorSubject<Entity | null> = new BehaviorSubject<Entity | null>(null);

    get entity() {
        return this.entity$.getValue();
    }

    public setEntity(entity: Entity): void {
        this.entity$.next(entity);
    }

    public paletteMode$: BehaviorSubject<PaletteMode> = new BehaviorSubject<PaletteMode>(PaletteMode.NONE);

    get paletteMode() {
        return this.paletteMode$.getValue();
    }

    public setPaletteMode(palette: PaletteMode): void {
        this.paletteMode$.next(palette);
    }

    public transformMode$: BehaviorSubject<TransformMode> = new BehaviorSubject<TransformMode>(TransformMode.MOVE);

    get transformMode() {
        return this.transformMode$.getValue();
    }

    public setTransformMode(transformMode: TransformMode): void {
        this.transformMode$.next(transformMode);
    }
}