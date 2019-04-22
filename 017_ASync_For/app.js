const fs = require('fs');

const readfile = function (filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data.toString());
            }
        })
    });
}

const filelist = [
    'data/a.txt','data/b.txt','data/c.txt'
]

readfile('data/a.txt').then((file)=>{
    console.log('OK:',file);
})

async function runall(){
    let returnArray = [];
    //foreachなら非同期になってしまう
    for (let index = 0; index < filelist.length; index++) {
        let tempfilename = filelist[index];
        let temp1 = await readfile(tempfilename);
        console.log(temp1);
        returnArray.push(temp1);
    }

    console.log("Finish-------");
    return returnArray;
}

runall().then(res=>{
    console.log(res);
    return runall();
})
.then(res2=>{
    console.log("Again------")
    console.log(res2);
});