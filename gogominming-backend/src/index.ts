import express from "express";
import api from './routes';
import http from "http";
import socketIO from "socket.io";
import mongoose from 'mongoose';
import cors from 'cors';

import { chat } from './types';

const socketServer: http.Server = http.createServer();
const io: SocketIO.Server = socketIO(socketServer);
mongoose.connect("mongodb://localhost/gogominming")
  .then(() => console.log('DB 연결'))

class App {
  public application : express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(cors())
    .use(express.json())
    .use('/api', api);

app.listen(8000, () => {
  console.log('고고민밍 서비스 가동중')
})

io.on('connection', (socket: any) => {
  socket.on('message', (message: chat.IChat) => {
    io.emit('message', JSON.stringify(message));
  })
})