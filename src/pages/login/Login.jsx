import React from 'react'
import LogoImage from '../../assets/logo_image.png'
import LoginImage from '../../assets/icon/login.png'
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <img src={LogoImage} alt="logo" />
        <span>Sign In your account</span>

        <input type="email" placeholder='Email address'/>
        <input type="password" placeholder='Password'/>

        <a href="/">Forgot your password</a>
        <button className='login-button'>
          <img src={LoginImage} alt="lock-logo" />
          <span>Sign In</span>
        </button>
      </div>
    </div>
  )
}

export default Login