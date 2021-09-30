import { useState, useEffect } from 'react';

const useFetchData = (url) => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => {
                if (response.status > 400) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => setTimeout(() => {
                    setData(data);
                    setLoading(false);
                }, 200)
            )
            .catch(e => {
                setError(true);
                setLoading(false);
            });
    }, []);

    return {
        data,
        loading,
        error
    }
}

export default useFetchData;