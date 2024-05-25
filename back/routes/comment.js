const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const User = require("../models/User"); 


router.get("/getcomment", async (req, res) => {
  try {
    const comments = await Comment.find().populate("post").populate("user");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific comment by ID
router.get("/getcomment/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("post").populate("user");
    if (comment == null) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new comment
router.post("/sendcomment", async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findById(req.body.user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const comment = new Comment({
      comment: req.body.comment,
      post: req.body.post,
      user: req.body.user,
    });

    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a comment by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await comment.remove();
    res.status(200).json({ message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a comment by ID
router.put("/update/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (req.body.comment != null) {
      comment.comment = req.body.comment;
    }

    if (req.body.post != null) {
      comment.post = req.body.post;
    }

    if (req.body.user != null) {
      comment.user = req.body.user;
    }

    const updatedComment = await comment.save();
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
