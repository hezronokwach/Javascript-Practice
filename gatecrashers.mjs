import { createServer } from 'node:http';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

let port = 5000;

const server = createServer(async (request, response) => {
    if (request.method === 'POST') {
        if (request.headers.authorization) {
            const [username, password] = Buffer.from(request.headers.authorization.split(' ')[1], 'base64').toString().split(':');
            const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
            if (authorizedUsers.includes(username) && password === 'abracadabra') {
                const guestName = request.url.slice(1);
                const filePath = join('guests', `${guestName}.json`);
                let body = '';

                request.on('data', chunk => body += chunk.toString());

                request.on('end', async () => {
                    try {
                        await mkdir('guests', { recursive: true }); // Ensure directory exists
                        await writeFile(filePath, body, 'utf8');
                        response.writeHead(200, { 'Content-Type': 'application/json' });
                        response.end(JSON.stringify(JSON.parse(body)));
                    } catch (err) {
                        response.writeHead(500, { 'Content-Type': 'application/json' });
                        response.end(JSON.stringify({ error: 'server failed' }));
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

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});
