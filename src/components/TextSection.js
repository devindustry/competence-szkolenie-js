import React from 'react';

const TEXTS = {
    PARAGRAPH: 'Treść strony przykładowa',
}
const TextSection = (props) => {
    const handleClick = (x) => {
        console.log('kliknięcie w przycisk', x);
    };

    return (
        <div>
            <p>
                {TEXTS.PARAGRAPH}
            </p>
            {props.children && <p>
                {props.children}
            </p>}
            <button className="button" onClick={() => handleClick(4)}>AKCJA</button>
        </div>
    )
}

export default TextSection;