/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API yo monitoring up or down time of user define links.
 * Author: Jaber Hossain Shovon
 * Date: 12/02/24
 */

// Dependencies
const http = require("http");
const url = require("url");

// App object - Module Scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle request & response
app.handleReqRes = (req, res) => {
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // trimmed path
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  console.log(trimmedPath);

  // Method
  const method = req.method.toLowerCase();

  // Query String
  const queryStrinObject = parsedUrl.query;

  // Header Metadata
  const headersObject = req.headers;

  console.log(headersObject);

  // response handle
  res.end("Hello programmers!");
};

// start the server
app.createServer();
