import React, { useEffect, useState } from "react";
import styles from "./Public.module.css";
import { ThreeDots, Heart, HeartFill } from "react-bootstrap-icons";
import axios from "axios";

const Post = (props) => {
  const [like, setLike] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [file, setFile] = useState(null);
  const [likeCounter, setLikeCounter] = useState(Number(props.data.likes));

  useEffect(() => {
    const fetchFile = async () => {
      const res = await axios.get(
        `http://localhost:5500/post/${props.data.file}`
      );
      setFile(res.data);
    };
    fetchFile();
  }, []);

  useEffect(() => {
    // const updateLikes = async () => {
    //   const res = await axios.get(
    //     `http://localhost:5500/post/updatelike/${props.data._id}`
    //   );
    //   console.log(res);
    // };
    // updateLikes();
  }, [likeCounter, props.data._id]);

  const likeHandler = () => {
    setLike((like) => !like);
    setLikeCounter((prev) => {
      const newCount = like ? prev - 1 : prev + 1;
      const res = axios.get(
        `http://localhost:5500/post/updatelike/${props.data._id}?likes=${newCount}`
      );
      console.log(res);
      return newCount;
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.topLine}>
        <img src={props.data.icon} alt="profile" className={styles.icon} />
        <h6>{props.data.userName}</h6>
        <p>{props.data.posted}</p>
      </div>
      <div className={styles.post}>
        {file !== null ? <img src={file} alt="post" /> : <p>Loading...</p>}
      </div>
      <div className={styles.bottomLine}>
        <div className={styles.subLine}>
          <span style={{ fontSize: "1.1rem" }}>{likeCounter}</span>

          {like ? (
            <HeartFill className={styles.heartLiked} onClick={likeHandler} />
          ) : (
            <Heart className={styles.heart} onClick={likeHandler} />
          )}
        </div>
        <p>{props.data.description}</p>
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
