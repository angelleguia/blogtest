import React from "react";
import Global from "../../helpers/Global";
import { Request } from "../../helpers/Request";
import { Link } from "react-router-dom";

const List = ({ articles, setArticles }) => {
  const erase = async (id) => {
    //Generate an AJAX Request deleting article
    let { data } = await Request(Global.url + "list-article/" + id, "DELETE");
    // console.log(data);
    // alert(id + "deleted");

    if (data.status === "deleted") {
      let refreshedArticles = articles.filter((article) => article._id !== id);
      setArticles(refreshedArticles);
    }
  };
  return articles.map((article) => {
    return (
      <article key={article._id} className="lesson-item">
        <div className="avatar">
          {article.image !== "default.png" && (
            <img alt="upload_img" src={Global.url + "image/" + article.image} />
          )}
          {article.image === "default.png" && (
            <img
              alt="Quijano"
              src={require("../../media/imgs/MrQuijano.webp")}
            />
          )}
        </div>
        <div className="data">
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.content}</p>

          <Link to={"edit/" + article._id} className="edit">
            Edit
          </Link>
          <button
            className="delete"
            onClick={() => {
              erase(article._id);
            }}
          >
            Delete
          </button>
        </div>
      </article>
    );
  });
};

export default List;
