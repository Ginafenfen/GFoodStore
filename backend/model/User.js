const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      // lowercase: true,
    },

    hash: {
      type: String,
      require: true,
      // minLength: 12,
    },
    username: {
      type: String,
    },
    // address: {
    //   type: String,
    // },
    phone: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  { collection: "User" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
