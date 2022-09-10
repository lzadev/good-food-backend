import express, { Application, json } from "express";
import dotenv from "dotenv";
import connect from "../database/mongo";
import categoryRouter from "../routes/category.router";
dotenv.config();

class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3200";
    this.app.use(express.json());
    this.routes();
  }

  private routes() {
    this.app.use("/api/categories", categoryRouter);
  }
  private middlewares() {}

  async start() {
    try {
      await connect(process.env.MONGO_URI || "");
      this.app.listen(this.port, () => {
        console.log(`The server is running on port ${this.port}`);
      });
    } catch (error) {
      console.log("Error trying to connect with the server", error);
    }
  }
}

export default Server;
