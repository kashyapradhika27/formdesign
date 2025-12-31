import React from 'react'
import './App.css';
export const Signupform = () => {
    return (
        <div className='signupform'>
            <div>
                <h2>Signin to your <br></br>Popx Account</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form className='forms'>
                <div>
               
                    <input type='text'  name='email'placeholder='  ' />

                    <label>Email Address</label>
                </div>
                <div>
                
                    <input type='password'  placeholder=' ' name='password' />
                    <label>Password</label>
                </div>
            </form>
            <button type='button'>Log in</button>
        </div>
    )
}
