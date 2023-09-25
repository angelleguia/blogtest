import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "../components/pages/Articles";
import Reference from "../components/pages/Reference";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Create from "../components/pages/Create";

const Links = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reference />} />
        <Route path="/home" element={<Reference />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/create-entry" element={<Create />} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};

export default Links;
