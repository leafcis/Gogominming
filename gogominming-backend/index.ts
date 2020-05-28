import express from "express";

class App {
  public application : express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.get("")