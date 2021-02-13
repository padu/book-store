import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import BooksPanel from "./BooksPanel";

function Dashboard() {
    return(
        <>
            <Header />
            <BooksPanel/>
        </>
    );
}

export default Dashboard;