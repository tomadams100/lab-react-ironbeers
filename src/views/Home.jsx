import {Link} from "react-router-dom"
import React from 'react';

export default function Home (props) {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/beers">Beers</Link>
            <br />
            <Link to="/random">Random Beer</Link>
            <br />
            <Link to="/new">New Beer</Link>
        </div>
    )
}