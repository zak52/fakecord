import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import discordLogo from '../../assets/discordLogo.png';
import './LandingPage.css';

const LandingPage = () => {
    const headingStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '25px',
    };

  return (
    <div>
        <header 
            className='masthead d-flex'
            style={
                headingStyles
            }
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-sm '>
                        <img src={discordLogo} alt="discord logo" className='discordLogo'/>
                        <h5 className='fw-bold'>Discord</h5>
                    </div>
                    <div className='col-sm'>

                    </div>
                    <div className='col-sm text-right align-right'>
                        <button className='rounded-pill'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            
        </header>
      <h1>Welcome to the Landing Page!</h1>
      <p>This is a blank landing page.</p>
    </div>
  );
};

export default LandingPage;
