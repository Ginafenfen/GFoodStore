const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    desc: {
      type: String,
      maxLength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "selection",
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    // extraOptions: {
    //   type: [
    //     {
    //       text: { typer: String, required: true },
    //       price: { type: Number, required: true },
    //     },
    //   ],
    // },
  },
  { timeStamps: true }
);
{
  collections: "Products";
}
module.exports = mongoose.model("Products", ProductSchema);

// const OrderSchema = new mongoose.Schema({
//   orderNumber: {
//     type: String,
//     default: "order in progress..",
//   },
//   orderNote: {
//     type: String,
//     default: "Add Chili",
//   },
//   comments: [CommentSchema],
//   // comments: {
//   //   type: Array,
//   // },
//   status: {
//     type: String,
//     default: "confirmedOrder",
//   },
//   //=================================== keeping track of creation and updated owner and date
//   createdBy: {
//     type: mongoose.SchemaTypes.ObjectId,
//     required: true,
//     immutable: true,
//     ref: "User",
//   },
//   createdAt: {
//     type: Date,
//     immutable: true,
//     default: () => Date.now(),
//   },
//   updatedBy: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: "User",
//   },
//   updatedAt: {
//     type: Date,
//     default: () => Date.now(),
//   },
//   //===================================
// });

// ////////////////////////////////
// // MenuSchema
// ////////////////////////////////

// const MenuSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       default: "input board description here",
//     },
//     //=================================== keeping track of creation and updated owner and date

//     createdBy: {
//       type: mongoose.SchemaTypes.ObjectId,
//       required: true,
//       immutable: true,
//       ref: "User",
//     },
//     createdAt: {
//       type: Date,
//       immutable: true,
//       default: () => Date.now(),
//     },
//     updatedBy: {
//       type: mongoose.SchemaTypes.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     updatedAt: {
//       type: Date,
//       default: () => Date.now(),
//     },
//     // //=================================== Array of members of the project
//     // members: [
//     //   {
//     //     type: mongoose.SchemaTypes.ObjectId,
//     //     ref: "User",
//     //   },
//     // ],
//     //=================================== Array of Active Cards
//     activeCards: [OrderSchema],
//     //=================================== Array of Archive Cards
//   },
