const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    app.get("/bundle/generate", function (req, res) {
        fs.appendFile('./dist/mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    
        res.send("Bundle generate");
    });
    
    app.get('/bundle/play', function (req, res) {
        res.sendFile(path.join(__dirname + '/play.html'));
    });
}