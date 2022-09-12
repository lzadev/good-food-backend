import { model, Schema } from "mongoose";
import { ICategory } from "../interfaces/ICategory";

const CategorySchema: Schema<ICategory> = new Schema<ICategory>({
  name: { type: String, required: true, minlength: 5 },
  isActive: { type: Boolean, default: true },
  imagePath: { type: String },
});

export default model<ICategory>("Category", CategorySchema);
