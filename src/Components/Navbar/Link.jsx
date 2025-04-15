import React from 'react';

const Link = ({route}) => {
    return (

        <li className='hover:bg-amber-500 px-3 rounded hover:text-white'>
            <a href={route.url}>{route.name}</a>
        </li>

    );
};

export default Link;