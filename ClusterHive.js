const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length();

if (cluster.isMaster) {
  
  console.log('Master ${process.pid} Is Running ');
  
  for(let i = 0; i < numCPUs ; i++ ; ){
    cluster.fork();
  } 
  cluster.on('exit', (worker, code, signal) => { console.log('Worker ${worker.process.pid} Died:: ... ');
  });
} else {
  http.createServer((req, res) =>  {
  res.writeHead(200);
  res.end('top secret\n');
  }).listen(8080);
  console.log('Worker ${process.pid} Started:: ... ');
  
}