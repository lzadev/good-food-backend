import express, { Router } from "express";
import { getAll } from "../controllers/category.controller";

const categoryRouter: Router = express.Router();

categoryRouter.use("/", getAll);

export default categoryRouter;
