const  { getConnection, runQueryValues, sql} = require('../model/dpPool')

async function call() {
  const connection = await getConnection();
  try {
    const result = await runQueryValues(connection, sql, ["milo", 1, 2, 3]);
//     console.log(result);
  } catch (err) {
    console.log(err);
  }
}
call();