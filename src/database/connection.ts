import knex from 'knex'
import path from 'path'



const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export const testConnection = async () => {
  return await db.raw("select 1+1 as result").then(() => {
    console.log("🍕 Successfully connected with database!")
  }).catch((err) => {
    console.log(err);
  })
}

export default db;