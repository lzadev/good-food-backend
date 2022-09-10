import mongoose from "mongoose";

const connect = async (credentials: string): Promise<typeof mongoose> => {
  return mongoose.connect(credentials);
};

export default connect;
