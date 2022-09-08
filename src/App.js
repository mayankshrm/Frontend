import { Helmet } from "react-helmet";
import "./App.css";
import { Page } from "./pages/Page";



export function App() {
 
  return (
    <>
    <Helmet>
        <style>{"body { background-color: #F5EDDC; }"}</style>
      </Helmet>
   <Page />
    </>
  );
}
