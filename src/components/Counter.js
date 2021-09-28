import React, { Component } from 'react';

const INITIAL_COUNTER = 0;

class Counter extends Component {
    state = {
        value: INITIAL_COUNTER,
    }

    handleIncrementCounter = () => {
        this.setState({
            value: this.state.value + 1,
        })
    };

    handleDecrementCounter = () => {
        this.setState({
            value: this.state.value - 1,
        })
    }

    handleResetCounter = () => {
        this.setState({
            value: INITIAL_COUNTER,
        })
    }


    // handleIncrementCounter = () => {
    //     this.setState(prevState => ({
    //         value: prevState.value + 1,
    //     }))
    // };

    render() {
        return (
            <div>
                <p>Counter: {this.state.value}</p>
                <button onClick={this.handleIncrementCounter}>+</button>
                <button onClick={this.handleDecrementCounter}>-</button>
                <button onClick={this.handleResetCounter}>RESET</button>
            </div>
        )
    }
}

export default Counter;