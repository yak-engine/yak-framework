// import EntityManager from '../../../engine/src/entity-manager';
// import Layer from '../../../engine/src/graphics/layer';
// import Scene from '../../../engine/src/models/scene';

import { Layer, Scene } from "@yak/engine";

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

    public save(scene: Scene, projectPath: string) {
        // if (!scene) {
        //     throw "Cannot save a null of undefined scene.";
        // }

        // scene.entities = EntityManager.getInstance().packEntities();

        // scene.layers.sort((a, b) => {
        //     return a.order - b.order;
        // });
      
        // const path = window.require('path');
        // const fs = window.require('fs');
    
        // let scenePath: string = path.join(projectPath, `scenes/${scene.name}.json`);

        // if (!fs.existsSync(scenePath)){
        //     console.log(scenePath);
        //     throw "Scene does not exist.";
        // }

        // const sceneConfigJson: string = JSON.stringify(scene, null, 2);

        // fs.writeFile(scenePath, sceneConfigJson, function (err) {
        //     if (err) throw err;
        //     console.log('Scene updated successfully.');
        // });
    }
}