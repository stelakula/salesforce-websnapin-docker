Salesforce Web2Case
=====

Salesforce Hackday project Micro-services: a Web-to-case docker container

### Features

* Invoke Web To Case to a Salesforce test org
* Docker container

### Build
* docker build -t jonglee/salesforce-web2case .

### Run
* docker run -p 8080:8080 -d jonglee/salesforce-web2case

```
salesforce-web-2-case@1.0.0 start /usr/src/app
node server.js

Running on http://0.0.0.0:8080

```