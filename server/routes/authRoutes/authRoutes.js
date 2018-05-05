const passport = require('passport');

module.exports = app => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // info we want from google
      scope: ['profile', 'email']
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log("req.user", req.user.dataValues);
      // console.log("res", res);
      console.log("redirecting");
      res.redirect('/')
    }
  );

  //logout
  app.get('/api/logout', (req, res) => {

    req.logout();

    // sends back undefined
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    console.log("current", req.user);

    res.send(req.user);
  });
};