//ORDER:2
const fs=require("fs");


//fs.readFile(path,'utf8',(err,data)=>{..})
const txt = fs.readFile("textfile1.txt",'utf8',(err,data)=>{
    if(err){
        console.err(err)
    }
    console.log("\n")
    console.log(data)
})
module.exports=txt


//fs.readFileSync(path,'utf8')
try {
    const data = fs.readFileSync('textfile2.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }