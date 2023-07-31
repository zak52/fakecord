import React, { useState }  from 'react';
import FriendsItem from './DirectMessageItem.js';
import CommonFooter from './CommonFooter.js'; 
import { NavLink, Outlet } from 'react-router-dom';

const FriendsList = (props) => {

    const [inactive] = useState(true);

    const friendsItems = [
        {name: 'Otterwall', exact: true, to: '/otterwall', iconClassName: "bi bi-person-circle"},
        {name: 'Capt_Vegas', exact: true, to:'/Capt_Vegas', iconClassName: "bi bi-person-circle"},
        {name: 'Spikid22', exact: true, to:'/Spikid22', iconClassName: "bi bi-person-circle"}
        
    ];

    return (
        <div className='content'>
            
            
            <div className={`friends-menu ${inactive ? "inactive" : ""}`}>
                <div className='top-section'>
                    <div className='search-controller'>
                        <button className='search-btn'>
                            <i class="bi bi-search"></i>
                        </button>
                        <input type="text" placeholder='Find or start a converstion' />
                    </div>
                </div>

                <hr className="divider"></hr>


                <div className="friends-list">
                    <NavLink 
                    exact={true}
                    to="/friends"
                    className="friends-hub friends-item"
                    >
                        <div className='friends-logo'>
                            <i class="bi bi-emoji-laughing-fill"></i>
                        </div>
                        <span>
                            Friends
                        </span>
                    </NavLink>
                    <div className="direct-message">
                        <span>
                            DIRECT MESSAGES
                        </span>
                        <button className='add-friend-button'>
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>

                    <ul>
                        {
                            
                                friendsItems.map((friendsItem, index) => (
                                <FriendsItem
                                key={index} 
                                name={friendsItem.name}
                                exact={friendsItem.exact}
                                to={friendsItem.to} 
                                iconClassName={friendsItem.iconClassName}
                                /> 
                                ))



                        }


                        {/*
                        <li>
                            <a href="#friend" className='friends-item'>
                                <div className='friends-icon'>
                                    <i class="bi bi-person-circle"></i>
                                </div>
                                <span>
                                        Otterwall
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#friend" className='friends-item'>
                                <div className='friends-icon'>
                                    <i class="bi bi-person-circle"></i>
                                </div>
                                <span>
                                        Capt_Vegas
                                </span>
                            </a>
                        </li>
        */}
                    </ul>
                </div>

                <CommonFooter/>

                {/*
                <div className='friends-menu-footer'>
                    <div className='username-selection'>
                        <div className='avatar'>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className='user-info'>
                            <h5>ExZachtlyLast</h5>
                        </div>
                        <div className='user-visibilty'>
                            <h5>offline</h5>
                        </div>
                    </div>
                    <div className='option-selection'>
                        <button>
                            <i class="bi bi-mic-fill"></i>
                        </button>
                        <button>
                            <i class="bi bi-headphones"></i>
                        </button>
                        <button>
                            <i class="bi bi-gear-fill"></i>
                        </button>
                        
                        
                    </div>
                </div>
    */}

            </div>
            <Outlet/>
        </div>
    );
};

export default FriendsList;