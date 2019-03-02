import React, { Component } from 'react';

class Landing extends Component {
    render() {

        const now = new Date()
        let message = null

        if (now.getHours() < 12) {

            message = 'Good morning! Welcome to the Caribbean Coffee Company!'

        } else if (now.getHours() < 17) {

            message = 'Good afternoon! Welcome to the Caribbean Coffee Company!'

        } else {

            message = 'Welcome to the Caribbean Coffee Company! Sorry, we are closed.'
        }

        return (
            <div>
                <span>{message}</span>
            </div>
        );
    }
}

export default Landing;
