// JSON stand for JS object notation
// json is lightweight format for storing and transporting data
// json is often used when data is sent from a server to a web page.

const bioData = {
    name: 'bio',
    age: 25,
    occupation: 'programmer'
}

// to access specific property values
console.log(bioData.age); 

// to access all json data
const jsonData = JSON.stringify(bioData) // give your json format
console.log(jsonData);

// console.log(jsonData.age); // we cant call specific data by using this

// parse mean json to object // give you in object format

const parsedData = JSON.parse(jsonData)
console.log(parsedData);
