import React from 'react';
import { NavLink } from 'react-router-dom';


const FriendsItem = (props) => {
    const { name, iconClassName, to, exact} = props;


    return (
        <li>
            <NavLink 
                exact={exact} 
                to={to} 
                className='friends-item'
            >
                <div className='friends-icon'>
                    <i class={iconClassName}></i>
                </div>
                <span>
                    {name}
                </span>
            </NavLink>
        </li>
    );
};

export default FriendsItem;