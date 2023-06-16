import React from "react";
const Card = ({library}) => {
  const callDate = () => {
    alert(library.info)
  }
  return (<div>
    <div>
      <img src={library.url} alt="img"/>
    </div>
    <h2>{library.title}</h2>
    <h4>{library.subtitle}</h4>
    <button onClick={callDate}>{library.btn}</button>
  </div>)
}
export default Card

