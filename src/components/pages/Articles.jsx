import React from "react";

const Articles = () => {
  return (
    <section className="content">
      <article className="lesson-item">
        <div className="avatar">
          <img alt="Quijano" src={require("../../media/imgs/MrQuijano.webp")} />
        </div>
        <div className="data">
          <h3 className="title">Spanish 1</h3>
          <p className="description">technoteka.es</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </article>
    </section>
  );
};

export default Articles;
