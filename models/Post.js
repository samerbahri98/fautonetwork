const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: users,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Post", PostSchema);
