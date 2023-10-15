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
    const { data } = await Request(
      Global.url + "save-article",
      "POST",
      newArticle
    );
    if (data.status === "success") {
      setResult("saved");
    } else {
      setResult("error");
    }

    //Upload Image
    const fileInput = document.querySelector("#file");

    if (data.status === "success" && fileInput.files[0]) {
      setResult("saved");
      console.log(fileInput.value);

      const formData = new FormData();
      formData.set("avatar", fileInput.files[0]);
      // formData.set("avatar", fileInput.files[0], fileInput.files[0].name);

      const upload = await Request(
        Global.url + "upload-image/" + data.article._id,
        "POST",
        formData,
        true
      );

      console.log(upload);
      if (upload.status === "success") {
        setResult("saved");
      } else {
        setResult("error");
      }
    }
  };

  return (
    <div className="general">
      <h2>Create course:</h2>
      <pre className="code">{JSON.stringify(form)}</pre>
      <strong>{result === "saved" ? "Article saved successfully." : ""}</strong>
      <strong>{result === "error" ? "Incorrect provided data." : ""}</strong>

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
          <label htmlFor="file">Image</label>
          <input id="file" name="avatar" type="file" placeholder="File" />
        </div>

        <input type="submit" value="Save" className="btn btn-success" />
      </form>
    </div>
  );
};

export default Create;
