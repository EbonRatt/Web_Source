import pg from "pg";

const db = new pg.Client({
  host: "rain.db.elephantsql.com",
  database: "xqcdjfwl",
  port: 5432,
  user: "xqcdjfwl",
  password: "vxKwdBuClLkSKTDsrFWCCc4hl8lZyHEJ",
});

db.connect((err) => {
  if (err) return console.log("Can't Connet to Database");
  return console.log("Connect Successfully");
});

export default db;
