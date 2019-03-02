// Navigation.jsx
// Copyright © 2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Navigation extends Component {
    
    render() {

        return (
            <div className="navigation">
                <button className={ `${ this.props.location.pathname === '/' ? 'navbutton-selected' : 'navbutton' }` }
                    onClick={ event => this.props.history.push('/') }>Home</button>
                <button className={ `${ this.props.location.pathname === '/menu' ? 'navbutton-selected' : 'navbutton' }` }
                    onClick={ event => this.props.history.push('/menu') }>Menu</button>
                <button className={ `${ this.props.location.pathname === '/checkout' ? 'navbutton-selected' : 'navbutton' }` }
                    onClick={ event => this.props.history.push('/checkout') }>Checkout</button>
            </div>
        )
    }
}

export default withRouter(Navigation)