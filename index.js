// Required references.
const express = require("express");
const path = require('path');
const fs = require('fs');
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

const Path = require("path");
const FS   = require("fs");

let Files  = [];

function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return Files.push(Absolute);
    });
}

app.get("/hierarchy", function (req, res) {
    // const directories = fs.readdirSync(path.join(__dirname, 'preview/bundle'), { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    // res.json(directories);

    
    ThroughDirectory(path.join(__dirname, 'preview/bundle'));
    res.json(Files);
});

app.listen(port, () => {
    console.log(`Running application at http://localhost:${port}`)
});
