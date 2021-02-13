import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Provider } from 'react-redux'
import store from '../redux/store'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Cart from './Cart';
import Footer from "./Footer";
import Success from "./Success";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={Dashboard} />
                        <Route path={"/cart"} exact component={Cart} />
                        <Route path={"/success"} exact component={Success} />
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </Provider>
        </>
    );
}

export default App;