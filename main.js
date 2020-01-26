const fs=require('fs');
const path=require('path');

const rdfn = path.join(__dirname,'package.json');
fs.readFile(rdfn,'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

const wtfn = path.join(__dirname,'text.js')
const msg = 'var msg="hello world"';
fs.writeFile(wtfn,msg,'utf8', (err) => {
    if (err) throw err;
    console.log("success");
});