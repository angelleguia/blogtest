import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "../components/pages/Articles";
import Reference from "../components/pages/Reference";

const Links = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reference />} />
        <Route path="/home" element={<Reference />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Links;
