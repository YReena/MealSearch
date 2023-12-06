import { useContext } from "react";
import { AppContext, AppProvider } from "../Context";

const Model = ()=>{
    const { selectedMeal, closeModel } = useContext(AppContext);
    return(<>
    <aside className="model-overlay">
       <div className="model-container">
        <h1>{selectedMeal}</h1>
        <button onClick={closeModel}>close</button>
       </div>
        </aside></>)
}
export default Model;