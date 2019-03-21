const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        User.validatePassword(password, user.password).then(isValid => {
          if (!isValid) {
            throw new Error();
          }

          // login
          completeLogin(request, response, user);
        });
      })
      .catch(error => {
        console.log(error);

        response
          .status(Http.Unauthorized)
          .json('email/password combo not correct');
      });
  },
  register(request, response) {
    User.create(request.body)
      .then(user => {
        console.log(user);

        // login
        completeLogin(request, response, user);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  logout(request, response) {}
};

function completeLogin(request, response, user) {
  console.log('logging in ');
  const obj = user.toObject();

  delete obj.password;

  request.session.user = obj;
  response.cookie('userID', obj._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(obj);
}
