import Jwt from 'passport-jwt';
import User from '../models/user.js';
const JwtStrategy = Jwt.Strategy;
const ExtractJwt = Jwt.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'twitter_secret',
};

export const passportAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);

      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};
