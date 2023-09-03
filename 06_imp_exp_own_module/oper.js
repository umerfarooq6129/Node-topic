const add = (a,b) =>{
    return a+b;
}

const sub = (a,b) =>{
    return a-b;
}

const name = "umer";

// for single value print
// module.exports = add;

// for multiple values
module.exports.add = add;
module.exports.sub = sub;