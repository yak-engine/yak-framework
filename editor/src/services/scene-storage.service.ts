import EditorGlobal from '@/editor-global';
import EntityManager from '../../../engine/src/components/EntityManager';
import Layer from '../../../engine/src/graphics/layer';
import Tileset from '../../../engine/src/graphics/tileset';
import Scene from '../../../engine/src/models/scene';
import SceneConfig from '../../../engine/src/models/scene-config';

export default class SceneStorageService {
    fileName: string = 'projects';

    updateLayer(originalLayer: Layer, updatedLayer: Layer, isDeletion: boolean = false): void {
        let index: number = EditorGlobal.scene.layers.findIndex(x => x.name === originalLayer?.name);
    
        if (index !== -1) {
            if (isDeletion) {
                EditorGlobal.scene.layers.splice(index, 1);
            }
            else {
                EditorGlobal.scene.layers[index] = updatedLayer;
            }
        }
        else {
          EditorGlobal.scene.layers.push(updatedLayer);
        }
    
        this.save();
    }

    public save(): void {
        EditorGlobal.scene.layers.sort((a, b) => {
            return a.order - b.order;
        });
      
        const path = window.require('path');
        const fs = window.require('fs');
        const yaml = window.require('js-yaml');
    
        let scenePath: string = path.join(EditorGlobal.project.path, `scenes/${EditorGlobal.scene.name}.yaml`);
    
        if (!fs.existsSync(scenePath)){
            throw "Scene does not exist.";
        }
    
        const scene = yaml.safeDump(EditorGlobal.scene);
    
        fs.writeFile(scenePath, scene, function (err) {
            if (err) throw err;
            console.log('Scene updated successfully.');
        });
    }

    public load(sceneName: string): void {
        const path = window.require('path');
        const fs = window.require('fs');
        const yaml = window.require('js-yaml');
    
        let scenePath: string = path.join(EditorGlobal.project.path, `scenes/${sceneName}.yaml`);
    
        if (!fs.existsSync(scenePath)){
            throw "Scene does not exist.";
        }
    
        let sceneConfig: SceneConfig = yaml.safeLoad(fs.readFileSync(scenePath, 'utf8'));

        console.log(sceneConfig);

        // Parsed entities to typescript objects.
        EntityManager.getInstance().parseEntities(sceneConfig);

        // Load tilesets.
        let tilesets: Tileset[] = [];

        sceneConfig.tilesets.forEach((tilesetPath: string) => {
            let imageData = fs.readFileSync(path.join(EditorGlobal.project.path, `tilesets/${tilesetPath}`));
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

        // Everything is ready set the scene to the global variable.
        EditorGlobal.scene = scene;

        console.log(EditorGlobal.scene);
    }
}