import { createServer } from 'node:http';
import { writeFile, mkdir } from 'fs/promises';
import { Buffer } from 'node:buffer';
import { existsSync } from 'fs';

const PORT = 5000;
const GUESTS_DIR = 'guests';

const server = createServer((request, response) => {
    if (request.method === 'POST') {
        if (request.headers.authorization) {
            const [username, password] = Buffer.from(request.headers.authorization.split(' ')[1], 'base64').toString().split(':');
            const AUTHORIZED_USERS = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
            if (AUTHORIZED_USERS.includes(username) && password === 'abracadabra') {
                const guestName = request.url.slice(1);
                let requestBody = '';

                request.on('data', chunk => requestBody += chunk.toString());
                request.on('end', async () => {
                    try {
                        const parsedBody = JSON.parse(requestBody);
                        if (!existsSync(GUESTS_DIR)) {
                            await mkdir(GUESTS_DIR, { recursive: true });
                        }
                        await writeFile(`${GUESTS_DIR}/${guestName}.json`, JSON.stringify(parsedBody));
                        response.writeHead(200, {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(JSON.stringify(parsedBody))
                        });
                        response.end(JSON.stringify(parsedBody));
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
                response.end(JSON.stringify('Authorization Required'));
            }
        } else {
            response.writeHead(401, { 'Content-Type': 'text/plain' });
            response.end(JSON.stringify('Authorization Required'));
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}!`);
});