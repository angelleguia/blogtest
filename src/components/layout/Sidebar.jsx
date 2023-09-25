import React from "react";

const Sidebar = () => {
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Searcher</h3>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
