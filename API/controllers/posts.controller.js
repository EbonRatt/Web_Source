import db from "../db.js";
import Jwt from "jsonwebtoken";

const getPosts = async (req, res) => {
  const queryPosts = req.query.cat
    ? "SELECT * FROM posts WHERE cat=$1"
    : "SELECT * FROM posts";

  try {
    const { rows } = await db.query(
      queryPosts,
      req.query.cat ? [req.query.cat] : []
    );
    return res.status(200).json(rows);
  } catch (error) {
    return res.send(error);
  }
};

const getPost = async (req, res) => {
  const queryPost =
    "SELECT p.id, username, title, descr,cat,date ,u.img as userimg ,p.img as postimg  from users as u JOIN posts AS p ON u.id = p.uid WHERE p.id = $1";
  try {
    const { rows } = await db.query(queryPost, [req.params.id]);
    return res.status(200).json(rows[0]);
  } catch (error) {
    return console.log(error);
  }
};

const addPost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    console.log(
      req.body.title,
      req.body.descr,
      req.body.img,
      req.body.date,
      req.body.cat,
      userInfo.id
    );
    const values = [
      req.body.title,
      req.body.descr,
      req.body.img,
      req.body.date,
      req.body.cat,
      userInfo.id,
    ];
    db.query(
      "INSERT INTO posts (title, descr, img, date,cat,uid) VALUES ($1,$2,$3,$4,$5,$6)",
      [...values],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Already to Posted!");
      }
    );
  });
};

const deletePost = async (req, res) => {
  const token = req.cookies.access_token;
  //console.log(token);

  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const postId = req.params.id;
    //console.log(postId);
    //console.log(userInfo);
    db.query(
      "Delete from posts where id = $1 and uid = $2",
      [postId, userInfo.id],
      (err, data) => {
        if (err) return res.status(400).json("You Can delete only your Post");

        return res.json("Post have been Deleted!");
      }
    );
  });
};
const updatePost = async (req, res) => {
  //console.log("Update Post");
  const token = req.cookies.access_token;
  const postId = req.params.id;

  if (!token) return res.status(401).json("Not authenticated!");

  Jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // const value = [req.body.title, req.body.descr, req.body.img, req.body.cat];
    // console.log(postId);
    // console.log(req.body.img);
    // console.log(req.body.title, req.body.descr, req.body.img, req.body.cat);
    // console.log(postId, userInfo.id);

    db.query(
      "update posts set title = $1, descr = $2, cat = $3 ,img =$4 where id = $5 and uid = $6 ",
      [
        req.body.title,
        req.body.descr,
        req.body.cat,
        req.body.img,
        postId,
        userInfo.id,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Updated Post!");
      }
    );
  });
};

export { getPost, getPosts, addPost, deletePost, updatePost };
