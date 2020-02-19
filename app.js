const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'firstDB'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM authors', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  rows.forEach( (row) => {
    console.log(`${row.name} lives in ${row.city}`);
  });
});

// const author = { name: 'Craig Buckler', city: 'Exmouth' };
// con.query('INSERT INTO authors SET ?', author, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
});
