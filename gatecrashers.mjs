import { createServer } from 'node:http';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const port = 5000;

const server = createServer(async (request, response) => {
    if (request.method === 'POST') {
        const authHeader = request.headers.authorization;

        // Authorization check
        if (!authHeader) {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        const [type, credentials] = authHeader.split(' ');
        if (type !== 'Basic') {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
        const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];

        if (!authorizedUsers.includes(username) || password !== 'abracadabra') {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        const guestName = request.url.slice(1);
        const filePath = join('guests', `${guestName}.json`);
        let body = '';

        request.on('data', chunk => body += chunk.toString());

        request.on('end', async () => {
            try {
                await mkdir('guests', { recursive: true });
                await writeFile(filePath, body, 'utf8');
                console.log(`Writing to ${filePath}: ${body}`);
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(body);
            } catch (err) {
                console.error(err);
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Server failed to process request' }));
            }
        });
    } else {
        // Handle unsupported methods
        response.writeHead(405, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});
