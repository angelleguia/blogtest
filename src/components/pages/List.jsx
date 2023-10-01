import React from "react";

const List = ({ articles, setArticles }) => {
  return articles.map((article) => {
    return (
      <article key={article._id} className="lesson-item">
        <div className="avatar">
          <img alt="Quijano" src={require("../../media/imgs/MrQuijano.webp")} />
        </div>
        <div className="data">
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.content}</p>

          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </article>
    );
  });
};

export default List;
