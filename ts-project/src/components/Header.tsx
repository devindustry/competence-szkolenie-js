import React from 'react';

type HeaderProps = {
  title: string;
};

// interface HeaderProps {
//     title:  string;
// }

const Header = ({title}: HeaderProps): JSX.Element => {
    return (
        <header>
            <h1>
                {title}
            </h1>
        </header>
    )
}

export default Header;