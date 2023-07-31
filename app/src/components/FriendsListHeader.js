import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const FriendsListHeader = () => {

    const [inactive] = useState(true);

    return (
        <div className= {`friends-header ${inactive ? "inactive" : ""}`}>
            <div className="active-friend-icon">
                <i class="bi bi-person-heart"></i>
            </div>
            <span>
                Friends
            </span>
            <div className='vertical-divider'/>

            <div className="friends-toggler">
                <NavLink 
                    className="friends-option friends-online"
                    exact='true'
                    to='active' 
                >
                    Online
                </NavLink>
                <NavLink
                    exact='true'
                    to='all' 
                    className="friends-option friends-all"
                    >
                    All
                </NavLink>
                <NavLink 
                    exact='true'
                    to='pending' 
                    className="friends-option friends-pending"
                >
                    Pending
                </NavLink>
                <NavLink 
                    exact='true'
                    to='blocked' 
                    className="friends-option friends-blocked"
                    >
                    Blocked
                </NavLink>
                <button className="add-friend">
                    Add Friend
                </button>
            </div>

        </div>
    );
};

export default FriendsListHeader;