import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { ModalComponent } from './components/layout/modal/modal.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateSceneComponent } from './components/create-scene/create-scene.component';
import { ProjectHierarchyComponent } from './components/project-hierarchy/project-hierarchy.component';
import { OpenProjectComponent } from './components/open-project/open-project.component';
import { ComponentTemplateComponent } from './components/inspector/component-template.component';
import { CameraComponent } from './components/inspector/camera/camera.component';
import { ColliderComponent } from './components/inspector/collider/collider.component';
import { MaterialComponent } from './components/inspector/material/material.component';
import { SpriteRendererComponent } from './components/inspector/sprite-renderer/sprite-renderer.component';
import { TagComponent } from './components/inspector/tag/tag.component';
import { TilemapComponent } from './components/inspector/tilemap/tilemap.component';
import { TransformComponent } from './components/inspector/transform/transform.component';
import { SceneEditorComponent } from './components/scene/scene-editor/scene-editor.component';
import { SceneHierarchyComponent } from './components/scene/scene-hierarchy/scene-hierarchy.component';
import { SceneInformationComponent } from './components/scene/scene-information/scene-information.component';
import { SceneLayersComponent } from './components/scene/scene-layers/scene-layers.component';
import { SceneListingComponent } from './components/scene/scene-listing/scene-listing.component';
import { SceneToolbarComponent } from './components/scene/scene-toolbar/scene-toolbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TilemapPaletteComponent } from './components/tilemap-palette/tilemap-palette.component';
import { TreeComponent } from './components/tree/tree.component';
import { DirectoryDialogComponent } from './components/directory-dialog/directory-dialog.component';
import { PlayComponent } from './components/play/play.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainMenuComponent,
    ModalComponent,
    CreateProjectComponent,
    CreateSceneComponent,
    ProjectHierarchyComponent,
    OpenProjectComponent,
    ComponentTemplateComponent,
    CameraComponent,
    ColliderComponent,
    MaterialComponent,
    SpriteRendererComponent,
    TagComponent,
    TilemapComponent,
    TransformComponent,
    SceneEditorComponent,
    SceneHierarchyComponent,
    SceneInformationComponent,
    SceneLayersComponent,
    SceneListingComponent,
    SceneToolbarComponent,
    SettingsComponent,
    TilemapPaletteComponent,
    TreeComponent,
    InspectorComponent,
    DirectoryDialogComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
