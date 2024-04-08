const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { getConnection, runQueryValues, loginSyntax } = require("../model/dpPool");
const secret = "tech4dev";

const newLogin = async (req, res) => {
  const credentials = {
    username: req.body.username,
    userpassword: req.body.userpassword,
  };
  const connection = await getConnection();
  try {
    const result = await runQueryValues(connection, loginSyntax, [
      credentials.username,
      credentials.userpassword,
    ]);
    const vFy = await bcrypt.compare(credentials.userpassword, result[0].userpassword);
    if (vFy) {
      const token = jwt.sign(credentials, secret);
      res.status(200).json({ message: result, token });
     //  console.log(token);
    } else {
      res.status(403).json({ message: "invalid Login Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
  //     //return login status
  // //verify user_ date
};
module.exports = { newLogin };
