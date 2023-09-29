import React, { useEffect, useState } from "react";

const Create = () => {
  const [courses, setCourses] = useState([]);

  const sent = (e) => {
    e.preventDefault();
    let data = [
      {
        title: e.target.title.value,
        anio: e.target.anio.value,
        content: e.target.content.value,
        author: e.target.author.value,
        email: e.target.email.value,
      },
    ];
    setCourses(data);
  };

  return (
    <>
      <form onSubmit={sent} className="form">
        <h2>Create course:</h2>
        <input name="title" type="text" placeholder="Title" />
        <input name="anio" type="number" placeholder="Publication Year" />
        <textarea name="content" placeholder="Content" />
        <input name="author" type="text" placeholder="Author" />
        <input name="email" type="email" placeholder="Contact Email" />
        <input type="submit" value="send" />
      </form>
      <div>
        {courses.map((course) => {
          return (
            <>
              <article key={course._id} className="lesson-item">
                <div className="avatar">
                  <img
                    alt="Quijano"
                    src={require("../../media/imgs/MrQuijano.webp")}
                  />
                </div>
                <div className="data">
                  <h3 className="title">{course.title}</h3>
                  <p className="description">{course.content}</p>

                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              </article>
              <p>Course created. Go to the "Blog" tab.</p>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Create;
