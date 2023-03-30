//ORDE:1
const fs=require('fs')


const data= "Hello GitHub!!"


//writeFile(path,'uft8',(err,data)=>{..})
const wf_txt=fs.writeFile("textfile1.txt",data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Text Written In File By writeFile()\n")
})
/*console.log(wf_txt)--->undefined---<*/

//fs.writeFileSync(path,data)
try {
    const wfs_txt=fs.writeFileSync('textfile2.txt', 'Hello User!!');
    console.log("Text Written In File By writeFileSync()\n");
  } catch (err) {
    console.error(err);
  }