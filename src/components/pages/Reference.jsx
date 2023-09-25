import React from "react";
import { Link } from "react-router-dom";

const Reference = () => {
  return (
    <>
      <div className="general">
        <h1>Welcome to Technoteka</h1>
        <p>
          This is a blog made to learn and improve Spanish and conversational
          Spanish skills.
        </p>
        <Link to="/articles" className="button">
          Learn Spanish
        </Link>
      </div>
    </>
  );
};

export default Reference;
