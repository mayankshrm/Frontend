import React from "react";
import { Header } from "../components/Partials/Header";
import { Crousel } from "../components/Crousel/Crousel";
import { CardFinal } from "../components/Card/CardFinal";
import { Footer } from "../components/Partials/Footer";

export function Page(){
return(
    <>
         <Header />
      <Crousel />
      <br />

      <CardFinal />

      <br />
      

      <Footer />
    </>
)

}