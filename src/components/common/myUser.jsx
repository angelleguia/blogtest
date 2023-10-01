import { useState } from "react";
import { useAjax } from "../../hooks/useAjax";

const MyUser = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");
  const { info, loading } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl("https://reqres.in/api/users/" + id);
  };

  return (
    <div>
      <h1>My User</h1>
      <p>User Info:</p>
      <p>{loading ? "Loading..." : " "}</p>
      <article key={info?.id} className="lesson-item">
        <div className="avatar">
          <img alt="Quijano" src={require("../../media/imgs/MrQuijano.webp")} />
        </div>
        <div className="data">
          <h3 className="title">Last Name: {info?.last_name}</h3>
          <p className="description">Name: {info?.first_name}</p>
          <p className="email">Email: {info?.email}</p>
        </div>
      </article>
      <p>Course created. Go to the "Blog" tab.</p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};

export default MyUser;
