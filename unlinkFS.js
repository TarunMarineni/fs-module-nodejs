//ORDER:5
const fs = require('fs');


//fs.unlink(path,err=>{..})
fs.unlink('textfile1.txt', (err) => {
  if (err) throw err;
  console.log('File Is Deleted By unlink()');
});


//fs.unlinkSync(path)
fs.unlinkSync('textfile2.txt');
console.log('File Is Deleted By unlinkSync()');