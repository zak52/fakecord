import React, { useState } from 'react';
import discordLogo from '../assets/discordLogo.png';
import avatar from '../assets/avatar.jpeg'; 
import ServerItem from './ServerItem.js';


const ServerMenu = (props) => {
    const [inactive, setInactive] = useState(true);

    const serverItems = [
        {name: 'Dashboard', exact: true, to: '/', iconClassName: "bi bi-chat-left-text-fill"},
        {name: 'Server1', exact: true, to:'/server1', iconClassName: "bi bi-chat-left-text-fill"},
        {name: 'Server2', exact: true, to:'/server2', iconClassName: "bi bi-chat-left-text-fill"}
        
    ];

    props.onCollapse(inactive);


    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className ="top-section">
                <div className='website-title'>
                    Fakecord
                </div>
                <div className="logo">
                    <img 
                        src={discordLogo}
                        alt='discord'
                    />
                </div>
                <div onClick={() => setInactive(!inactive)} className='toggle-button'>
                    {inactive ? <i class="bi bi-arrow-right-square-fill out-arrow"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className='search-controller'>
                <button className='search-btn'>
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder='search' />
            </div>

            <hr className="divider"></hr>

            <div className='server-list'>
                <ul>
                    {
                        serverItems.map((serverItem, index) => (
                        <ServerItem 
                        key={index} 
                        name={serverItem.name}
                        exact={serverItem.exact}
                        to={serverItem.to} 
                        iconClassName={serverItem.iconClassName}
                        /> 
                        ))
                    }


                    {/*
                    <ServerItem
                        name={"Dashboard"}
                    />
                    <li>
                        <a href="#home" className='server-item'>
                            <div className='sever-icon'>
                                <i class="bi bi-chat-left-text-fill"></i>
                            </div>
                            <span>
                                Server 1
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className='server-item'>
                            <div className='sever-icon'>
                                <i class="bi bi-chat-left-text-fill"></i>
                            </div>
                            <span>
                                Server 2
                            </span>
                        </a>
                    </li>
    */}
                </ul>
            </div>

            <div className='side-menu-footer'>
                <div className='avatar'>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className='user-info'>
                    <h5>ExZachtlyLast</h5>
                </div>
            </div>
        </div>
    );
};

export default ServerMenu;