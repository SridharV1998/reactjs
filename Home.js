import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function Home (){
    const [file, setFile] = useState();
    const fileReader = new FileReader();
    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleOnSubmit = (e) => { 
        console.log(e,"jwfnkwejbn")
                e.preventDefault();    
         if (file) {
            debugger
            fileReader.onload = function (event) {
                const csvOutput = event.target.result;

            };
            fileReader.readAsText(file);
            alert(file.name)
        }
    };
    return (
        <div style={{ textAlign: "center" }}>
             <h1>REACTJS CSV IMPORT EXAMPLE </h1>
             <form>
                 <input
                     type={"file"}
                     id={"csvFileInput"}
                     accept={".csv"}
                     onChange={handleOnChange}
                 />
                 <button
                     onClick={(e) => {
                         handleOnSubmit(e);
                     }}
                 ><Link to="/StockPage"> IMPORT CSV</Link>
                     
                 </button>
             </form>
         </div>
    )
}
  
export default Home;