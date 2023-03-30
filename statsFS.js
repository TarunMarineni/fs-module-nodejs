//ORDER:9
const fs = require('fs');


//fs.stat(path,(err,stats)=>{..})
fs.stat('writeFS.js', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Stats:', stats);
});


//fs.statSync(path);
try{
    const stats=fs.statSync('readFS.js');
    console.log('Sync File Sats',stats)

}catch(err){
    console.error(err)
}