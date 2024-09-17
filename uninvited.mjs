import { createServer } from 'node:http';
import { writeFile } from 'node:fs';
import { join } from 'node:path';
let port = 5000

const server = createServer((request, response) => {
    if (request.method === 'POST') {
        const guestName = request.url.slice(1);
        const filePath = join('guests', `${guestName}.json`);
        let body = '';

        request.on('data', chunk => body += chunk.toString());

        request.on('end', () => {
            try {
                writeFile(filePath, body, 'utf8', (err) => {
                    if (err) {
                        response.writeHead(500, {'Content-Type': 'application/json'});
                        response.end(JSON.stringify({ error: 'server failed' }));
                    } else {
                        response.writeHead(201, {'Content-Type': 'application/json'});
                        response.end(body);
                    }
                });
            } catch (parseError) {
                response.writeHead(500, {'Content-Type': 'application/json'});
                response.end(JSON.stringify({ error: 'server failed' }));
            }
        });
    } else {
        response.writeHead(405, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({ error: 'method not allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});