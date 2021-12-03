import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import {Link} from "react-router-dom"

export default function Beer_Details(props) {
    const [foundBeer, setFoundBeer] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response=>{
            setFoundBeer(response.data)
            setIsLoading(false)
        }).catch(console.log)
    },[])
    
    if (isLoading === false) {
        return(
            <div>
                <h1>Beer Details</h1>
                <img src={foundBeer.image_url} alt={foundBeer.name} width="50px" />
                <p>{foundBeer.name}</p>
                <p>{foundBeer.tagline}</p>
                <p>{foundBeer.first_brewed}</p>
                <p>Attenuation Level: {foundBeer.attenuation_level}</p>
                <p>{foundBeer.description}</p>
                <p>{foundBeer.contributed_by}</p>
                <br />
                <Link to="/beers">Back</Link>
            </div>
        )
    } else {
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }
    
}