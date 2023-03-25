import express from 'express';
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';
import { TweetRepository, UserRepository } from './repository/index.js';
import LikeService from './services/like-service.js';
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(PORT, async () => {
  console.log(`Server Start on port ${PORT}`);
  await connect();
  console.log('Mongo db connected');

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
  console.log(tweets);
  const users = await userRepo.getAll();
  console.log(users);

  // const user = await userRepo.create({
  //   email: 'vishnupal@admin.com',
  //   password: '123456',
  //   name: 'vishnu',
  // });
  const likeService = new LikeService();
  likeService.toggleLike(tweets[0].id, 'Tweet', users[1].id);
});
