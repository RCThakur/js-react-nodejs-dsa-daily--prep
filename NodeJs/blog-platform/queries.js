const User = require("./models/User");
const Post = require("./models/Post");

//Find all posts with more than 10 likes, sorted by likes descending, returning only the title, likes, and creation date.
async function postMoreThan10Like() {
  return Post.find({ like: { $gt: 10 } }, "title like createAt").sort({
    like: -1,
  });
}

async function userWithEmail() {
  return User.find({
    email: /@psail\.com$/i,
    role: "user",
  });
}

async function taggedPost() {
  return Post.find({
    tage: {
      $in: [/nodejs/i, /mongodb/i],
    },
  });
}

async function incrementLikes(authorId) {
  return Post.updateMany({ author: authorId }, { $inc: { likes: 1 } });
}
