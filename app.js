const http = require("http");
const PORT = 8080; //8000d doesn't work

// a function which handles requests and sends response
function requestHandler(request, response) {
  response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
}

var server = http.createServer(requestHandler);

function requestHandler(request, response) {
  if (request.url === "/") {
    response.end("Welcome!");
  } else if (request.url === "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknown Path");
  }
}




server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});