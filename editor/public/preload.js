window.require = require;

const electron = require('electron').remote;
window.electron = electron;

const { dialog } = require('electron');
window.dialog = dialog;

const fs = require('fs');
window.fs = fs;

window.dirname = __dirname;