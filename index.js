const fs = require('fs');
const path1 = '../lab/public/11504971.txt';
const path2='../lab/public2/11504971.txt'
const port = 3000;
const express = require('express')
const app = express()
var er='';

app.listen(port, () => console.log('listening on port 3000!'))

fs.readFile(path1, 'utf8', (err,data)=> {
  if (err) {
	  er=err;
    console.log(err);
  }
app.get('/', (req, res) => res.send(data))
});
//wrong path
/*fs.readFile(path2, 'utf8', (err,data)=> {
  if (err) {
	  er=err;
    console.log(err);
  }
app.get('/', (req, res) => res.send(data))
});*/

