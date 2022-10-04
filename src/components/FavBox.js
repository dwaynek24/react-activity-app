import React from "react";

function FavBox(props) {
  const favsList = props.fav.map((fav) => {
    return <li key={Math.random()} >{fav}</li>;
  });
  return (
    <div>
      <ul >{favsList}</ul>
    </div>
  );
}

export default FavBox;
