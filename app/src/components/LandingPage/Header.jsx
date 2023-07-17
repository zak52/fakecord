import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './LandingPage.css';
import discordLogo from '../../assets/discordLogo.png';
import './headerStyleSheet.css';
import NavBar from './NavBar.js';

const Header = () => {

  return (
    <div className='headerDiv'>
        <div className='row'>
            <div className='col'>
                <img src={discordLogo} alt='discordLogo'
                className='discordLogo'
                />
                <h1 className='discordTitle'>
                    Discord
                </h1>
            </div>
            <div className='col navBarCol'>
                <NavBar/>
            </div>
            <div className='col text-right buttonCol'>
                <button className='btn btn-primary btn-circle btn-xl'>
                    Login
                </button>
            </div>
        </div>

    </div>
  );
};

export default Header;