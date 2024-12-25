const express = require("express");
const http = require("http");
const websocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors());

const webServer = http.createServer(app);
const webSocketServer = new websocket.Server({ webServer });

webSocketServer.on("connection", (ws) => {
  console.log("new client connected");
  ws.on("message", (message) => {
    console.log("received message :" + message);
    webSocketServer.clients.forEach((client) => {
      if (client.readyState === websocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});
