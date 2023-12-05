import { useContext } from "react";
import { AppContext, AppProvider } from "../Context";
import { GrLike } from "react-icons/gr";

const Meals = ()=>{
    const {loading, meals} = useContext(AppContext);
    if(loading){
        return(<>
        <section>
            <h5>Loading...</h5>
        </section>
        </>)
    }
    if(meals.length <1){
        return(<>
            <section>
                <h5>No Meals match with your search item. Please try again</h5>
            </section>
            </>)
    }
    return(<>
    <section className="section-center">
        {meals.map((singleMeals)=>{
            const {idMeal, strMeal : title, strMealThumb: image} = singleMeals;
            return(<>
            <article key={idMeal} className="single-meal">
                <img src={image} style={{width:"200px"}} className="img"/>
                <footer>
                    <h5>{title}</h5>
                    <button><GrLike /></button>
                </footer>

            </article>
          
            </>)
        })}
    </section>
    </>)
}
export default Meals;