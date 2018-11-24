import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import Header from './common/Header'
import Home from './pages/Home'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Route exact path="/" render={() => <Home />} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;