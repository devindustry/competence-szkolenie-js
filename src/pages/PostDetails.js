import React, { useState, useEffect } from 'react';
import Comments from "../components/Comments";
const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

const PostDetails = (props) => {
    const [ postDetails, setPostDetails ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}${props.match.params.id}`)
            .then(response => {
                if (response.status > 400) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => setTimeout(() => {
                    setPostDetails(data);
                    setLoading(false);
                }, 200)
            )
            .catch(e => {
                setError(true);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (<div>Ładowanie...</div>);
    }

    if (error) {
        return (<div>Błąd pobierania danych...</div>)
    }
    return (
        <div>
            <h1>Szczegóły postu</h1>
            <h3>{postDetails.title}</h3>
            <p>{postDetails.body}</p>
            <Comments />
        </div>
    )
}

export default PostDetails;