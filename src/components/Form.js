import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/actions/lists";
import "../style/Button.css";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };
  return (
    <form onSubmit={submit} style={inputForm}>
      <input
        style={input}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="enter new task"
      />
      <button className="btn">add</button>
    </form>
  );
};

export default Form;

const inputForm = {
  background: "#fff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "5rem",
  padding: "0 2rem",
  justifyContent: "center",
  margin: "0.5rem ",
};

const input = {
  width: "20%",
  border: "none",
};
