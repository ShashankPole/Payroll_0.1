import Home from "./Pages/home/Home"

import FooterComponent from "./footer/FooterComponent"
import {config1, config2, config3 } from "./configurations/componentConfig"
import Header from "./Header/Header";
import Data from "./Header/Data.json"



function App() {
  return (
  
    <>
      <Home />

      <Header data={Data} />
     
    </>

  );
}


export default App;

