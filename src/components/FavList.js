import React from "react";

function FavList({ addActivity }) {
  return (
    <div>
      <button id="favB" onClick={addActivity}>
        Add
      </button>
    </div>
  );
}

export default FavList;
