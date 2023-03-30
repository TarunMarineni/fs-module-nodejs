//ORDER:6
const fs=require('fs')

//fs.mkdir(path,err=>{..})
const mkdir=fs.mkdir('mkdir', (err) => {
  if (err) throw err
  console.log('Directory Is Created By mkdir()')
})


//fs.mkdir(path)
try {
    fs.mkdirSync('mkdirsync');
    console.log('Directory created successfully');
  } catch (err) {
    console.error(err);
  }