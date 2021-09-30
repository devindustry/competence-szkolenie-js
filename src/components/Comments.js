import React from 'react';
import useComments from "../hooks/useComments";

const Comments = () => {
    const {
        currentInputValue,
        comments,
        handleInputChange,
        handleSubmitForm,
    } = useComments();

    const renderComments = () => comments.map((comment, index) => (
        <div key={index}>
            <p>{comment}</p>
        </div>
    ));


        return (
            <div>
                <h2>Komentarze:</h2>
                    {renderComments()}
                <h2>Dodaj komentarz:</h2>
                <form onSubmit={handleSubmitForm}>
                    <input value={currentInputValue} placeholder="Treść komentarza..."  onChange={handleInputChange}/>
                    <button type="submit">Dodaj komentarz</button>
                </form>
            </div>
        )

}

export default Comments;