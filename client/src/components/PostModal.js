import React, { useState, useRef } from "react";
import styles from "./PostModal.module.css";
import { Images, PencilFill } from "react-bootstrap-icons";

const PostModal = (props) => {
  const inputRef = useRef(null);
  const descRef = useRef(null);
  const tagsRef = useRef(null);

  const [image, setImage] = useState(null);

  const postImageHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.files[0];
    const desc = descRef.current.value;
    const tags = tagsRef.current.value;
    if (inputVal == null) {
      alert("Add Some picture to post");
      return;
    }
    if (desc.length === 0) {
      alert("Description cannot be empty");
      return;
    }
    const obj = {
      id: props.len,
      icon: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg",
      name: "Bruh",
      posted: "now",
      likes: 0,
      image: URL.createObjectURL(inputVal),
    };
    props.add(obj);
    props.change(false);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.can} onClick={() => props.change(false)}>
            X
          </div>
          <h5>Add a Post</h5>
          <div className={styles.container}>
            <div className={styles.file}>
              <input
                type="file"
                className="d-none"
                id="f-input"
                accept=".png,.jpeg,.jpg"
                onChange={postImageHandler}
                ref={inputRef}
              />
              {image === null ? (
                <label htmlFor="f-input">
                  <Images />
                  <span>Upload an Image</span>
                </label>
              ) : (
                <img src={image} alt="post" className={styles.postImg}></img>
              )}
            </div>
            <div className={styles.details}>
              <div className={styles.user}>
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
                  alt="fb"
                />
                <span className="align-items-center">User</span>
              </div>
              <textarea
                placeholder="Write a caption..."
                ref={descRef}
              ></textarea>
              <label htmlFor="tags">Add Tags</label>&nbsp;
              <input type="text" id="tags" ref={tagsRef} />
              <button className={styles.post} type="submit">
                <PencilFill />
                <span>Add Post</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
