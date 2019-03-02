// App.js
// Copyright © nTier Training. All rights reserved.
//
// Application footer content.
//

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import ApplicationModelStoreController from '../model/ApplicationModelStoreController'
import Checkout from '../checkout/Checkout'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Landing from '../landing/Landing'
import Menu from '../menu/Menu'
import Navigation from './Navigation'

class App extends Component {

    constructor(props) {
    
        super(props)

        this.applicationModelStoreController = new ApplicationModelStoreController()
    }

    render() {

        return (
            <Provider store={ this.applicationModelStoreController.store }>
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
            </Provider>
        )
    }
}

export default App;
