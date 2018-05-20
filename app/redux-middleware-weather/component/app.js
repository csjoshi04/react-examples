import SearchBarContainer from '../container/search_bar';
import WeatherListContiner from '../container/weather_list';
import React, { Component } from 'react';

export const App = () =>{
    return (
        <div>
            <SearchBarContainer/>
            <WeatherListContiner/>
        </div>
    )
}

