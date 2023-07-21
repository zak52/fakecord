import React from 'react';
import {NavLink} from "react-router-dom";


const ServerItem = (props) => {
    const { name, iconClassName, to, exact} = props;


    return (
        <li>
            <NavLink 
                exact={exact} 
                to={to} 
                className='server-item'
            >
                <div className='sever-icon'>
                    <i class={iconClassName}></i>
                </div>
                <span>
                    {name}
                </span>
            </NavLink>
        </li>
    );
};


export default ServerItem;