import React from 'react';
import avatar from '../assets/avatar.jpeg'

const OnlineFriends = () => {
    return (
        <div className="online-friend-list">
            <div className='friend-search-bar'>
                <input type="text" placeholder='Search' />
                <button className='friend-search-btn'>
                    <i class="bi bi-search"></i>
                </button>
            </div>
            <div className="display-online-friends">
                <div className='num-online-friends'>
                    ONLINE -- 1
                </div>
                <div className="horizontal-divider"></div>
                <div className='online-list'>
                    <ul>
                        <li>
                            <a href="Otterwall" className='friend-item'>
                                <div className='friends-avatar'>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <span>
                                    <div className="friends-username">
                                        OtterWall
                                    </div>
                                    <div className='friends-moto'>
                                        Playing Mass Effect 2
                                    </div>
                                    <div className='friends-option-btns'>
                                        <div className="direct-message-btn">
                                            <i class="bi bi-chat-left-fill"></i>
                                        </div>
                                        <div className="more-options-btn">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </div>
                                    </div>
                                    
                                </span>
                            </a>
                        </li>
                        <div className="horizontal-divider"></div>
                        <li>
                            <a href="Otterwall" className='friend-item'>
                                <div className='friends-avatar'>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <span>
                                    <div className="friends-username">
                                        OtterWall
                                    </div>
                                    <div className='friends-moto'>
                                        Playing Mass Effect 2
                                    </div>
                                    <div className='friends-option-btns'>
                                        <div className="direct-message-btn">
                                            <i class="bi bi-chat-left-fill"></i>
                                        </div>
                                        <div className="more-options-btn">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </div>
                                    </div>
                                    
                                </span>
                            </a>
                        </li>
                        <div className="horizontal-divider"></div>
                        <li>
                            <a href="Otterwall" className='friend-item'>
                                <div className='friends-avatar'>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <span>
                                    <div className="friends-username">
                                        OtterWall
                                    </div>
                                    <div className='friends-moto'>
                                        Playing Mass Effect 2
                                    </div>
                                    <div className='friends-option-btns'>
                                        <div className="direct-message-btn">
                                            <i class="bi bi-chat-left-fill"></i>
                                        </div>
                                        <div className="more-options-btn">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </div>
                                    </div>
                                    
                                </span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default OnlineFriends;