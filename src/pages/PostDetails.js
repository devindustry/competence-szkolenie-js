import React, { Component } from 'react';
import Comments from "../components/Comments";
const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

class PostDetails extends Component {
    state = {
        postDetails: {},
    };

    componentDidMount() {
        fetch(`${API_URL}${this.props.match.params.id}`)
            .then(response => {
                return response.json();
            })
            .then(data => setTimeout(() => this.setState({
                postDetails: data,
            }), 200));
    }

    render() {
        return (
            <div>
                <h1>Szczegóły postu</h1>
                <h3>{this.state.postDetails.title}</h3>
                <p>{this.state.postDetails.body}</p>
                <Comments />
            </div>
        )
    }

}

export default PostDetails;