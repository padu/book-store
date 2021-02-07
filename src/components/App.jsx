import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import BooksPanel from "./BooksPanel";
import Footer from "./Footer";

function App() {
    return(
        <>
            <Header/>
            <BooksPanel/>
            <Footer/>
        </>
    ); 
}

export default App;