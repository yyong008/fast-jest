const http = require("http");

test("http top api", () => {
  const httpApi = Object.keys(http);

  expect(httpApi).toContain("_connectionListener");
  expect(httpApi).toContain("METHODS");
  expect(httpApi).toContain("STATUS_CODES");
  expect(httpApi).toContain("Agent");
  expect(httpApi).toContain("ClientRequest");
  expect(httpApi).toContain("IncomingMessage");
  expect(httpApi).toContain("OutgoingMessage");
  expect(httpApi).toContain("Server");
  expect(httpApi).toContain("ServerResponse");
  expect(httpApi).toContain("createServer");
  expect(httpApi).toContain("validateHeaderName");
  expect(httpApi).toContain("validateHeaderValue");
  expect(httpApi).toContain("get");
  expect(httpApi).toContain("request");
  expect(httpApi).toContain("maxHeaderSize");
  expect(httpApi).toContain("globalAgent");
});

test("test http Agent instance api", () => {
  const agentApi = Object.keys(new http.Agent());

  expect(agentApi).toContain("_events");
  expect(agentApi).toContain("_eventsCount");
  expect(agentApi).toContain("_maxListeners");
  expect(agentApi).toContain("defaultPort");
  expect(agentApi).toContain("protocol");
  expect(agentApi).toContain("options");
  expect(agentApi).toContain("requests");
  expect(agentApi).toContain("sockets");
  expect(agentApi).toContain("freeSockets");
  expect(agentApi).toContain("keepAliveMsecs");
  expect(agentApi).toContain("keepAlive");
  expect(agentApi).toContain("maxSockets");
  expect(agentApi).toContain("maxFreeSockets");
  expect(agentApi).toContain("scheduling");
  expect(agentApi).toContain("maxTotalSockets");
  expect(agentApi).toContain("totalSocketCount");
});

test("http.ClientRequest", () => {
  let options = {
    hostname: "www.google.com",
    port: 80,
    path: "/upload",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Content-Length": Buffer.byteLength(postData),
    },
  };
  const req = http.request(options, () => {});
  const httpClientRequestApi = Object.keys(req);

  expect(httpClientRequestApi).toContain("_events");
  expect(httpClientRequestApi).toContain("_eventsCount");
  expect(httpClientRequestApi).toContain("_maxListeners");
  expect(httpClientRequestApi).toContain("outputData");
  expect(httpClientRequestApi).toContain("outputSize");
  expect(httpClientRequestApi).toContain("writable");
  expect(httpClientRequestApi).toContain("destroyed");
  expect(httpClientRequestApi).toContain("_last");
  expect(httpClientRequestApi).toContain("chunkedEncoding");
  expect(httpClientRequestApi).toContain("_defaultKeepAlive");
  expect(httpClientRequestApi).toContain("useChunkedEncodingByDefault");
  expect(httpClientRequestApi).toContain("sendDate");
  expect(httpClientRequestApi).toContain("_removedConnection");
  expect(httpClientRequestApi).toContain("_removedContLen");
  expect(httpClientRequestApi).toContain("_removedTE");
  expect(httpClientRequestApi).toContain("_contentLength");
  expect(httpClientRequestApi).toContain("_hasBody");
  expect(httpClientRequestApi).toContain("_trailer");
  expect(httpClientRequestApi).toContain("finished");
  expect(httpClientRequestApi).toContain("_header");
  expect(httpClientRequestApi).toContain("_keepAliveTimeout");
  expect(httpClientRequestApi).toContain("_onPendingData");
  expect(httpClientRequestApi).toContain("agent");
  expect(httpClientRequestApi).toContain("socketPath");
  expect(httpClientRequestApi).toContain("method");
  expect(httpClientRequestApi).toContain("maxHeaderSize");
  expect(httpClientRequestApi).toContain("insecureHTTPParser");
  expect(httpClientRequestApi).toContain("path");
  expect(httpClientRequestApi).toContain("_ended");
  expect(httpClientRequestApi).toContain("res");
  expect(httpClientRequestApi).toContain("aborted");
  expect(httpClientRequestApi).toContain("timeoutCb");
  expect(httpClientRequestApi).toContain("upgradeOrConnect");
  expect(httpClientRequestApi).toContain("parser");
  expect(httpClientRequestApi).toContain("maxHeadersCount");
  expect(httpClientRequestApi).toContain("reusedSocket");
  expect(httpClientRequestApi).toContain("host");
  expect(httpClientRequestApi).toContain("protocol");
});

test("http server api", () => {
  const server = http.createServer((req, res) => {
    res.end();
  });
  const serverApi = Object.keys(server);

  expect(serverApi).toContain("maxHeaderSize");
  expect(serverApi).toContain("insecureHTTPParser");
  expect(serverApi).toContain("_events");
  expect(serverApi).toContain("_eventsCount");
  expect(serverApi).toContain("_maxListeners");
  expect(serverApi).toContain("_connections");
  expect(serverApi).toContain("_handle");
  expect(serverApi).toContain("_usingWorkers");
  expect(serverApi).toContain("_workers");
  expect(serverApi).toContain("_unref");
  expect(serverApi).toContain("allowHalfOpen");
  expect(serverApi).toContain("pauseOnConnect");
  expect(serverApi).toContain("httpAllowHalfOpen");
  expect(serverApi).toContain("timeout");
  expect(serverApi).toContain("keepAliveTimeout");
  expect(serverApi).toContain("maxHeadersCount");
  expect(serverApi).toContain("headersTimeout");
  expect(serverApi).toContain("requestTimeout");
});

describe("测试 describe", () => {
  let response = null;
  beforeEach(() => {
    const server = http.createServer(async (req, res) => {
      response = req;
      // expect.assertion(1);
      // const apis = Object.keys(res);

      // console.log("==>", apis);
      // expect(apis).not.toContain("setHeader");
    });
  });
  test("test response object api", () => {
    console.log(response);
  });
});
