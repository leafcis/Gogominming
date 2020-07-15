import express from "express";
import api from './routes';
import http from "http";
import socketIO from "socket.io";
import mongoose from 'mongoose';
import cors from 'cors';

import { Chat } from './models'

import { chat } from './types';

mongoose.connect("mongodb://localhost/gogominming")
  .then(() => console.log('DB 연결'))

class App {
  public application : express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;
const socketServer: http.Server = http.createServer(app);
const io: SocketIO.Server = socketIO(socketServer);

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
    .use(express.json())
    .use('/api', api);

socketServer.listen(8000, () => {
  console.log('고고민밍 서비스 가동중')
})

io.on('connection', (socket: any) => {
  socket.on('join', (id: string) => {
    console.log('joined')
    socket.join(id)
  })

  socket.on('leave', (id: string) => {
    console.log('disconnect')
    socket.leave(id)
  })

  socket.on('message', async (id: string, name: string, message: chat.IChat) => {
    console.log(name, message)
    const info = await Chat.findOne({_id: id})
    await info.addChat(name, message)
    io.to(id).emit('message', name, message);
  })
})