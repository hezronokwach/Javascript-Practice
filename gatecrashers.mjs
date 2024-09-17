import { createServer } from 'node:http';
import { writeFile } from 'node:fs';
import { join } from 'node:path';
import { writeFile, existsSync, mkdirSync } from 'node:fs';
let port = 5000

const server = createServer((request, response) => {
    if (request.method === 'POST') {
        if (request.headers.authorization) {
            const [username, password] = Buffer.from(request.headers.authorization.split(' ')[1], 'base64').toString().split(':');
            const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
            if (authorizedUsers.includes(username) && password === 'abracadabra') {
                const guestName = request.url.slice(1);
                const filePath = join('guests', `${guestName}.json`);
                let body = '';

                request.on('data', chunk => body += chunk.toString());

                request.on('end', () => {
                    try {
                        const jsonBody = JSON.parse(body);
                        const dir = 'guests';
                        if (!existsSync(dir)) {
                            mkdirSync(dir);
                        }
                        writeFile(filePath, JSON.stringify(jsonBody), 'utf8', (err) => {
                            if (err) {
                                response.writeHead(500, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify({ error: 'server failed' }));
                            } else {
                                response.writeHead(201, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify(jsonBody));
                            }
                        });
                    } catch (parseError) {
                        response.writeHead(400, { 'Content-Type': 'application/json' });
                        response.end(JSON.stringify({ error: 'Invalid JSON' }));
                    }
                });
            } else {
                response.writeHead(401, { 'Content-Type': 'text/plain' });
                response.end(JSON.stringify('Authorization Required%'));
            }
        } else {
            response.writeHead(401, { 'Content-Type': 'text/plain' });
            response.end(JSON.stringify('Authorization Required%'));
        }
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});