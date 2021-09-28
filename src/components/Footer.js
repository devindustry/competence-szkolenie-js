import React, { Component } from 'react';

class Footer extends Component {
    date = new Date();

    handleClick = () => {
        console.log('kliknięcie');
    }

    render() {
        const currentYear = this.date.getFullYear();

        return (
            <footer>
                {this.props.text} {currentYear}
                <button onClick={this.handleClick}>AKCJA</button>
            </footer>
        )
    }
}

export default Footer;