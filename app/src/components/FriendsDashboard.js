import React from 'react';
import FriendsListHeader from './FriendsListHeader';
import { Outlet } from 'react-router';


const FriendsDashboard = () => {
    return (
        <div className='content-area'>
            <div>
                <FriendsListHeader/>
            </div>
            
            <div className='friends-content-area'>
                <Outlet/>
            </div>
        </div>
    );
};

export default FriendsDashboard;