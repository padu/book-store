import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Footer from "./Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={Dashboard} />
                    <Route path={"/cart"} exact component={Cart} />
                </Switch>
            </BrowserRouter>
            <Footer/>
        </>
    );
}
    
export default App;