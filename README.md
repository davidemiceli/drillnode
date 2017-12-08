# Node.js client for Apache Drill
Drillnode is a client to connect and execute queries on Apache Drill from Node.js using the REST APIs.

## Installation
To install drillnone with npm package manager
```
npm install drillnode
```

## Getting Started
```
// Requirements
const Drill = require('drillnode');

// Init Drill client
const drill = new Drill({
  url: 'http://localhost:8047'
});

// Make a query
drill.query("SELECT * FROM dfs.`home/<USERNAME>/apache-drill-<VERSION>/sample-data/region.parquet` WHERE R_NAME = 'AFRICA'")
.then(function(resdata) {
  console.log(resdata);
})
.catch(function(err) {
  console.log(err);
});
```