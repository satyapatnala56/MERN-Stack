import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./Public.module.css";
import PostModal from "./PostModal";
import { PencilFill } from "react-bootstrap-icons";
import UserNav from "../parts/userNav";
import { useSelector } from "react-redux";

const dummy_data = [
  {
    id: 1,
    icon: "https://images.hitpaw.com/topics/video-tips/cute-anime-1.jpg",
    name: "Galaxy",
    image:
      "https://ensia.com/wp-content/uploads/2018/01/Voices_Arts_main-760x378.jpg",
    posted: "6h ago",
    likes: 10,
    description: 'Art is a lie that makes us realise the truth',
  },
  {
    id: 2,
    icon: "https://images.hitpaw.com/topics/video-tips/cute-anime-1.jpg",
    name: "Galaxy",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NjgEHrC9ipXtgPYSUwrwuFPw9j1ckT4Fng&usqp=CAU',
    posted: "1d ago",
    likes: 10,
    description: 'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
  }
];

const Public = () => {

  const user = useSelector(state => state.user.user)

  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState(dummy_data);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch("http://localhost:5500/posts");
  //     const data = await response.json();
  //     setPosts(data);
  //   }
  //   fetchPosts();
  // }, [])


  const postModalHandler = (e) => {
    setPost(true);
  };

  const addPostHandler = (postObj) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts, postObj];
      return newPosts;
    });
  };

  const deletePost = (id) => {
    setPosts((prev) => {
      let newPosts = prev.filter((post) => post.id !== id);
      return newPosts;
    });
  };

  return (<>
  <UserNav />
      <div className={styles.public}>
      <div className={`container ${styles.align}`}>
        {posts.map((data) => {
          return <Post data={data} delete={deletePost} key={data.id} />;
        })}
      </div>
      <div className={styles.side}>
        <ul>
          <li>
            <img
              src="data:image/jpeg;base64,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"
              alt="fb"
            />
            <span className={styles.center}> {user.username} </span>
          </li>
          <li className={styles.anim}>
            <input type="text" placeholder="Search" className={styles.search} />
          </li>
          <li className={styles.hoverpen} onClick={postModalHandler}>
            <PencilFill /> Add a Post
          </li>
        </ul>
      </div>
      {post && (
        <PostModal change={setPost} add={addPostHandler} len={posts.length} />
      )}
    </div>
  </>
  );
};

export default Public;
