import React from "react";

function JavascriptCard(props) {
  return (
    <div>
      <p>
        <strong>{props.activity}</strong>
      </p>
      <p>
        Github link: <a href={props.content}>{props.content}</a>
      </p>
      <br></br>
    </div>
  );
}

export default JavascriptCard;