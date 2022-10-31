import React, { useState } from "react";
import Post from "./Post";
import styles from "./Public.module.css";
import PostModal from "./PostModal";
import { Pen, Pencil, PencilFill } from "react-bootstrap-icons";
import UserNav from "../parts/userNav";

const dummy_data = [
  {
    id: 1,
    icon: "https://images.hitpaw.com/topics/video-tips/cute-anime-1.jpg",
    name: "Galaxy",
    image:
      "https://ensia.com/wp-content/uploads/2018/01/Voices_Arts_main-760x378.jpg",
    posted: "6h ago",
    likes: 10,
  },
];

const Public = () => {
  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState(dummy_data);

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
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
              alt="fb"
            />
            <span className="align-items-center">User</span>
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
