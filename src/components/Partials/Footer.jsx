import React from "react";

export function Footer(){
    const date1=new Date();
   const year1=date1.getFullYear();
return(
    <>
        <div style={{textAlign:"center",color:"#850E35"}} className="container-fluid bg-dark">
        
        <h5 style={{color:"whitesmoke"}}>© {year1} CarCompare </h5>

        </div>
    </>
)
}