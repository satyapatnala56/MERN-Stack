import Heart from "react-heart";
import React, { useState} from "react";
import styles from "./Public.module.css";
import { ThreeDots } from "react-bootstrap-icons";

const Post = (props) => {
  const [like, isLiked] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const likeHandler = () => {
    isLiked((like) => !like);
  };

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
        <p>{props.data.description}</p>
        {/*<div className={styles.heart}>
          <Heart isActive={like} onClick={likeHandler} />
          <p>{props.data.likes}</p>
        </div>
  */}
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
          <li onClick={() => props.delete(props.data.id)}>Hide this post</li>
        </ul>
      )}
    </div>
  );
};

export default Post;
