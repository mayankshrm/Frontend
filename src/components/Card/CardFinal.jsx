
import { Card } from "./Card";


export function CardFinal({setSibling}){
    
    
    return(
        <>
        <div className="container">

        
            <div className="row">
            <div className="col-sm-6 col-md-3">
                <Card />
            </div>
            <div  className="col-sm-6 col-md-3">
            <Card />
            </div>
            <div className="col-sm-6 col-md-3">
            <Card />
            </div>
            <div className="col-sm-6 col-md-3">
            <Card />
            </div>

            </div>
            </div>
        </>
    )



}