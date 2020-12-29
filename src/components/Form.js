import React, { useRef } from "react";
import axios from 'axios';
import {useHistory} from "react-router-dom";
import "./Form.css";

const Form = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const history = useHistory();
  function handleSubmit(){
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: titleRef.current.value,
          body: bodyRef.current.value
        })
        .then((res) => console.log(res));
        history.push("/");
    }

  
  return (
    <div className="input_area">
      <input placeholder="Title" className="title_input" type="text" ref={titleRef}/>
      <input placeholder="Type here..." className="body_input" type="text" ref={bodyRef}/>
      <button className="submit_btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
