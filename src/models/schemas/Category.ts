import { model, Schema } from "mongoose";

const CategorySchema: Schema<ICategory> = new Schema<ICategory>({
    name: { type: String, required: true,minlength: 5, },
    isActive: { type: Boolean, default: true },
})

export default model<ICategory>("Category", CategorySchema);