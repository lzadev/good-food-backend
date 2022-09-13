import path from "path";
import express, { Application, json } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connect from "../database/mongo";
import categoryRouter from "../routes/category.router";
dotenv.config();

class Server {
  private app: Application;
  private port: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.app.use(express.json());
    this.middlewares();
    this.routes();

    //to read all static files
    this.app.use("/uploads", express.static(path.resolve("uploads")));
  }

  private routes() {
    this.app.use("/api/categories", categoryRouter);
  }

  private middlewares() {
    // this.app.use(morgan("dev"));
  }

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
