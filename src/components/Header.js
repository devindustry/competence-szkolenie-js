import React from 'react';

const Header = (props) => {
    const x = 5;
    const result = x * 10;
    console.log(props);

    return (
        <header>
            <h1>
                Blog napisany w React JS {result}
            </h1>
            <h2>
                {props.title}
            </h2>
            <h3>
                {props.subtitle}
            </h3>
        </header>
    )
}

export default Header;