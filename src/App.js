import React, {useState} from 'react';

import {
    Switch,
    Route,
    NavLink, Link, useHistory,

} from 'react-router-dom';

import './App.css';
import DetailsCursus from "./pages/DetailsCursus";
import Details from "./pages/Details";


function App() {
    // zet router element in index.js

    const [isLoggedIn, toggleIsLoggedIn] = useState(true)

//     const history = useHistory();
//
//
//     function handleClick() {
//         console.log("Je hebt geklikt");
// //     doorlinken naar de home pagina
//         history.push("/")
//     }


    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/details" activeClassName="active-link">Details Page</NavLink>
                    </li>

                    <li>
                        <NavLink to="/details-cursus" activeClassName="active-link">
                            Details-Cursus Page (geef idCursus mee) details-cursus/idCursus
                        </NavLink>
                    </li>


                    {isLoggedIn === true &&
                    <li>
                        <NavLink to="/private-page" activeClassName="active-link">Verborgen pagina</NavLink>
                    </li>
                    }

                </ul>
            </nav>


            <Switch>

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


                    {/*<section>*/}
                    {/*    <h1> details page</h1>*/}
                    {/*    <button onClick={handleClick} type = "button">Terug naar de home Page</button>*/}
                    {/*    <p>*/}
                    {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam animi at commodi deleniti dolor doloremque dolores eaque eius et eum excepturi expedita fugit, laboriosam laborum, magnam maxime natus necessitatibus numquam officiis perspiciatis placeat quae quaerat quia quisquam quod rem rerum sapiente temporibus tenetur totam ut velit veniam vero vitae voluptas voluptate. Accusamus architecto asperiores dicta dolore ducimus illo illum, iusto minima, molestias mollitia obcaecati, similique vel voluptatum. Adipisci at atque debitis deserunt illum laboriosam minima molestias nobis officiis omnis possimus quae, quidem repellendus saepe sequi sint ut vel vero? Aspernatur beatae consequuntur corporis dicta ea enim eos esse, est et eum laudantium minus natus nisi non numquam quod, recusandae repellendus sit, unde voluptatem! A ab accusamus aliquid consequatur distinctio, doloribus eius fugiat harum illo, illum laboriosam maiores minima molestias neque nisi nulla numquam officia omnis porro quam repudiandae saepe sed ullam voluptatem voluptatum. Blanditiis cupiditate dolores ea eaque eum fugit nihil officiis porro ratione tenetur. Aut enim maiores perferendis quo repellendus? Accusantium adipisci at atque deleniti dolores, expedita in ipsam nemo, numquam, quasi ratione reiciendis rem repellendus temporibus tenetur voluptate voluptates. Asperiores aspernatur cum, delectus non numquam quo repellat. Culpa doloremque ex facilis neque nostrum odio perspiciatis quae quisquam!*/}
                    {/*    </p>*/}
                    {/*    <Link to="/">Terug naar HomePage</Link>*/}
                    {/*</section>*/}

                </Route>


                <Route path="/details-cursus/:idCursus">

                    {/* Dynamische URL
                    Hier geef je een naam mee (idCursus), en deze kun je gebruiken in DetailsCursus
                    http://localhost:3000/details-cursus/3    of http://localhost:3000/details-cursus/Piet
                    */}

                    <DetailsCursus/>


                </Route>


                <Route path="/private-page">
                    <section>


                        <h1> Private-Page</h1>
                        <p> Alleen speciale toegang</p>

                        {/*<Link to="/">Terug naar HomePage</Link>*/}
                    </section>
                </Route>


            </Switch>
        </>


    );
}

export default App;
