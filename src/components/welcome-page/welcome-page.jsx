import React from 'react';
import './welcome-page.css';

export function WelcomePage(props) {
    return (
      <div id='container'>
        <div className='header'>
          <h1>Шинний калькулятор</h1>
          <p>www.example.com</p>
        </div>
        
        <div className='basement'>
          <button className='button' onClick={props.onClick}>Розпочати</button>
        </div>
      </div>
    );
  }