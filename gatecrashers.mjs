import { createServer } from 'node:http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';

let port = 5000
const pathGuests = 'guests';

const server = createServer((request, response) => {
    if (request.method === 'POST') {
        if (request.headers.authorization) {
            const [username, password] = Buffer.from(request.headers.authorization.split(' ')[1], 'base64').toString().split(':');
            const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
            if (authorizedUsers.includes(username) && password === 'abracadabra') {
                const guestName = request.url.slice(1);
                let body = '';

                request.on('data', chunk => body += chunk.toString());

                request.on('end', () => {
                    try {
                        const jsonBody = JSON.parse(body);
                        writeFile(`${pathGuests}/${guestName}.json`, JSON.stringify(jsonBody))
                            .then(() => {
                                response.writeHead(200, {
                                    'Content-Type': 'application/json',
                                    'Content-Length': Buffer.byteLength(JSON.stringify(jsonBody))
                                });
                                response.end(JSON.stringify(jsonBody));
                            })
                            .catch((err) => {
                                response.writeHead(500, { 'Content-Type': 'application/json' });
                                response.end(JSON.stringify({ error: 'server failed' }));
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