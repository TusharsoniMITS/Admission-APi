const UserModel = require("../model/user");
const cloudinary = require('cloudinary').v2
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
cloudinary.config({
    cloud_name: "djbnrq83q",
    api_key: "113997631458756",
    api_secret: "RrZBlFCqIP2op-VCy6qwbUs5mL8",
  });

class UserController {
  static Getuser = async (req, res) => {
    try {
      const data = await UserModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ status: "failed", message: error.message });
    }
  };
}
module.exports = UserController;
