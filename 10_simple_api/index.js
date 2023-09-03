const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('home page\n');
    } else if(req.url === '/about'){
        fs.readFile(`${__dirname}/UserApi/userApi.json`,"UTF-8", (err,daa)=>{
            res.end(daa);

        })
    } else{
        res.end('page not found\n');
    }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});


