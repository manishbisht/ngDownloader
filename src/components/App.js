import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './common/Header'
import Search from './pages/Search'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Search/>
                <BrowserRouter>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;