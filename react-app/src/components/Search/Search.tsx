import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

/**
 * This component contains the UX logic for searching and adding more fields.
 */
function Search({cities, setCities}: any){

    // const [searchSuggestions, setSearchSuggestions] = useState([""]); // TODO: Get new search suggestions each time cityInput changes

    const handleChange = (event: any) => {
        let citiesTemp = [...cities];
        const index:number = Number(event.target.id);
        citiesTemp[index] = event.target.value;
        setCities(citiesTemp)
    }

    const handleGo = (e: any)=>{
        e.preventDefault();
        console.log("Go/Add Pressed");
    }

    const handleAdd = (event: any) => {
        if(cities.length < 3)setCities([...cities, ""])
    }

    const handleRemove = (event: any) => {
       console.log('handleRemove');
       let citiesTemp = [...cities];
       const index:number = Number(event.target.id);
       console.log("Which index to remove? " + index);
       citiesTemp.splice(index, 1);
       setCities(citiesTemp);
    }


    const renderCityInputs = () => {
        return cities.map((city:string, index:number) => (
        
            <div key={index.toString()} className="input-container">
                <input
                    id={index.toString()}
                    value={city}
                    className="form-control fontAwesome search-field"
                    onChange={handleChange}
                    list="list-suggestions"
                    placeholder="&#xf002; Search"
                />
                {index!==0?
                <button id={index.toString()} key={"remove-btn-" + city} onClick={handleRemove} className="remove-btn">X</button>
                :<Link to='/city' key={"go-btn" + city} className="btn-outline-custom go-btn btn">Go</Link>}
            </div>
        ))      
    }

    // const locationIcon = <FontAwesomeIcon className="discover-icon" icon={faMapLocationDot} color="#E2B714"/> 
    const addCityIcon =  <FontAwesomeIcon className="add-city-icon" icon={faPlus} color="#E2B714"/> 

    return(                        
    <form onSubmit={handleGo} className="d-flex">
    <div className="form-group me-3">

        {renderCityInputs()}

        {cities.length < 3 ?
        <div className="add-btn-container">
            <button onClick={handleAdd} className="btn add-btn btn-outline-custom">{addCityIcon}</button> Add a city
        </div>
        : <div className="add-btn-container"></div>}

        {/* <datalist id="list-suggestions">
            {searchSuggestions.map((id)=>(
                <option value={id}></option>
            ))}
        </datalist> */}


    </div>
</form>
)
}

export default Search;