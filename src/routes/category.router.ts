import express, { Router } from "express";
import { getAll, Create } from "../controllers/category.controller";
import multer from "../helpers/multer";

const categoryRouter: Router = express.Router();

categoryRouter.get("/", getAll);
categoryRouter.post("/", multer.single("image"), Create);

export default categoryRouter;
