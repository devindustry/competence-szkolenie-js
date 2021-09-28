import React, { Component } from 'react';

const CURRENT_INPUT_VALUE_INITIAL = '';

class Comments extends Component {
    state = {
        currentInputValue: CURRENT_INPUT_VALUE_INITIAL,
        comments: [],
    }

    handleInputChange = (event) => {
        this.setState({
            currentInputValue: event.target.value,
        })
    };

    handleSubmitForm = (event) => {
        event.preventDefault();

        this.setState({
            comments: [this.state.currentInputValue, ...this.state.comments],
            currentInputValue: CURRENT_INPUT_VALUE_INITIAL,
        });
    }

    renderComments = () => this.state.comments.map((comment, index) => (
        <div key={index}>
            <p>{comment}</p>
        </div>
    ));

    render() {
        return (
            <div>
                <h2>Komentarze:</h2>
                    {this.renderComments()}
                <h2>Dodaj komentarz:</h2>
                <form onSubmit={this.handleSubmitForm}>
                    <input value={this.state.currentInputValue} placeholder="Treść komentarza..."  onChange={this.handleInputChange}/>
                    <button type="submit">Dodaj komentarz</button>
                </form>
            </div>
        )
    }
}

export default Comments;