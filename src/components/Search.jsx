import {useState,useContext} from 'react';
import { AppContext, AppProvider } from "../Context";
// import {GlobalContext} from '../Context'

const Search = ()=>{
    const [text, setText] = useState('');
    const {setSearchTerm, fetchRandomMeal} = useContext(AppContext);

    function handleInput(e){
      setText(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(text){
            setSearchTerm(text);
        }
    }
    return(<>
    <header className='search-container'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleInput} placeholder='Type Favorite Meal' className='form-input'/>
            <button type="submit" className='btn'>Search</button>
            <button type="button" onClick={()=>fetchRandomMeal()}className='btn btn-hipster'>Suprize me!</button>
        </form>
    </header>
    </>)
}
export default Search;