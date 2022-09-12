import { Request, Response } from "express";
import Category from "../models/schemas/Category";

export const getAll = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  try {
    const categories = await Category.find();
    return resp.status(200).json({
      success: true,
      data: [...categories],
      message: null,
      errorMessage: null,
      requestDate: new Date(),
    });
  } catch (error) {
    return resp.status(500).json({
      success: false,
      data: null,
      message: null,
      errorMessage: "An error has ocurred, try it later.",
      requestDate: new Date(),
    });
  }
};

export const Create = async (
  req: Request,
  resp: Response
): Promise<Response> => {
  try {
    const { name } = req.body;
    const newCategory = {
      name: name,
      imagePath: req.file!.path,
    };
    const category = new Category(newCategory);
    await category.save();

    return resp.status(201).json({
      success: true,
      data: [category],
      message: "Category created",
      errorMessage: null,
      requestDate: new Date(),
    });
  } catch (error) {
    return resp.status(500).json({
      success: false,
      data: null,
      message: null,
      errorMessage: "An error has ocurred, try it later.",
      requestDate: new Date(),
    });
  }
};

export default { getAll, Create };
