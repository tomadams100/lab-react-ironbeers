import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import {Link} from "react-router-dom"

export default function Beer_Details(props) {
    const [randomBeer, setRandomBeer] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response=>{
            setRandomBeer(response.data)
            setIsLoading(false)
        }).catch(console.log)
    },[])
    
    if (isLoading === false) {
        return(
            <div>
                <h1>Random Beer</h1>
                <img src={randomBeer.image_url} alt={randomBeer.name} width="50px" />
                <p>{randomBeer.name}</p>
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.first_brewed}</p>
                <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
                <br />
                <Link to="/">Back</Link>
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