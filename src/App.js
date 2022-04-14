import "./App.css";
import React from "react";

import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Home, Cart } from "./pages";
import { Header } from "./components";
import axios from "axios";
//import store from "./redux/store";


function App() {
 
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Route path="/" component = {Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
export default App;
