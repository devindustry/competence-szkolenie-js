import React from 'react';

const TextSection = ({text, children}) => {
    return (
        <div>
            <p>
                {text}
            </p>
            {children && <p>
                {children}
            </p>}
        </div>
    )
}

export default TextSection;