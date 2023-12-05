import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const { data } = await axios(url);
            if(data.meals)
            setMeals(data.meals);

            else
            setMeals([]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const fetchRandomMeal=()=>{
        fetchMeals(randomMealUrl)
    }
    useEffect(() => {
        fetchMeals(`${allMealUrl}${searchTerm}`)
    }, [searchTerm])
    return (<>
        <AppContext.Provider value={{loading,meals, setSearchTerm,fetchRandomMeal}}>{children}</AppContext.Provider>
    </>)
}
export { AppContext, AppProvider };