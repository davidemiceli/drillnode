'use strict';

const Drill = require('./lib/main');

const drill = new Drill({
  url: 'http://localhost:8047'
});

drill.query("SELECT * FROM dfs.`home/<USERNAME>/apache-drill-<VERSION>/sample-data/region.parquet` WHERE R_NAME = 'AFRICA'")
.then(function(resdata) {
  console.log(resdata);
})
.catch(function(err) {
  console.log(err);
});