 import React, { useEffect, useState } from "react";
import "./Card.css"
import axios from "axios";
import CarData from "../CarData/CarData";
import { BackBtn } from "../Btn/BackBtn";
import { API_CLIENT } from "../../shared/services/API_CLIENT";


export function Card(props) {
  const[list,setlist]=useState([]);
  const[optns,setOptns]=useState();
  const[singleCar,setSingleCar]=useState([]);
  
  

  
  

  useEffect(()=>{
    CarData1();
  },[]);

  const CarData1  = ()=>{
   const promise = API_CLIENT.get("/cars");
        promise.then(data=>{  
            setlist(data.data.cars);
        }).catch(err=>{
            console.log(err);
        })
};
  

  const handleChange=(event)=>{
      setOptns(event.target.value);
      
      const promise = API_CLIENT.get("/cars/"+event.target.value);
        promise.then(data=>{  
            setSingleCar(data.data);
        }).catch(err=>{
            console.log(err);
        })
     
      
   }
   const clear=()=>{
    setOptns();
    setSingleCar([]);
   }

  return (
    <>
      <div className="card" >
      
      
        <h3 style={{textAlign:"center"}}>Cars</h3>
      
        <div className="card-body">
          <div className="input-group mb-3">
            <label className="input-group-text" for="inputGroupSelect01">
              Cars
            </label>
            <select  value={optns} onChange={handleChange} className="form-select" id="inputGroupSelect01">
              <option value="0">Choose...</option>
              {list.map((lists)=>
              <option key={lists.id} value={lists.id} >{lists.car}</option>
              )}
            </select>
          </div>
        </div>
        <BackBtn onClick2={clear} />
        <br/>
      </div>
      <br/>
      <CarData 
              year={singleCar.car_model_year}
              company={singleCar.company}
              car_name={singleCar.car}
              mileage={singleCar.car_mileage}
              price={singleCar.price}
              engine={singleCar.engine_type}
       />
     </>
  );
}
