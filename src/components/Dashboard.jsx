import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import BooksPanel from "./BooksPanel";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredChar: ''
        };
    }

    setSearch = (event) => {
        this.setState({
            filteredChar: event.target.value.substr(0, 20)
        });
    }

    render() {
        return(
            <>
                <Header setSearch={this.setSearch}/>
                <BooksPanel searchChar={this.state.filteredChar}/>
            </>
        );
    } 
}

export default Dashboard;