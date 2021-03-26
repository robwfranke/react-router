import React from 'react';

import {
    Switch,
    Route,
    NavLinkLink, NavLink, Link
} from 'react-router-dom';

import './App.css';


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
                    <section>
                        <h1> details page</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, doloremque dolorum ducimus
                            et eum id ipsum laudantium maiores nam porro ut vel vitae? Ad aut deleniti dolor dolorum
                            eligendi fugit iste itaque iure laboriosam mollitia nam necessitatibus, nisi, odio odit
                            officiis porro provident, qui quo quos reprehenderit ullam voluptatibus voluptatum?
                        </p>
                        <Link to="/">Terug naar HomePage</Link>
                    </section>
                </Route>

                <Route exact path="/details-cursus">
                    <section>
                        <h1> details-cursus page</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, doloremque dolorum ducimus
                            et eum id ipsum laudantium maiores nam porro ut vel vitae? Ad aut deleniti dolor dolorum
                            eligendi fugit iste itaque iure laboriosam mollitia nam necessitatibus, nisi, odio odit
                            officiis porro provident, qui quo quos reprehenderit ullam voluptatibus voluptatum?
                        </p>
                        <Link to="/">Terug naar HomePage</Link>
                    </section>
                </Route>


            </Switch>


        </>


    );
}

export default App;
