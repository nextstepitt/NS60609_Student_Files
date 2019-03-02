// App.js
// Copyright © nTier Training. All rights reserved.
//
// Application footer content.
//

import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'


import Checkout from '../checkout/Checkout'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Landing from '../landing/Landing'
import Menu from '../menu/Menu'
import Navigation from './Navigation'

class App extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Header />
                    <Navigation />
                    <Switch>
                        <Route path="/menu" component={ Menu } /> } />
                        <Route path="/checkout" component={ Checkout } /> } />
                        <Route path="/" exact={ true } component={ Landing } />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
