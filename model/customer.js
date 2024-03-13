const Sequelize = require("sequelize");
const { sequelize } = require("../config/connection");

// creating a customer model
//the sequelize creates the table inform of an object then converts them to tables
const Customer = sequelize.define("customer", {
  cusid: {
    //the sequelize is the constructor here
    // UUID is also a data-type
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNul: false,
    primaryKey: true,
  },
  cusName: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNul: false,
    unique: true,
  },
  password: {
    type: Sequelize.TEXT,
    allowNul: false,
  },
});
//sync will execute  by creating the customer table with a
// Customer.sync()
//   .then((rs) => {
//     console.log(rs);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = { Customer }
//you need to cd into the model folder to run this
