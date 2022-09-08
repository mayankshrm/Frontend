import React from "react";

export function BackBtn(props){
    return(
    <>
    <div className="d-grid gap-2 col-6 mx-auto btn-sm">
    <button onClick={props.onClick2} className="btn btn-outline-danger btn-sm" type="button">Clear</button>
    </div>
    </>
    )
}