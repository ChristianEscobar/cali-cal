const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./../models');
const keys = require('./../config/keys');

console.log(db.user.create);

// user.id = profile id automatically given to you by Sequelize
passport.serializeUser( (user, done) => {
  
  // take given id into cookie
  console.log("line 12", user.dataValues.id);
  done(null, user.dataValues.id);
});

passport.deserializeUser( async(id, done) => {
  const user = await db.user.findById( id );
  // console.log("user", user);
  done(null, user);
});

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
  }, async (accessToken, refreshToken, profile, done) => {
    
    // check if existing user
    const existingUser = await db.user.findOne({ where: {googleId: profile.id} });

    // if there is, call done with existing user
    if (existingUser) {
      done(null, existingUser);

    // otherwise create new user
    } else {
      const user = await db.user.create({ googleId: profile.id });
      console.log("line 38", user.dataValues.id);
      done(null, user);
    }
  })
)