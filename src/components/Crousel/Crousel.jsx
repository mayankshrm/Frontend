import React from "react";
import { StacticData } from "../StaticData/StaticData";
import "./crousel.css";

export function Crousel(){
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:"#F7E2E2"}}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/8378/1644834798148/front-left-side-47.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i0.wp.com/imgx.gridoto.com/crop/0x0:0x0/700x0/photo/2022/01/13/toyota-fortuner-4x4-gr-sportjpg-20220113114233.jpg?w=800&ssl=1" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.financialexpress.com/wp-content/uploads/2022/04/2022-Kia-Seltos.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <br/>
  <div className="container">
  <StacticData />

  </div>
</div>
</div>
        </>
    )
}