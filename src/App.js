import React from "react";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import Todos from "./components/Todos";
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Todos Redux</h1>
        <Todos />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
