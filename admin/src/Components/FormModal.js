import { LineAxisOutlined } from "@mui/icons-material";
import React, {useState} from "react";
import { Button } from "react-bootstrap";
import styles from "./FormModal.module.css";
import axios from "axios";

const FormModal = (props) => {



  const submitHandler = (event) => {
    event.preventDefault();
    console.log(2);
    const title = event.target.title.value;
    const artist = event.target.artist.value;
    const url = event.target.url.value;
    const desc = event.target.desc.value;
    const ini = Number(event.target.ini.value);
    const inc = Number(event.target.inc.value);
    const data = {
      title,
      artist,
      url,
      desc,
      ini,
      inc,
    };
    axios.post("http://localhost:5500/auction", data).then((res) => {
      console.log(res);
      props.func(false);
    });
  };

  return (
    <form className={styles.modal} onSubmit={submitHandler}>
      <div className={styles.modalContent}>
        <h2>Add Item</h2>
        <div className={styles.field}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className={styles.field}>
          <label htmlFor="artist">Artist</label>
          <input type="text" id="artist" name="artist" />
        </div>
        <div className={styles.field}>
          <label htmlFor="url">Url</label>
          <input type="text" id="url" name="url" />
        </div>
        <div className={styles.field}>
          <label htmlFor="desc">Description</label>
          <input type="text" id="desc" name="desc" />
        </div>
        <div className={styles.field}>
          <label htmlFor="Initial">Initial Amount</label>
          <input type="number" id="Initial" name="ini" />
        </div>
        <div className={styles.field}>
          <label htmlFor="inc">Increment</label>
          <input type="number" id="inc" name="inc" />
        </div>
        <button type="submit">Submit</button>&nbsp;
        <button type="button" onClick={() => props.func(false)}>Close</button>
      </div>
    </form>
  );
};

export default FormModal;
