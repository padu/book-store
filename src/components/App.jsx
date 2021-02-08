import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import BooksPanel from "./BooksPanel";
import Footer from "./Footer";

class App extends React.Component {
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
                <Footer/>
            </>
        );
    } 
}

export default App;