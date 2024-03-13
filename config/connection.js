const Sequelize = require('sequelize');
const dotenv = require("dotenv")
dotenv.config()

const sequelize = new Sequelize(
  "btmmyqt5pcqx5gq9d3bc", //database name
  "uzrq54ujk7xas7ge", // username or user, its set to "root" if its connected locally
  "yBsfvtYJB3BPE9jlnTuA", // password
  { dialect: "mysql" , host: "btmmyqt5pcqx5gq9d3bc-mysql.services.clever-cloud.com" } // host,its set to localhost if itsconnected locally
);


// sequelize.authenticate().then(()=>{
//      console.log("connected")
// }).catch(err => {
// console.log(err)
// })

module.exports= { sequelize }