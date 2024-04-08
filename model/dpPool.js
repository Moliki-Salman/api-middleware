const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  // host: "bgmtwiyfh2dxr5plg7os-mysql.services.clever-cloud.com",
  // password: "j35HEHSAcHF56lCyAMhz",
  // user: "uycm4qfpbv5zgizs",
  // database: "bgmtwiyfh2dxr5plg7os",
  host: "localhost",
  password: "1234",
  user: "root",
  database: "user_table",
});

function getConnection() {
  return new Promise((resolve, reject) => {
    //the getConnection() here is a method in mySql
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        resolve(connection);
      }
    });
  });
}
function runQueryValues(conn, sqlQuery, values) {
  return new Promise((resolve, reject) => {
    conn.query(sqlQuery, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
const sql = "insert into product(product_name,unit_price,quantity,total)values(?,?,?,?)";
const signupSyntax = "insert into users(username,userpassword)values(?,?)";
const loginSyntax = "select * from users where username = ?"

module.exports = { getConnection, runQueryValues, sql, signupSyntax, loginSyntax };


