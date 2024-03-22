import React, { useEffect, useState } from "react";
import axios from "axios";

function Menu({ cat }) {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "German",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://i.pinimg.com/236x/d0/2c/de/d02cdeca458227a3309c70d25b9b2fda.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "German2",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://preview.redd.it/germany-as-an-anime-villain-or-hero-according-to-midjourney-v0-iw3fv59l6zvb1.jpg?width=637&format=pjpg&auto=webp&s=db6492e12bd3b4acec3407172885a238d50f2f82",
  //   },
  //   {
  //     id: 3,
  //     title: "German3",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     img: "https://preview.redd.it/countries-as-anime-warriors-v0-9nya91thwsvb1.png?width=640&crop=smart&auto=webp&s=94daab183836ac2cb6de69cecb17290a642dbb0b",
  //   },
  // ];
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/post/?cat=${cat}`);
        setPost(result.data);
        //console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cat]);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
