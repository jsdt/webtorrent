WebTorrent = require(".");
const client = new WebTorrent();
const server = client.magnetServer();
server.listen(8080);

const express = require('express');

const hwApp = express();
hwApp.get('/', (req, res) => {
    res.send('Hello world\n');
});

hwApp.listen(8081, '0.0.0.0');