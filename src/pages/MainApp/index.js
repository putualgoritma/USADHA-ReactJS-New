import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Home,
    About,
    Product,
    Testimoni,
    Contact,
    Detail,
    Login
} from '../../pages';

const MainApp = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/Login">
                    <Login/>    
                </Route>
                <Route path="/Detail/:id">
                    <Detail/>    
                </Route>
                <Route path="/Contact">
                    <Contact/>    
                </Route>
                <Route path="/Testimoni">
                    <Testimoni/>    
                </Route>
                <Route path="/Product">
                    <Product/>
                </Route>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
export default MainApp