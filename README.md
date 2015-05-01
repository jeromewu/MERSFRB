# MERSFRB

MERSFRB = Mongoose+Express+Restify+Socket.io+Flux+React+Bootstrap

## Introduction

A package that combines 7 nodejs packages aims to achieve agile web application development

## Build

Use browserify to create bundle.js

```
$ browserify . > public/js/bundle.js
```

## Execution

First you need to start the mongodb with *--replSet*, please see *./doc/mongodb-script* for reference.


To execute the server

```
$ node app.js
```
