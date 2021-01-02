import EditorGlobal from '@/editor-global';
import Project from '@/models/project';
import EntityManager from '../../../engine/src/components/EntityManager';
import Layer from '../../../engine/src/graphics/layer';
import Tileset from '../../../engine/src/graphics/tileset';
import Scene from '../../../engine/src/models/scene';
import SceneConfig from '../../../engine/src/models/scene-config';

export default class SceneStorageService {
    fileName: string = 'projects';

    updateLayer(originalLayer: Layer, updatedLayer: Layer, isDeletion: boolean = false): void {
        // let index: number = EditorGlobal.scene.layers.findIndex(x => x.name === originalLayer?.name);
    
        // if (index !== -1) {
        //     if (isDeletion) {
        //         EditorGlobal.scene.layers.splice(index, 1);
        //     }
        //     else {
        //         EditorGlobal.scene.layers[index] = updatedLayer;
        //     }
        // }
        // else {
        //   EditorGlobal.scene.layers.push(updatedLayer);
        // }
    
        // this.save();
    }

    public save(scene: Scene, projectPath: string): void {
        if (!scene) {
            throw "Cannot save a null of undefined scene.";
        }

        // Cache the scene config on load instead of creating a new one.
        let sceneConfig: SceneConfig = new SceneConfig();

        sceneConfig.name = scene.name;
        sceneConfig.rows = scene.columns;
        sceneConfig.columns = scene.columns;
        sceneConfig.tileSize = scene.tileSize;
        // sceneConfig.tilesets = scene.tilesets;
        sceneConfig.layers = scene.layers;
        sceneConfig.entities = EntityManager.getInstance().packEntities();

        sceneConfig.layers.sort((a, b) => {
            return a.order - b.order;
        });
      
        const path = window.require('path');
        const fs = window.require('fs');
    
        let scenePath: string = path.join(projectPath, `scenes/${sceneConfig.name}.json`);

        if (!fs.existsSync(scenePath)){
            console.log(scenePath);
            throw "Scene does not exist.";
        }

        const sceneConfigJson: string = JSON.stringify(sceneConfig, null, 2);

        console.log(sceneConfigJson);

        fs.writeFile(scenePath, sceneConfigJson, function (err) {
            if (err) throw err;
            console.log('Scene updated successfully.');
        });
    }

    public load(project: Project, sceneName: string): Scene {
        const path = window.require('path');
        const fs = window.require('fs');
    
        let scenePath: string = path.join(project.path, `scenes/${sceneName}.json`);
    
        if (!fs.existsSync(scenePath)){
            console.log(scenePath);
            throw "Scene does not exist.";
        }
    
        let sceneConfig: SceneConfig = JSON.parse(fs.readFileSync(scenePath, 'utf8'));

        // Parsed entities to typescript objects.
        EntityManager.getInstance().parseEntities(sceneConfig);

        // Load tilesets.
        let tilesets: Tileset[] = [];

        sceneConfig.tilesets.forEach((tilesetPath: string) => {
            let imageData = fs.readFileSync(path.join(project.path, `tilesets/${tilesetPath}`));
            let base64 = btoa([].reduce.call(new Uint8Array(imageData),function(p,c){return p+String.fromCharCode(c)},''))
            let dataUrl = `data:image/png;base64,${base64}`;
            let image = new Image();
            image.src = dataUrl;
            tilesets.push(new Tileset(image));
        });

        while(tilesets.length !== sceneConfig.tilesets.length) {
            continue;
        }

        let scene = new Scene();

        scene.name = sceneConfig.name;
        scene.rows = sceneConfig.columns;
        scene.columns = sceneConfig.columns;
        scene.tileSize = sceneConfig.tileSize;
        scene.tilesets = tilesets;
        scene.layers = sceneConfig.layers;

        EditorGlobal.sceneConfig = sceneConfig;

        return scene;
    }
}