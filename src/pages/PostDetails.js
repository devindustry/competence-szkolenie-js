import React from 'react';
import useFetchData from '../hooks/useFetchData';
import Comments from "../components/Comments";
const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

const PostDetails = (props) => {
    const { data, loading, error } = useFetchData(`${API_URL}${props.match.params.id}`);

    if (loading) {
        return (<div>Ładowanie...</div>);
    }

    if (error) {
        return (<div>Błąd pobierania danych...</div>)
    }
    return (
        <div>
            <h1>Szczegóły postu</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
            <Comments />
        </div>
    )
}

export default PostDetails;