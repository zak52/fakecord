import React from 'react';
import avatar from '../assets/avatar.jpeg';

const CommonFooter = () => {
    return (
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
    );
};

export default CommonFooter;