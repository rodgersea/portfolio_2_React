import React from "react";

function InterestCard(props) {
  return (
    <div>
      <p>
        <strong>{props.activity}</strong>
      </p>
      <p>
        {props.content}
      </p>
      <br></br>
    </div>
    
  );
}

export default InterestCard;