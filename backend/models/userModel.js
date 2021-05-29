import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
<<<<<<< HEAD
    healthy: { type: Boolean, },
    weight: { type: Boolean },
    proteine: { type: Boolean },
=======
    healthy: { type: Boolean, default: false },
    weight: { type: Boolean, default: false },
    proteine: { type: Boolean, default: false },
>>>>>>> 45b16cfdef9da7495ecff9800682be7f5d23d930
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;
