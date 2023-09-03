const fs = require('fs');

// create file using async function
fs.writeFile("read.txt","this is async function",(err)=>{
    console.log("file is created")
    console.log(err)
})

// to update or to add new data

fs.appendFile("read.txt","this is your new data",(err)=>{
    console.log("file is created")
    console.log(err)
})

// to read file content // this will give you the buffer data

fs.readFile("read.txt",(err,data)=>{ // we call to arguments init err and data 
    console.log(data)
    // console.log(err)
})

// so we use UTF-8 to encode buffer data
fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data)
    // console.log(err)
})