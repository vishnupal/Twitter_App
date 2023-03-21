const express = require('express');
const connect = require('./config/database');
const app = express();
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`Server Start on port ${PORT}`);
  await connect();
  console.log('Mongo db connected');
  // const tweet = await Tweet.create({
  //   content: ' Third Tweet',
  //   userEmail: 'useremail@b.com',
  // });
  // const tweet = await Tweet.find({ content: ' First Tweet' });
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.getWithComment('6419e30fd1cb7c28557c206c');
  console.log(tweet);

  // const comment = await Comment.create({ content: 'new comment' });
  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet);
});
