import React, { Component } from 'react';
import { Link } from "react-router-dom";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

class PostList extends Component {
    state = {
        postList: [],
        loading: false,
        error: false,
    }

    componentDidMount() {
        this.setState({
            loading: true,
            error: false,
        });

        fetch(API_URL)
            .then(response => {
                if (response.status > 400) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => setTimeout(() => this.setState({
                postList: data,
                loading: false,
            }), 200))
            .catch(err => {
                this.setState({
                    loading: false,
                    error: true,
                })
            });
    };

    renderPosts = () => this.state.postList.map(({title, body, id}) => (
        <div key={id}>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Czytaj więcej</Link>
            <hr/>
        </div>
    ));

    render() {
        const { loading, error } = this.state;

        if (loading) {
            return (<div>Ładowanie...</div>);
        }

        if (error) {
            return (<div>Błąd pobierania</div>)
        }

        return (
            <div>
                <h2>Lista postów:</h2>
                {this.renderPosts()}
            </div>
        )
    }
}

export default PostList;