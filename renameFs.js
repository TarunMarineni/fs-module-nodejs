//ORDER-4
const fs=require('fs')


//fs.rename(old dir/file, new dir/file,err=>{..})
const a_rename= fs.rename("appendfs.js","append_fun.js",err=>{
    if(err){
        console.err("GOT AN ERROR")
    }
    console.log("File Is Renamed")

})
//fs.renameSync(old dir/file, new dir/file)
const as_rename= fs.renameSync("append_fun.js","appendfs.js")
console.log("File Is Renamed Back")