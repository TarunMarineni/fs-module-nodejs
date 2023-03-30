//ORDER:8
const fs = require('fs');


//fs.readdir(path,(err,files))
fs.readdir('mkdir', (err, files) => {
  if (err) {
    console.error('Error Reading Directory:', err);
    return;
  }
  console.log('Files In Directory:', files);
});


//fs.readdirSync(path)
try {
    const files = fs.readdirSync('mkdirsync');
    console.log('Files In Sync Directory:', files);
  } catch (err) {
    console.error('Error Reading Directory:', err);
  }