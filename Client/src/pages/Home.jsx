import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, redirect } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

function Home() {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/post/${cat}`);
        setPosts(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.descr)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
