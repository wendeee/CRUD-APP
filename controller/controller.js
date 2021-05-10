const { User } = require("../model/user");

//Controller function to create, get, update and delete data for each endpoint

const getAllData = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    message: "Data retrieved successfully",
    data: users,
  });
};

const getDataById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res
      .status(404)
      .json({ status: "Failed", message: "User with given Id does not exist" });
  }
  res.json({
    status: "success",
    message: "User retrieved successfully",
    data: user,
  });
};

const addNewData = async (req, res) => {
  const { name, email, country } = req.body;
  if (!req.body.name || !req.body.email || !req.body.country) {
    return res.status(400).json({
      message: "Enter body parameters",
    });
  }
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    country: req.body.country,
  });
  user = await user.save();
  res.json({
    status: "success",
    message: "New data created successfully",
    data: user,
  });
};

const updateData = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      email: req.body.email,
    },
    {
      new: true,
    }
  );
  if (!user) {
    return res.status(404).json({
      status: "Failed",
      message: "User not found",
    });
  }
  res.json({
    status: "201",
    message: "User data updated successfully",
    data: user,
  });
};

const deleteData = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) {
    return res
      .status(404)
      .json({ status: "Failed", message: "User with Id not found" });
  }
  res.json({
    status: "success",
    message: "Data deleted successfully",
    data: user,
  });
};

module.exports = {
  getAllData,
  getDataById,
  addNewData,
  updateData,
  deleteData,
};
