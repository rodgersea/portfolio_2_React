import React from "react";
import CodeSnip from './CodeSnip';

function PythonCard(props) {
  return (
    <div>
      <CodeSnip />
        <div className="">
          <strong>{props.activity}:</strong> 
          <div>GitHub link: </div>
          <a href={props.content}>{props.content}</a>
          <br></br>
          <div>Deployed Application: </div>
          <a href={props.link}>{props.link}</a>
          <br></br><br></br>
        </div>
    </div>
  );
}

export default PythonCard;