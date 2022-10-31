import React, { useState, useContext } from "react";
import Heart from "react-heart";
import styles from "./Public.module.css";
import { ThreeDots } from "react-bootstrap-icons";
// import { UserContext } from "../context/Context";
// import PopUp from "./Modal/PopUp";

const Post = (props) => {
  const [like, isLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const likeHandler = () => {
    isLiked((like) => !like);
  };

  // const { user } = useContext(UserContext);

  return (
    <div className={styles.card}>
      <div className={styles.topLine}>
        <img src={props.data.icon} alt="profile" className={styles.icon} />
        <h6>{props.data.name}</h6>
        <p>{props.data.posted}</p>
      </div>
      <div className={styles.post}>
        <img src={props.data.image} alt="post" />
      </div>
      <div className={styles.bottomLine}>
        <div className={styles.heart}>
          <Heart isActive={like} onClick={likeHandler} />
          <p>{props.data.likes}</p>
        </div>
      </div>
      <ThreeDots
        className={styles.options}
        onClick={() => setShowOptions((prev) => !prev)}
      />
      {showOptions && (
        <ul className={styles.adOptions}>
          {/* {user.role === "admin" && (
            <>
              <li onClick={() => props.delete(props.data.id)}>Delete this post</li>
              <li>Blacklist this user</li>
            </>
          )} */}
          <li>Block this user</li>
        </ul>
      )}
    </div>
  );
};

export default Post;
