import { UserRepository } from '../repository/index.js';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    try {
      const user = this.userRepository.create(data);
      return user;
    } catch (error) {
      throw error;
    }
  }
  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.findBy({ email });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(data) {
    try {
      const user = await this.getUserByEmail(data.email);

      if (!user) {
        throw {
          message: 'No user Found',
          success: false,
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: 'Invalid password',
          success: false,
        };
      }

      const token = user.getJWT();

      return token;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
