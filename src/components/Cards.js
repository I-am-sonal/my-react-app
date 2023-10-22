import React from 'react'

function Cards(props) {
  return (
    <>
      <div className="box-inner">
        <img src={props.imgSrc} alt="W3Schools.com"/>
        <p>{props.desc}</p>
        <input type="submit" value="Submit" />
      </div>
    </>
  )
}

export default Cards;
