// App.js
// Copyright © nTier Training. All rights reserved.
//
// Application footer content.
//

import React, { Component } from 'react'

import Checkout from '../checkout/Checkout'
import Landing from '../landing/Landing'
import Menu from '../menu/Menu'
import Footer from '../common/Footer'
import Header from '../common/Header'

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Checkout />
                <Footer />
            </div>
        )
    }
}

export default App;
