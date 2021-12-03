import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

export default function New (props) {
    const [formState, setFormState] = useState({})

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`,formState)
        .then(response=>{
            console.log(response)
        }).catch(console.log)
    }
    function handleInput(event) {
        let {name,value} = event.target
        setFormState({...formState, [name]:value})
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>New Beer</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" onChange={handleInput} /><br />
                <label htmlFor="tagline">Tagline: </label><br />
                <input type="text" id="tagline" name="tagline" onChange={handleInput} /><br />
                <label htmlFor="description">Description: </label><br />
                <input type="text" id="description" name="description" onChange={handleInput} /><br />
                <label htmlFor="first_brewed">First Brewed:</label><br />
                <input type="text" id="first_brewed" name="first_brewed" onChange={handleInput} /><br />
                <label htmlFor="brewers_tips">Brewers Tips:</label><br />
                <input type="text" id="brewers_tips" name="brewers_tips" onChange={handleInput} /><br />
                <label htmlFor="attenuation_level ">Attenuation Level:</label><br />
                <input type="number" id="attenuation_level" name="attenuation_level" onChange={handleInput} /><br />
                <label htmlFor="contributed_by ">Contributed By:</label><br />
                <input type="text" id="contributed_by" name="contributed_by" onChange={handleInput} /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}