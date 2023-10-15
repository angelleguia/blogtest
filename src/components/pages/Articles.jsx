import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Global from "../../helpers/Global";
import { useMayus } from "../../hooks/useMayus";
import { Request } from "../../helpers/Request";
import List from "./List";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const [mayusLetter, setMayusLetter] = useState("Mayus");
  const [loading, setLoading] = useState(true);

  const { mayus } = useMayus(mayusLetter);

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
    const { data, loading } = await Request(
      Global.url + "list-articles",
      "GET"
    );
    console.log(await Request(Global.url + "list-articles", "GET"));

    // let request = await fetch(url, {
    //   method: "GET",
    // });

    // let data = await request.json();
    // console.log(data);

    if (data.status === "get") {
      setArticles(data.articles);
    }
    setLoading(false);
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

      {loading ? (
        "Loading..."
      ) : articles.length >= 1 ? (
        <List articles={articles} setArticles={setArticles} />
      ) : (
        <h1>No Articles</h1>
      )}
    </section>
  );
};

export default Articles;
