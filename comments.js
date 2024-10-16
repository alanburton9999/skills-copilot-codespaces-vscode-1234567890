// create a web server that serves the comments from the comments.json file
// to the user. The comments should be displayed in a nice way.

// 1. create a web server
// 2. read the comments.json file
// 3. send the comments to the user

// 1. create a web server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        // 2. read the comments.json file
        const filePath = path.join(__dirname, 'comments.json');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'File not found' }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});