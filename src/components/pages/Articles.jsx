import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Global from "../../helpers/Global";
import { useMayus } from "../../hooks/useMayus";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const [mayusLetter, setMayusLetter] = useState("Our Courses");

  const { mayus, concatenar } = useMayus(mayusLetter);

  useEffect(() => {
    // let data = [
    //   {
    //     _id: 1,
    //     title: "Title 1",
    //     content: "Content 1",
    //   },
    //   {
    //     _id: 2,
    //     title: "Title 2",
    //     content: "Content 2",
    //   },
    //   {
    //     _id: 3,
    //     title: "Title 3",
    //     content: "Content 3",
    //   },
    // ];

    //AJAX Request

    getArticles();
  }, []);

  const getArticles = async () => {
    const url = Global.url + "list-article";
    let request = await fetch(url, {
      method: "GET",
    });

    let data = await request.json();
    console.log(data);

    if (data.status === "saved") {
      setArticles(data.articles);
    }
  };
  return (
    <section className="content">
      {mayusLetter}
      <button
        onClick={(e) => {
          setMayusLetter(mayus);
        }}
      >
        MAYUSC
      </button>

      {articles.map((article) => {
        return (
          <article key={article._id} className="lesson-item">
            <div className="avatar">
              <img
                alt="Quijano"
                src={require("../../media/imgs/MrQuijano.webp")}
              />
            </div>
            <div className="data">
              <h3 className="title">{article.title}</h3>
              <p className="description">{article.content}</p>

              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Articles;
