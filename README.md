# MERSFRB

MERSFRB = Mongoose+Express+Restify+Socket.io+Flux+React+Bootstrap

## Introduction

A package that combines mainly 7 nodejs packages aims to achieve agile web application development framework from database to frontend design, the source code includes a chat room example for reference, try and see the power of the power of it.

Architecture

![architecture](https://raw.githubusercontent.com/jeromewu/MERSFRB/master/doc/architecture.png)

## Build

* To define your mongoose schema, put .json file in **./mongoose-models**, the name of the .json will be the name of the collection, and the content will be the schema, for the details of the rest api, please see [express-restify-mongoose](https://github.com/florianholzapfel/express-restify-mongoose)

* Install all modules by

```
$ npm install
```

* Use browserify to create bundle.js

```
$ browserify . > public/js/bundle.js
```

or

```
$ make
```


## Execution

* First you need to start the mongodb with **--replSet**, this is for mongo-oplog to work, see **./doc/mongodb-script** for reference.

* To execute the server

```
$ node app.js
```

or

```
$ make run
```

