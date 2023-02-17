import React from "react";

import HomeComponent from "./HomeComponent";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./common/Header";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from "./withNavigation";
function TodoComponent() {
  const LoginComponentwithNavigation = withNavigation(LoginComponent);
  const HomeComponentwithNavigation = withNavigation(HomeComponent);
  return (
    <div className="todo">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponentwithNavigation />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/home/:name" element={<HomeComponentwithNavigation />}></Route>
          <Route path="/list" element={<ListComponent />}></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default TodoComponent;

