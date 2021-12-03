import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'

export default function Beers(props) {
    const [allBeers, setAllBeers] = useState([])
    const [formState, setFormState] = useState("")

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${formState}`)
        .then(response=>{
            setAllBeers(response.data)
        }).catch(console.log)
    },[formState])

    function handleInput(event) {
        event.preventDefault()
        let {value} = event.target
        setFormState(value)
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <h1>Beers page</h1>
            <div className="all-beers">
                
                <form>
                <label htmlFor="search">Search:</label><br />
                <input type="text" id="search" name="search" value={formState} onChange={handleInput} />
                </form>

                {allBeers.map(beer=>{
                    return(
                        <div key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} width="50px" />
                            <p>{beer.name}</p>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>Details</Link>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}