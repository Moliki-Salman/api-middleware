const express = require("express");
const app = express();
const { router } = require("./routes/rts");
const cors = require('cors')
const bodyParser =require('body-parser')
const PORT = 6000;


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use("/", (req, res, next) => {
  /*locals is a predefined OBJECT attribute to res.locals method, just as status is an object to res.status
 its a predifined object in Express that is used to pass values between middlewares
*/
  res.locals.username = "my username";
  next();
});

app.use("/", router);

app.listen(`${PORT}`, function () {
  console.log("server runing on port 6000");
});
