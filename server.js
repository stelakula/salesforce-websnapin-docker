'use strict';
  
const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  // application instance information
  instance: {
    app: 'jqservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: 8080,
    vipAddress: 'jq.test.something.com',
    dataCenterInfo: {
      name: 'MyOwn',
    },
  },
  eureka: {
    // eureka server host / port
    host: 'https://morning-temple-99359.herokuapp.com/',
  },
});

const express = require('express');
const path = require('path');
var https = require('https');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
