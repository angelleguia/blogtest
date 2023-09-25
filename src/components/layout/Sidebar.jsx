import React from "react";

const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Searcher</h3>
        <input type="text" />
        <button>Search</button>
        <h3 className="title">Add Article</h3>
        <form>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Description"></textarea>
          <button>Save</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
