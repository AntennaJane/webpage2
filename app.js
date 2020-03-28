const express = require('express');
const appHttp = express();
const appHttps = express();

const http = require('http');
const serverHttp = http.createServer(appHttp);

const fs = require('fs');
const https = require('https');
const options = {
    key: fs.readFileSync(process.argv[2]),
    cert: fs.readFileSync(process.argv[3])
};
const serverHttps = https.createServer(options, appHttps);

appHttp.all("*", (req, res) => {
    res.redirect(`https://${req.hostname}${req.url}`);
});

const path = require('path');
appHttps.all('/index.html', (req, res) => {
    res.redirect('/');
});
appHttps.use(express.static(path.join(__dirname, 'build')));
appHttps.all('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

serverHttp.listen(80);
serverHttps.listen(443);
