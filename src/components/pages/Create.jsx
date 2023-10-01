import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import Global from "../../helpers/Global";
import { Request } from "../../helpers/Request";

const Create = () => {
  const { form, sent, changed } = useForm([]);
  const [result, setResult] = useState(false);

  const saveArticle = async (e) => {
    e.preventDefault();

    //Collect form data
    let newArticle = form;
    console.log(newArticle);

    //Save article on Backend
    const { data, loading } = await Request(
      Global.url + "save-article",
      "POST",
      newArticle
    );

    if (data.status === "success") {
      setResult(true);
    }

    console.log(data);
  };

  return (
    <div className="general">
      <h2>Create course:</h2>
      <pre className="code">{JSON.stringify(form)}</pre>
      <strong>
        {result ? "Article saved successfully." : "Article not saved"}
      </strong>

      <form onSubmit={saveArticle} className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onChange={changed}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            type="text"
            placeholder="Content"
            onChange={changed}
          />
        </div>

        <div className="form-group">
          <label htmlFor="file0">Image</label>
          <input id="file0" name="file0" type="file" placeholder="File" />
        </div>

        <input type="submit" value="Save" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Create;
