// Checkout.js
// Copyright (c) 2017-2018 NextStep IT Training. All rights reserved.
//

import React, { Component } from 'react'

import '../assets/styles/application.css'

class Checkout extends Component {

    constructor(props) {

        super(props)

        this.state = {

            name: '',
            cardNumber: ''
        }
    }

    render() {

        return (
            <div className="app-content">
                <h1>Checkout</h1>
                <form>
                    <div className="cc-form">
                        <div className="cc-form-row">
                            <div className="cc-form-label"><label className="cc-form-label">Name:</label></div>
                            <div className="cc-form-field"><input type="text" className={ 'cc-form-field ' + ( /^\w+ \w+$/.test(this.state.name) ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) } value={ this.state.name } onChange={ event => this.setState({ name: event.target.value }) } /></div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label"><label className="cc-form-label">Card Number:</label></div>
                            <div className="cc-form-field"><input type="text" className={ 'cc-form-field ' + ( /\d{13,}$/.test(this.state.cardNumber) ? 'cc-form-field-requirement-met' : 'cc-form-field-required' ) } value={ this.state.cardNumber } onChange={ event => this.setState({ cardNumber: event.target.value }) } /></div>
                            <div className="clear-all"></div>
                        </div>
                        <div className="cc-form-row">
                            <div className="cc-form-label"></div>
                            <div className="cc-form-field">
                                <button>Cancel</button>&nbsp;
                                <button>Submit</button>
                            </div>
                            <div className="clear-all"></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout