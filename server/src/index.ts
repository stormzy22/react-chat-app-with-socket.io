import express, { Request, Response, NextFunction } from "express";
import { Server, Socket } from "socket.io";
import { createServer } from "http";

const PORT: number | string = process.env.PORT || 5000;

import router from "./router";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", (socket) => {
  console.log(`we are connected on ${socket} !!!!!!!!!`);
  socket.on("disconnect", () => {
    console.log("user have left");
  });
});

app.use(router);

httpServer.listen(PORT, () => console.log(`Server started on ${PORT}`));
