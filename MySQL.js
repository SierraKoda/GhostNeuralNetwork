const mysql = require('mysql');
const connection = mysql.createConnection({
  
  host: 'localhost',
  user: 'u0_a116@localhost',
  password: 'u0_a116',
  database: 'GhostNativ_nodeJS.db'
 
});

connection.connect((err) => {
  
  if(err){
    console.error('err' + '404');
  } else {
  console.log('Connected!');
  }
  
})

  connection.end((err) => {
   
  });
  
