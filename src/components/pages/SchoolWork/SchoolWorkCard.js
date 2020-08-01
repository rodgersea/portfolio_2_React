import React from "react";

function SchoolWorkCard(props) {
  return (
    <div>
      <p>
        <strong>{props.activity}</strong>
      </p>
      <p>
        GitHub link: <a href={props.content}>{props.content}</a>
      </p>
      <p>
        Deployed Application: <a href={props.deployed}>{props.deployed}</a>
      </p>
      <br></br>
    </div>
  );
}

export default SchoolWorkCard;