const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    title: { type: String, required: true, enum: ["Mr", "Mrs", "Miss"]},
    name: { type: String, required: "Name is Required" ,trim: true},
    phone: { type: String, required: "Phone number is required", unique: true, trim: true },
    email: {
      type: String,
      trim: true,
      required: "Email is required",
      validate: {
        validator: function (email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "Please fill a valid email address",
        isAsync: false,
      },
    },
    password: { type: String, required: true, min: 8, max: 15},
    address: {
      street: { type: String },
      city: { type: String },
      pincode: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);

        