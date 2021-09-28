import React, { Component } from 'react';

class Footer extends Component {
    date = new Date();

    render() {
        const currentYear = this.date.getFullYear();

        return (
            <footer>
                {this.props.text} {currentYear}
            </footer>
        )
    }
}

export default Footer;