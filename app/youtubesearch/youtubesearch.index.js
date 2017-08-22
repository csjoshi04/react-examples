import ReactDOM from 'react-dom'
import React from 'react';
import SearchBar from "./component/search-bar.component"

const API_KEY = "AIzaSyASxeLmKlYrOzjsQfegNOAYBxU4_UQWyts";

const App = () =>{
    return <SearchBar/>
}

ReactDOM.render(<App/>,document.getElementById('reactApp'))