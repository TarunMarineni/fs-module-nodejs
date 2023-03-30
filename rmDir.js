//ORDER:7
const fs = require('fs');

//fs.rmdir(path,err)
fs.rmdir('mkdir', (err) => {
  if (err) throw err;
  console.log('Directory Is Removed By rmdir()');
});


//fs.redirSync(path)
try {
  fs.rmdirSync('mkdirsync');
  console.log('Directory Is Removed By rmdirSync()');
} catch (err) {
  //console.error(err);
}