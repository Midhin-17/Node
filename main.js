// const os=require("os");

// console.log("free memory",os.freemem() /1024/1024/1024);
// console.log("Total memory",os.totalmem() /1024/1024/1024);
// console.log("os version",os.version());
// console.log("processer",os.cpus());


// console.log(process.argv);
// const double=(num) => num*2;
// const[, , n] = process.argv
// console.log(double(n));

//files

// creating a text file using fs.writefile;

// const fs=require("fs");

// const data="My first Node Project";

// fs.writeFile('writing.txt',data,(err)=>{
//     console.log("writing the text file");
// })

// read a text file using fs.readFile;


// const fs=require("fs");

 const data=" \n Here i am using CRUD to Modify the project";

//  fs.readFile("./writing.txt","utf-8",(err,data)=>{
//     if(err){ 
//         console.log(err);
//     }
//     console.log(data); 
// });

// append the file using fs.appendFile;

const fs=require("fs");


fs.appendFile("writing.txt",data,(err)=>{
    if(err){ 
                console.log(err);
          }
          console.log(" Here i am using CRUD to Modify the project");

        })


