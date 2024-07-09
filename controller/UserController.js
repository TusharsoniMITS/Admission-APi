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
  static insertReg = async (req, res) => {
    try {
      // res.render('register');
      // console.log(req.body);
      //console.log(req.files.Image);
      const file = req.files.image;
      //image upload
      const uploadImage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "profile1",
      });
      console.log(uploadImage);
      const { n, e, p, cp } = req.body;
      const user = await UserModel.findOne({ email: e });
      //console.log(user);
      if (user) {
        res
          .status(401)
          .json({ status: "failed", message: "This email already exists" });
      } else {
        if (n && e && p && cp) {
          if (p == cp) {
            const hashpassword = await bcrypt.hash(p, 10);
            const result = new UserModel({
              name: n,
              email: e,
              password: hashpassword,
              image: {
                public_id: uploadImage.public_id,
                url: uploadImage.secure_url,
              },
            });
            await result.save();
            if (userdata) {
              const token = jwt.sign({ ID: userdata.id }, "Tusharsoni12345");
              res.cookie("token", token);
              res
                .status(401)
                .json({
                  status: "success",
                  message: "your register succesfully",
                });
            } else {
              req.flash("error", "Not Register");
              res
                .status(401)
                .json({
                  status: "success",
                  message: "your register succesfully",
                });
            }
          } else {
            res
              .status(401)
              .json({
                status: "failed",
                message: "password and conform password not same",
              });
          }
        } else {
          res.status(401).json({ status: "failed", message: "All field req" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  static Registraion = async (req, res) => {
    try {
      res.send("Registraion");
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = UserController;
