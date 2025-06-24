import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    
  },
  username: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  coverPic: {
    type: String,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
  updatedat: {
    type: Date,
    default: Date.now,
  },
});



export default mongoose.models.User ||  model("User", UserSchema);
