const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = function(app) {
    app.post('/api/scene/add', function(req, res) {
        // Load default sceen and update name.
        const defaultScenepath = path.join(appRoot, 'preview/defaults/default-scene.yaml');

        const defaultScene = yaml.safeLoad(fs.readFileSync(defaultScenepath, 'utf8'));
        defaultScene.name = req.body.name;
    
        // Convert updated scene object back into yaml string.
        const scene = yaml.safeDump(defaultScene);
        
        fs.writeFile(`${appRoot}/preview/bundle/scenes/${req.body.name}.yaml`, scene, function (err) {
            if (err) throw err;
            console.log('Scene added successfully.');
        });

        res.json(true);
    });

    // Update scene.
    app.post('/api/scene/update', function(req, res) {
        const scene = req.body;
        
        const sceneYaml = yaml.safeDump(scene);

        fs.writeFile(`${appRoot}/preview/bundle/scenes/${scene.name}.yaml`, sceneYaml, function (err) {
            if (err) throw err;
            console.log(scene);
        });
        
        res.json(scene);
    });
    
    // Get specific scene.
    app.get('/api/scene/get/:sceneName', function(req, res) {
        console.log(appRoot);
        const doc = yaml.safeLoad(fs.readFileSync(`${appRoot}/preview/bundle/scenes/${req.params.sceneName}.yaml`, 'utf8'));
        res.json(doc);
    });
    
    // Save
    app.post('/api/scene/save', function(req, res) {
        // TODO: Actually implement this code.
        const doc = yaml.safeLoad(fs.readFileSync(`./dist/bundle/scenes/${req.body.name}.yaml`, 'utf8'));
        res.json(doc);
    });
    
    // Delete
    app.get('/api/scene/delete/:sceneName', function(req, res) {
        fs.unlinkSync(`${appRoot}/preview/bundle/scenes/${req.params.sceneName}.yaml`);
        res.json(true);
    });
    
    // List all
    app.get('/api/scene/list', function(req, res) {
        const sceneNames = fs.readdirSync(`${appRoot}/preview/bundle/scenes/`).map((fileName) => {
            return fileName.split('.yaml')[0];
        })

        res.json(sceneNames);
    });
}