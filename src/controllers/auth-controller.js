import UserService from '../services/user-service.js';

const userService = new UserService();
export const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      data: response,
      err: {},
      success: true,
      message: 'User Successfully Signup',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: 'Failed to Signup',
    });
  }
};
export const login = async (req, res) => {
  try {
    const token = await userService.signIn(req.body);

    return res.status(200).json({
      success: true,
      message: 'Successfully logged in',
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      err: error,
      success: false,
      message: 'Failed to Login',
    });
  }
};
