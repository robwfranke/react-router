import React from 'react';

import {
    Switch,
    Route,
    NavLink,
    Link
} from 'react-router-dom';

import './App.css';
import DetailsCursus from "./pages/DetailsCursus";
import Details from "./pages/Details";


function App() {
    // zet router element in index.js

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/details" activeClassName="active-link">Details Page</NavLink>
                    </li>

                    <li>
                        <NavLink to="/details-cursus" activeClassName="active-link">Details-Cursus Page</NavLink>
                    </li>
                </ul>

            </nav>

            <Switch>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route exact path="/">
                    <section>
                        <h1> homepage</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis
                            temporibus! Assumenda dicta esse laborum porro, provident vero!
                        </p>
                    </section>
                </Route>


                <Route exact path="/details">
                    <Details/>
                </Route>

                <Route  path="/details-cursus/:idCursus">

                    {/* Dynamische URL
                    Hier geef je een naam mee (idCursus), en deze kun je gebruiken in DetailsCursus
                    http://localhost:3000/details-cursus/3    of http://localhost:3000/details-cursus/Piet
                    */}

                    <DetailsCursus/>
                </Route>


            </Switch>


        </>


    );
}

export default App;
