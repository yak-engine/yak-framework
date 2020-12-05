const http = require('http');
const url = require('url');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

http.createServer((req, res) => {
    var parsedUrl = url.parse(req.url, true);

    console.log(parsedUrl.pathname);

    if(parsedUrl.pathname == '/api/scaffold/get') {
        try {
            const scaffold = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'scaffold.yaml'), 'utf8'));

            res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8'});
            res.end(JSON.stringify(scaffold));
        }
        catch (ex) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(ex));
        }
    }
    else if(parsedUrl.pathname.endsWith('.yaml')) { // Load the scenes
        try {
            var components = parsedUrl.pathname.split('/');
            var sceneFile = components[components.length - 1];

            const scene = yaml.safeLoad(fs.readFileSync(path.join(__dirname, `scenes/${sceneFile}`), 'utf8'));

            res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8'});
            res.end(JSON.stringify(scene));
        }
        catch (ex) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(ex));
        }
    }
    else {
        if (parsedUrl.pathname === '/') {
            fs.readFile(path.join(__dirname, 'play.html'), function(err, data) {
                if (err) throw err;
                res.end(data);
            });
            
            return;
        }
        else {
            var extention = parsedUrl.pathname.match(/\..+$/)[0];

            var mime = {
              '.js': 'text/javascript; charset=UTF-8',
              '.txt': 'text/plain; charset=UTF-8',
              '.html': 'text/html; charset=UTF-8',
              '.png': 'image/png',
              '.gif': 'image/gif',
              '.jpg': 'image/jpeg',
              '.ico': 'image/x-icon'
            }
    
            res.writeHead(200, {'Content-Type': mime[extention]});

            console.log(__dirname + parsedUrl.pathname);
    
            if (fs.existsSync(__dirname + parsedUrl.pathname)) {
                fs.readFile(__dirname + parsedUrl.pathname, function(err, data) {
                  if (err) throw err;
                  res.end(data);
                });
            }
            else {
                res.end('File Not Found');
            }
        }
    }
}).listen(9001);