import { Request } from "express";
import { v4 as uuid } from "uuid";
import multer from "multer";
import path from "path";

//Config where the image goes
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req: Request, file, fn) => {
    fn(null, uuid() + path.extname(file.originalname));
  },
});

export default multer({ storage });
