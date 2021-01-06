import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Problem1 from './Problem1/index';
import Problem2 from './Problem2/index';
import Problem3 from './Problem3/index';
const Nav = () =>{
    return(
        <> 
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/Problem1">Problema 1</Link>
                        </li>
                        <li>
                            <Link to="/Problem2">Problema 2</Link>
                        </li>
                        <li>
                            <Link to="/Problem3">Problema 3</Link>
                        </li>
                    </ul>
                    <Route path="/Problem1" component={Problem1} />
                    <Route path="/Problem2" component={Problem2} />
                    <Route path="/Problem3" component={Problem3} />
                </div>
            </Router>

        </>
    );
}
export default Nav