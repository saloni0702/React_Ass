import React from "react";
import LandingPage from "./landingPage";
import { Routes, Route } from "react-router-dom";
import PostView from "./post-view";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="PostView" element={<PostView />} />
      </Routes>
    </>
  );
};
export default App;