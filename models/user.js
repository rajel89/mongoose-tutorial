const mongoose = require("mongoose");
const Joi = require("joi");
const { productSchema } = require("./product");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isGoldMember: { type: Boolean, default: false },
  shoppingCart: { type: [productSchema], default: [] },
});

const user = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(user);
}



exports.User = User;
exports.validate = validateUser;
