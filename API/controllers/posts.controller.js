import db from "../db.js";

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
    "SELECT username, title, descr,cat,date ,u.img as userimg ,p.img as postimg  from users as u JOIN posts AS p ON u.id = p.uid WHERE p.id = $1";
  try {
    const { rows } = await db.query(queryPost, [req.params.id]);
    return res.status(200).json(rows[0]);
  } catch (error) {
    return console.log(error);
  }
};

const addPost = async (req, res) => {
  res.json("this is controller POST");
};
const deletePost = async (req, res) => {
  const token = req.cookies.access_token;
  console.log(token);

  if (!token) return res.status(401).json("Not authenticated!");
  // const postId = req.params.id;
  // console.log(postId);
};
const updatePost = async (req, res) => {
  res.json("this is controller POST");
};

export { getPost, getPosts, addPost, deletePost, updatePost };
