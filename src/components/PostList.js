import React, { Component } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

class PostList extends Component {
    state = {
        postList: [],
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => this.setState({
                postList: data,
            }));
    };

    renderPosts = () => this.state.postList.map(({title, body, id}) => (
        <div key={id}>
            <h4>{title}</h4>
            <p>{body}</p>
            <hr/>
        </div>
    ));

    render() {
        return (
            <div>
                <h2>Lista postów:</h2>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostList;