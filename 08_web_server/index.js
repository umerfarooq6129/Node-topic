const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end('home page\n');
    } else if(req.url === '/about'){
        res.end('about page\n');
    } else{
        res.end('page not found\n');
    }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});