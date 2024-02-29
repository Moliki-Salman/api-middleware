const bcrypt = require('bcryptjs')
const bcSaltRound = bcrypt.genSaltSync(10)
const { getConnection, runQueryValues, signupSyntax } = require("../model/dpPool");

async function signup(req, res) {
const credentials = {
  username: req.body.username,
  userpassword: bcrypt.hashSync(req.body.userpassword, bcSaltRound), // encrypt password
};
  const connection = await getConnection();
  try {
    const result = await runQueryValues(connection, signupSyntax, [credentials.username, credentials.userpassword]);
        // console.log(result);
        res.status(200).json({ message: result})
  } catch (err) {
    console.log(err);
  }
}

// signup();
module.exports= { signup }

// in case server refuse to run with app.js; to run the signupfunction here,you have cd into the controllers terminal and run node signuo.js
