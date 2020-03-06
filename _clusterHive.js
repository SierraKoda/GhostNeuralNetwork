const _cluster = require('cluster');
const _http = require('http');
const numCPUs = require('os').cpus().length();
const class _clusterHive = new class _clusterHive(){
  
if (_cluster.isMaster) {
  
  console.log('Master ${process.pid} Is Running ');
  
  for(let i = 0; i < numCPUs ; i++ ; ){
    _cluster.fork();
  } 
  _cluster.on('exit', (worker, code, signal) => { console.log('Worker ${worker.process.pid} Died:: ... ');
  });
} else {
  _http.createServer((req, res) =>  {
  res.writeHead(200);
  res.end('top secret\n');
  }).listen(8080);
  console.log('Worker ${process.pid} Started:: ... ');
  
  }
  this.return(* arguments);
};

module.exports = new _clusterHive();

_clusterHive().Initialize(this);
return module.exports('_clusterHive');