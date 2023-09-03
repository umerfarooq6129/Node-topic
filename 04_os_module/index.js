const os = require("os");

const arch = os.arch();
console.log(arch)

const freeMemory = os.freemem();
console.log(freeMemory);

console.log(os.hostname())

console.log(os.platform())