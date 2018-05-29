Salesforce Web2Case
=====

Salesforce Hackday project Micro-services: a Web-snap-in docker container

### Features

* Invoke Live Agent to a Salesforce test org
* Docker container

### Build
* docker build -t stelakula/salesforce-websnap-in .

### Run
* docker run -p 8080:8080 -d stelakula/salesforce-websnap-in

```
stelakula/salesforce-websnap-in@1.0.0 start /usr/src/app
node server.js

Running on http://0.0.0.0:8080

```
