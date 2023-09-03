const fs = require("fs");

fs.writeFileSync("read.txt","WElcome to nodejs course ");

fs.appendFileSync("read.txt","Please learn this course completely");

// buffer data
const buf_data = fs.readFileSync("read.txt");

// to encode buffer data use toString();
const a = buf_data.toString();
console.log(a);