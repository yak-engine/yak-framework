// Required references.
const express = require("express");
const path = require('path');
const {series} = require('async');
const {exec} = require('child_process');

const port = 9000;

// Create express app.
const app = express();

global.appRoot = path.resolve(__dirname);

// Configure express app.
app.use(express.static('editor/dist'));
app.use(express.static('preview'));
app.use(express.json());

// Configure default response headers.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Require API endpoints.
require('./server/api/scene.api')(app);
require('./server/api/bundle.api')(app);

var devEditorProcess = exec('npm run watch --prefix editor');

devEditorProcess.stdout.on('data', function(data) {
    console.log(data); 
});

var devEngineProcess = exec('npm run watch --prefix engine');

devEngineProcess.stdout.on('data', function(data) {
    console.log(data); 
});

// Run the developement watch commands for the editor UI and the engine.
series([
    () => {

    },
    () => {

    }
]);

// The root url will serve the compiled editor project.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/editor/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Running application at http://localhost:${port}`)
});
