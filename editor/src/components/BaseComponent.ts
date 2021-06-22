import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';

import Project from '@/models/project';
import Scene from '../../../engine/src/models/scene';

@Component
export default class BaseComponent extends Vue {
    @State private project: Project;
    @State private scene: Scene;

    @Action private saveScene;

    private _currentScene: Scene;

    get currentScene(): Scene {
        if (!this._currentScene) {
            this._currentScene = Object.assign({}, this.scene) as Scene;
        }

        return this._currentScene;
    }

    set currentScene(value: Scene) {
        this._currentScene = value;
    }

    private _currentProject: Project;

    get currentProject(): Project {
        if (!this._currentProject) {
            this._currentProject = Object.assign({}, this.project) as Project;
        }

        return this._currentProject;
    }

    set currentProject(value: Project) {
        this._currentProject = value;
    }

    saveCurrentScene(): void {
        this.saveScene(this.currentScene);
    }
}