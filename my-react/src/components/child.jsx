// import React from "react";

export default function Child(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <img src={props.imgsrc} alt="" />
        </>
    )
}