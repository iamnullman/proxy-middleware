const { createServer } = require('http');
const { parse } = require('url');
const httpProxy = require('http-proxy');

const domainMap = new Map([
    ['nullman.dev', { target: 'localhost:3000' }],
    ['www.nullman.dev', { target: 'localhost:3000' }],
]);

const proxy = httpProxy.createProxyServer();

const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    const domain = req.headers.host.split(':')[0];
    const content = domainMap.get(domain); 

    if (content) {
        req.domainContent = content;

        proxy.web(req, res, {
            target: content.target,
            changeOrigin: true,
            headers: { host: content.target },
        });
    } else {
        // 404 sayfası gönderme örneği
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

proxy.on('error', (err, req, res) => {
    console.log(err)
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong with the proxy.');
});

server.listen(80, (err) => {
    if (err) throw err;
    console.log('> Ready on http://127.0.0.1:80');
});
