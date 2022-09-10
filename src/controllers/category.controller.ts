import { Request, Response } from "express";

export const getAll = (req: Request, resp: Response) => {
  resp.send("hello world");
};

export default { getAll };
