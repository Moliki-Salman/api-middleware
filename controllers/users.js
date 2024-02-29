const jwt = require("jsonwebtoken");
const secret = "Tech4Dev";

const user = {
  id: 1,
  userName: "username",
};

const home = async (req, res) => {
  res.status(200).json({ message: "message" });
};

const about = async (req, res) => {
  // res.status(200).json({ message: res.locals.username });
  res.status(200).json({ message: req.text });
};

const login = async (req, res) => {
  const token = jwt.sign(user, secret); // the first parameter is the payload and the second parameter is the secretKey
  console.log(token);
  res.send(token);
};

const details = (req, res) => {
     console.log('message')
res.send({ message: "message" });
}

module.exports = { home, about, login, details };
