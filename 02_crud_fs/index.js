const fs = require("fs");

// to create file
fs.writeFileSync("read.txt","welcome");

// to read file
const buf_data = fs.readFileSync("read.txt");

// to encode buffer data use toString();
const a = buf_data.toString();
console.log(a);

// to rename file name mean to update file name

fs.renameSync("read.txt","write.txt");

// to update content in file
fs.appendFileSync("read.txt","Welcome to this tutorial")

// to delete file

fs.unlinkSync("write.txt");