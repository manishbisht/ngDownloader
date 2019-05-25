import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom'
import Header from './common/Header'
import Home from './pages/Home'
import Search from './pages/Search'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div>
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/" component={Home} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;