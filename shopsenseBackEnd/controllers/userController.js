const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken")



// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  
    const { name, email, password } = req.body;
    console.log(req.body)
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "sample id",
        url: "profile pic url",
      },
    });

    sendToken(user, 201, res);

  });

  // Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  console.log("hi")

  // checking if user has given password and email both

  if (!email || !password) {
    console.log("1")
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    console.log("2")
    return next(new ErrorHander("Invalid email or password", 401)); 
  }

  const isPasswordMatched = await user.comparePassword(password);
  console.log(isPasswordMatched)
  if (!isPasswordMatched) {
    console.log("3")
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  console.log("log out called")
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });

  console.log("log out successfull")
});