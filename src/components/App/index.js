import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Search from '../Search';

import * as ROUTES from '../../constants/routes';
import '../Navigation/navigation.css';

const App = () => (
    <div>
        <Router>
            <div>
                <Navigation />
                <br></br>
                
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.ABOUT} component={About} /> 
                <Route path={ROUTES.CONTACT} component={Contact} />
                <Route path={ROUTES.SEARCH} component={Search} />
            </div>
        </Router>
        

    </div>
);

export default App;