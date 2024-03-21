import pg from "pg";

const db = new pg.Client({
  host: "localhost",
  database: "Blog",
  port: 5432,
  user: "postgres",
  password: "123",
});

db.connect((err) => {
  if (err) return console.log("Can't Connet to Database");
  return console.log("Connect Successfully");
});

export default db;
