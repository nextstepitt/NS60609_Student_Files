// App.js
// Copyright © nTier Training. All rights reserved.
//
// Application footer content.
//

import React, { Component } from 'react'
import Landing from '../landing/Landing'
import Menu from '../menu/Menu'
import Header from '../common/Header'
import Footer from '../common/Footer'

class App extends Component {

    render() {

        return (
            <div>
                <Header />
                <Menu />
                <Footer />
            </div>
        )
    }
}

export default App;
