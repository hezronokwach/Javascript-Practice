import http from "http";
import { readFile, writeFile } from "fs/promises";
import { Buffer } from "node:buffer";

const serverHost = "localhost";
const serverPort = 5000;
const guestsDirectory = `guests`;
const authorizedUsers = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];

const handleGuestData = (request, response) => {
  let responseStatusCode = 200;
  response.setHeader("Content-Type", "application/json");
  const guestFileName = `${request.url.slice(1)}.json`;

  const sendErrorResponse = (error, statusCode, message) => {
    const errorResponseBody = JSON.stringify({ error: message });

    response
      .writeHead(statusCode, {
        "Content-Length": Buffer.byteLength(errorResponseBody),
      })
      .end(errorResponseBody);
  };

  const authorizationHeader = request.headers["authorization"];
  if (!authorizationHeader) {
    sendErrorResponse("no credentials found", 401, "no credentials found");
    return;
  }

  const credentials = Buffer.from(authorizationHeader.slice(6), "base64")
    .toString()
    .split(":");

  if (
    !authorizedUsers.includes(credentials[0]) ||
    credentials[1] !== "abracadabra"
  ) {
    sendErrorResponse("wrong credentials", 401, "Authorization Required%");
    return;
  }

  let requestBody = request.headers["body"];

  writeFile(`${guestsDirectory}/${guestFileName}`, requestBody)
    .then(() => {
      const successResponseBody = requestBody;
      response
        .writeHead(responseStatusCode, {
          "Content-Length": Buffer.byteLength(successResponseBody),
        })
        .end(successResponseBody);
    })
    .catch((error) => sendErrorResponse(error, 500, "Failed to write file"));
};

const httpServer = http.createServer(handleGuestData);
httpServer.listen(serverPort, serverHost, () => {
  console.log(`Server is running on http://${serverHost}:${serverPort}`);
});
