import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getWithComment(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({
          path: 'comments',
          model: 'Comment',
          populate: { path: 'comments', model: 'Comment' },
        })
        .populate({ path: 'likes', model: 'Like' })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async find(id) {
    try {
      const result = await Tweet.findById(id).populate('likes');
      return result;
    } catch (error) {
      console.log('Something gone wrong with  crud repo');
      throw error;
    }
  }
}

export default TweetRepository;
