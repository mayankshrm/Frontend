import React from "react";
import "./CarData.css"

export default function CarData(props){
    return(
        <>
       <div className="pricingdiv">
	
	<ul className="theplan">
		<li className="title"> <b>{props.car_name}</b></li>
		
		<li style={{fontWeight: "bolder"}}><b>Company: </b>{props.company}</li>
		<li style={{fontWeight: "bolder"}}><b>Engine: </b>{props.engine}</li>
		<li style={{fontWeight: "bolder"}}><b>Mileage: </b>{props.mileage} </li>
		<li style={{fontWeight: "bolder"}}><b>Year: </b> {props.year}</li>
		<li style={{fontWeight: "bolder"}}><b>Price: </b> {props.price}</li>
		
		
		</ul>
	
</div>

        </>
    )
}