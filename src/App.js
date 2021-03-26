import React from 'react'

import './App.css';




function App() {
  // zet router element in index.js

  return (
      <Router>

          <nav>
              <ul>
                  <li>
                      Link 1
                  </li>

                  <li>
                      Link 2
                  </li>





              </ul>


          </nav>

          <Switch>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/users">
                  <Users />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>



          <section>
<h1> Dit is een pagina</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ex fugiat reiciendis temporibus! Assumenda dicta esse laborum porro, provident vero!

              </p>


          </section>



      </Router>


  );
}

export default App;
