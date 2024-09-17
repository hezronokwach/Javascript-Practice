import { createServer } from 'node:http';
import { writeFile } from 'fs/promises';
import { Buffer } from 'node:buffer';
import { mkdir } from 'fs/promises';
import { existsSync } from 'fs';

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
                request.on('end', async () => {
                    try {
                        const jsonBody = JSON.parse(body);
                        if (!existsSync(pathGuests)) {
                            await mkdir(pathGuests, { recursive: true });
                        }
                        await writeFile(`${pathGuests}/${guestName}.json`, JSON.stringify(jsonBody));
                        response.writeHead(200, {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(JSON.stringify(jsonBody))
                        });
                        response.end(JSON.stringify(jsonBody));
                    } catch (error) {
                        if (error instanceof SyntaxError) {
                            response.writeHead(400, { 'Content-Type': 'application/json' });
                            response.end(JSON.stringify({ error: 'Invalid JSON' }));
                        } else {
                            response.writeHead(500, { 'Content-Type': 'application/json' });
                            response.end(JSON.stringify({ error: 'server failed' }));
                        }
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