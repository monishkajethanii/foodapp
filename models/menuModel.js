const mongoose = require("mongoose");
const menu = mongoose.Schema(
  {
    name: { type: String, required: true },
    variants: { type: [String], required: true },
    prices: { type: [{ type: Object }], required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps : true,
  }
);
const menuModel = mongoose.model("pizza-menu", menu,"pizza-menu");
module.exports = menuModel;
