//ORDER-3
const fs=require('fs')


//appendFile(path,data,err=>{..})
const af_txt = fs.appendFile('textfile1.txt','\nIm Tarun Marineni',err=>{
    try{
        console.log("The Data Is Appended By appendFile()")
    }catch(err){
        console.log(err)
    }
})


//appendFileSync(path,data)
try{
    const afs_txt=fs.appendFileSync('textfile2.txt',"\nINDIAN")
    console.log("The Data Is Appended By appendFileSync()")
}catch(err){
    console.log(err)
}