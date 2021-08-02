import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

export default User;
