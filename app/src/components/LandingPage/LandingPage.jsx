import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './LandingPage.css';
import Header from './Header';

const LandingPage = () => {
    const headingStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '25px',
    };

  return (
    <div>
        <Header></Header>
      <h1>Welcome to the Landing Page!</h1>
      <p>This is a blank landing page.</p>
    </div>
  );
};

export default LandingPage;