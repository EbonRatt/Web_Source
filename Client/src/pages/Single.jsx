import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import moment from "moment";
import axios from "axios";

function Single() {
  const [post, setPost] = useState({});

  const { currentUser } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/post/${postId}`);
        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${postId}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post.postimg}`} alt="Picture" />
        <div className="user">
          {post.userimg && <img src={post.userimg} alt="UserPicture" />}
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=${post.id}`} state={post}>
                <img
                  src="https://cdn.pixabay.com/photo/2017/06/06/00/33/edit-icon-2375785_1280.png"
                  alt=""
                />
              </Link>

              <img
                onClick={handleDelete}
                src="https://cdn-icons-png.freepik.com/512/3687/3687412.png"
                alt=""
              />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p>{getText(post.descr)}</p>
      </div>

      <Menu cat={post.cat} />
    </div>
  );
}

export default Single;
