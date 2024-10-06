const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fisrtname: { type: String, required: true },
    lasttname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
