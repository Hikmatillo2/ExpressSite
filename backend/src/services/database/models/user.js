import mongoose, {model} from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: String,
    name: String,
    login: String,
    password: String
});

const User = mongoose.model("user", UserSchema);

export default User;

