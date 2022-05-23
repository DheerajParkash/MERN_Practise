const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(" Welcome to our homepage");
        return
    } {
        res.end(` <h1> Oops!</h1> 
        <a  hreF="/">Back home </a>`)
    }
})

server.listen(3000)