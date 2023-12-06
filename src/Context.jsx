import React, { useContext, createContext, useEffect, useState } from 'react';
import axios from 'axios';

const allMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModel, setShowModel] = useState(false);
    const [selectedMeal, setselectedMeal] = useState(null);

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const { data } = await axios(url);
            if (data.meals)
                setMeals(data.meals);

            else
                setMeals([]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    const selectMeal = (idMeal, favoriteMeal) => {
        console.log(idMeal)
        let meal;
        meal = meals.find((meales) => meales.idMeal === idMeal);
        console.log(meal);
        setselectedMeal(meal);
        setShowModel(true);
    }
    const closeModel = () => {
        setShowModel(false);
    }
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl)
    }

    useEffect(() => {
        fetchMeals(allMealUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return

        fetchMeals(`${allMealUrl}${searchTerm}`)
    }, [searchTerm])
    return (<>
        <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModel, selectedMeal, selectMeal,closeModel }}>{children}</AppContext.Provider>
    </>)
}
export { AppContext, AppProvider };