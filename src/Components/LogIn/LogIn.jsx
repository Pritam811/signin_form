import React, { useState } from 'react'
import './logIn.css'
import user from'../Assets/user.png'
import pass from'../Assets/pass.png'
import email from'../Assets/email.jpg'

export const LogIn = () => {

    const[action,setAction]= useState('Register')

    const handleClick = (e) => {
        e.preventDefault();
        setAction("Sign In");
      };

  return (
    <div className='container'>
        
        <div className="header">
            <div className="text">{action}</div>
        </div>

        

        <div className="userInfo">
            
            {
                action==='Sign In'?<div></div>
            
                :
            
                <div className="input">
                    <img src={user} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
            
            }
           

            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <img src={pass} alt="" />
                <input type="password" placeholder='Password' />
            </div>

        </div>

        {
            action!=='Sign In' && 
            (<div className="link-container">
                <a href="/login" className="link-text" onClick={handleClick}>Already have an <span className="highlight">account?</span></a>
            </div>)
        }    
        

        <div className="submit-container">
            {
                action==='Register'?
                <div className="submit">Sign Up</div>
                :
                <div className={action==='Register'?"submit gray":"submit"} >Sign In</div>
            }
            
            
        </div>


    </div>
  )
}
