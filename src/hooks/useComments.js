import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CURRENT_INPUT_VALUE_INITIAL = '';

const useComments = () => {
    const { id } = useParams();
    const [currentInputValue, setCurrentInputValue] = useState(CURRENT_INPUT_VALUE_INITIAL);
    const [comments, setComments] = useState([]);

    const handleInputChange = (event) => {
        setCurrentInputValue(event.target.value);
    };

    useEffect(() => {
        const localStorageKey = id ? `comments-page-${id}` : 'comments-homepage';
        const currentComments = JSON.parse(window.localStorage.getItem(localStorageKey));

        if (!comments.length && currentComments && currentComments.length) {
            setComments(currentComments);
        }
    }, []);

    useEffect(() => {
        const localStorageKey = id ? `comments-page-${id}` : 'comments-homepage';

        if (comments.length) {
            window.localStorage.setItem(localStorageKey, JSON.stringify(comments))
        }
    }, [comments])

    const handleSubmitForm = (event) => {
        event.preventDefault();

        setComments([currentInputValue, ...comments]);
        setCurrentInputValue(CURRENT_INPUT_VALUE_INITIAL)
    }

    return {
        currentInputValue,
        comments,
        handleInputChange,
        handleSubmitForm,
    }
}

export default useComments;