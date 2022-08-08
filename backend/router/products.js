require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const Product = require("../model/Product");
const auth = require("../middleware/auth");

const selection = "title desc price img ";

//==create new product==//
router.put("/create", async (req, res) => {
  try {
    const product = await Product.findOne({ title: req.body.title });
    if (product) {
      return res
        .status(400)
        .json({ status: "error", message: "dplicate title" });
    }

    const createdProduct = await Product.create({
      title: req.body.title,
      price: req.body.price,
      // desc: req.body.desc,
      img: req.body.img,
      status: req.body.status,
    });

    console.log("create product:", createdProduct);
    res.json({ status: "ok", message: "product created" });
  } catch (error) {
    console.log("PUT/create", error);
    res.status(400).json({ status: "error", message: "an error has occurred" });
  }
});

//==display all products with auth==//
// router.get("/displayAll", auth, async (req, res) => {
//   try {
//     if (req.decoded.isAdmin) {
//       const allProducts = await Product.find().select(selection);
//       res.json(allProducts);
//     }
//   } catch (error) {
//     console.log(`GET /displayAll ${error}`);
//     res
//       .status(400)
//       .json({ status: "error", message: "failed to display all products" });
//   }
// });

router.get("/displayAll", async (req, res) => {
  try {
    const allProducts = await Product.find().select(selection);
    res.json(allProducts);
  } catch (error) {
    console.log(`GET /displayAll ${error}`);
    res
      .status(400)
      .json({ status: "error", message: "failed to display all products" });
  }
});

//==diplay status==//
// router.post("/display/products/:status", auth, async (req, res) => {
//   console.log(req.body.boardId);
//   try {
//     const board = await Product.findOne(
//       {
//         _id: req.body.boardId,
//       }
//       //   {
//       //     activeCards: { status: { $eq: req.params.status } } ,
//       //   }
//     );
//     if (!board) {
//       return res
//         .status(404)
//         .json({ status: "error", message: "board does not exist" });
//     }
//     const filteredArray = board.activeCards.filter(
//       (card) => card.status === req.params.status
//     );

//     res.json(filteredArray);
//   } catch (err) {
//     console.log("GET /display/cards/:status", err);
//     res.status(400).json({ status: "error", message: "an error has occurred" });
//   }
// });

//==store the image==//
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../Frontend/src/images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// let upload = multer({ storage, fileFilter });

//==edit =// but not working

// router.patch("/edit", auth, async (req, res) => {
//   console.log("req.decoded.isAdmin: ", req.decoded.isAdmin);

//   try {
//     if (req.decoded.isAdmin) {
//       const products = await Product.find({ _id: req.body.id });
//       await Product.updateOne(
//         { _id: req.body.id },
//         {
//           $set: {
//             title: req.body.title || products.title,
//             desc: req.body.desc || products.desc,
//             price: req.body.price || products.price,
//             img: req.body.img || products.img,
//             status: req.body.status || products.status,
//           },
//         }
//       );
//       res.status(200).json({ status: "ok!", message: "products edited." });
//     } else {
//       console.log(error);
//       return res.status(401).json({
//         status: "error",
//         message: "Unauthorised to edit",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       status: "error",
//       message: "An error occured.",
//     });
//   }
// });

//== edit without auth==//
router.patch("/edit/:id", async (req, res) => {
  try {
    const products = await Product.find({ _id: req.params.id });
    await Product.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title || products.title,
          desc: req.body.desc || products.desc,
          price: req.body.price || products.price,
          img: req.body.img || products.img,
          status: req.body.status || products.status,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: "ok!", message: "products edited." });

    // console.log(error);
    // return res.status(401).json({
    //   status: "error",
    //   message: "Unauthorised to edit",
    // });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "error",
      message: "An error occured.",
    });
  }
});

// router.patch("/edit/:id", async (req, res) => {
//   try {
//     const products = await Product.find({ _id: req.params.id });
//     await Product.updateOne(
//       { _id: req.params.id },
//       {
//         $set: {
//           title: req.body.title || products.title,
//           desc: req.body.desc || products.desc,
//           price: req.body.price || products.price,
//           img: req.body.img || products.img,
//           status: req.body.status || products.status,
//         },
//       },
//       { new: true }
//     );
//     res.status(200).json({ status: "ok!", message: "products edited." });

//     // console.log(error);
//     // return res.status(401).json({
//     //   status: "error",
//     //   message: "Unauthorised to edit",
//     // });
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       status: "error",
//       message: "An error occured.",
//     });
//   }
// });

// router.delete("/delete", auth, async (req, res) => {
//   console.log("DELETE /delete path activated");
//   console.log("req.decoded.isAdmin: ", req.decoded.isAdmin);

//   try {
//     if (req.decoded.isAdmin) {
//       await Product.deleteOne({ _id: req.body.id });
//       res.json({ status: "ok!", message: "Recipe deleted." });
//     } else {
//       console.log(error);
//       return res.status(401).json({
//         status: "error",
//         message: "Unauthorised to edit.",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       status: "error",
//       message: "An error occured.",
//     });
//   }
// });

// router.delete("/delete/:title", async (req, res) => {
//   console.log("DELETE /delete path activated");

//   try {
//     if (Product) {
//       await Product.deleteOne({ title: req.params.title });
//       res.json({ status: "ok!", message: "Product deleted." });
//     } else {
//       console.log(error);
//       return res.status(401).json({
//         status: "error",
//         message: "Unauthorised to delete.",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({
//       status: "error",
//       message: "An error occured.",
//     });
//   }
// });

router.delete("/delete/:id", auth, async (req, res) => {
  console.log("DELETE /delete path activated");

  try {
    if (Product) {
      await Product.deleteOne({ _id: req.params.id });
      res.json({ status: "ok!", message: "Product deleted." });
    } else {
      console.log(error);
      return res.status(401).json({
        status: "error",
        message: "Unauthorised to delete.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "error",
      message: "An error occured.",
    });
  }
});

// router.delete("/delete", async (req, res) => {
//   const { title } = req.body;
//   await Product.deleteOne({ title });

//   res.json({ status: "ok", message: "deleted" });
// });

//== change status to "cart"==//
router.patch("/addtocart/:id", async (req, res) => {
  const response = await Product.updateOne(
    {
      _id: req.params.id,
    },
    {
      status: "cart",
    }
  );

  console.log(response);

  res.json({ status: "ok", message: "updated" });
});

//==print all status: cart==//
router.get("/cart", async (req, res) => {
  try {
    const allCart = await Product.find({ status: "cart" }).select(selection);
    res.json(allCart);
    console.log("updated");
  } catch (error) {
    console.log(`GET /displayAll ${error}`);
    res
      .status(400)
      .json({ status: "error", message: "failed to display all products" });
  }
});

router.get("/allcart", async (req, res) => {
  try {
    const allPrice = await Product.find({ status: "cart" }).select("price");
    res.json(allPrice);
    console.log("AllPrices");
  } catch (error) {
    console.log(`GET /displayPrice ${error}`);
    res
      .status(400)
      .json({ status: "error", message: "failed to display product's price" });
  }
});

//=change sttus to selection ==back to menu==//
router.patch("/removecart/:id", async (req, res) => {
  const response = await Product.updateOne(
    {
      _id: req.params.id,
    },
    {
      status: "selection",
    }
  );

  console.log(response);

  res.json({ status: "ok", message: "updated" });
});

//==update status to complete==//
router.patch("/completed", async (req, res) => {
  const response = await Product.updateMany(
    {
      status: "cart",
    },
    {
      status: "completed",
    }
  );

  console.log(response);

  res.json({ status: "ok", message: "updated" });
});

router.get("/completedlist", async (req, res) => {
  const allCompletedList = await Product.find({ status: "completed" });
  res.json(allCompletedList);
});

router.patch("/favourite", async (req, res) => {
  // both admin and users can update listing favourite count
  const newListingData = await Listing.findOneAndUpdate(
    { _id: req.body.id },
    { $inc: { favouritesCount: +1 } },
    { new: true }
  );
  res.json(newListingData);
});

// UPDATE LISTING ARCHIVE STATE
router.patch("/archive", async (req, res) => {
  const newListingArchive = await Listing.findOneAndUpdate(
    { _id: req.body.id },
    { isArchive: req.body.isArchive },
    { new: true }
  );
  res.json(newListingArchive);
});

module.exports = router;
