// Menu.js
// Copyright © NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../assets/styles/application.css'
import ProductList from './ProductList'
import ProductActionController from '../data-access/ProductActionController'

class Menu extends Component {

    componentDidMount() {

        this.props.productActionController && this.props.productActionController.getBeverages();
        this.props.productActionController && this.props.productActionController.getPastries();
    }

    static mapStateToProps(state, ownProps) {

        return {

            beverages: state.products.beverages,
            pastries: state.products.pastries,
        }
    }

    static mapDispatchToProps(dispatch, ownProps) {

        return {

            productActionController: new ProductActionController(dispatch)
        }
    }

    render() {

        return (
            <div className="app-content">
                <ProductList title="Beverages" products={ this.props.beverages }  />
                <ProductList title="Pastries" products={ this.props.beverages } />
            </div>
        )
    }
}

export default connect(Menu.mapStateToProps, Menu.mapDispatchToProps)(Menu)