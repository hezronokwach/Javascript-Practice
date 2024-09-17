import { createServer } from 'node:http';
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const port = 5000;

const server = createServer(async (request, response) => {
    if (request.method === 'POST') {
        const authHeader = request.headers.authorization;

        // Check for authorization header
        if (!authHeader) {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        // Decode credentials
        const [type, credentials] = authHeader.split(' ');
        if (type !== 'Basic') {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
        const authorizedUsers = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];

        // Validate credentials
        if (!authorizedUsers.includes(username) || password !== 'abracadabra') {
            response.writeHead(401, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Authorization Required' }));
            return;
        }

        // Handle valid request
        const guestName = request.url.slice(1);
        const filePath = join('guests', `${guestName}.json`);
        let body = '';

        request.on('data', chunk => body += chunk.toString());

        request.on('end', async () => {
            try {
                await mkdir('guests', { recursive: true }); // Ensure directory exists
                await writeFile(filePath, body, 'utf8');
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(body); // Return the stored content as JSON
            } catch (err) {
                response.writeHead(500, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({ error: 'Server failed to process request' }));
            }
        });
    } else {
        response.writeHead(405, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
});

server.listen(port, () => {
    console.log(`Server started on localhost:${port}!`);
});
