import { createServer } from 'node:http';
import { writeFile } from 'node:fs';
let port = 5000

const server = createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const guestName = url.pathname.slice(1);
    response.setHeader('Content-Type', 'application/json');
    if (request.method === 'POST') {
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', () => {
            try {
                const jsonContent = JSON.parse(body);
                writeFile(`guests/${guestName}.json`, JSON.stringify(jsonContent), (err) => {
                    response.statusCode = 201;
                    response.end(JSON.stringify(jsonContent));
                });
            } catch (error) {
                response.statusCode = 400;
                response.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    } else {
        response.statusCode = 405;
        response.end(JSON.stringify({ error: "wrong method" }));
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});