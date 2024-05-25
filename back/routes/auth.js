const router = require("express").Router();
const User = require("../models/User");

const bcrypt = require("bcrypt");

//sign-up
//sign-up
router.post("/signup", async (req, res) => {
  try {
      const { email,number, numberu } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hashpass = bcrypt.hashSync(number, salt);
       const user = new User({ email, number:hashpass, number });
      const savedUser = await user.save();
      res.status(200).json({ user: savedUser });
  } catch (error) {
      console.error("Error saving user:", error.message); // Log the error message
      res.status(400).json({ message: "user exist" });
  }
});

//login
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(200).json({ message: "Sign up to access Tasky" });
      }
  
      
      const isPasswordCorrect = bcrypt.compareSync(req.body.number, user.number);
  
      if (!isPasswordCorrect) {
        res.status(200).json({ message: "Wrong password" });
      }
  
      const { password, ...others } = user._doc; // Destructure the user object
      res.status(200).json({ others }); // Send the user data without the password
    } catch (error) {
      console.error(error);
      res.status(200).json({ message: "user exists" });
    }
  });

router.get("/user/:id", async (req, res) => {
  try {
    const userData = await User.findById(req.params.id);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
router.put("/update/:id", async (req, res) => {
  try {
    const { email, number, numberu } = req.body;
    let updatedFields = { email, number };

    if (number) {
      const salt = bcrypt.genSaltSync(10);
      updatedFields.number = bcrypt.hashSync(number, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;