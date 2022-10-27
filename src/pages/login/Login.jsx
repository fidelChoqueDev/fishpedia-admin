import React, { useState } from 'react'
import LogoImage from '../../assets/logo_image.png'
import LoginImage from '../../assets/icon/login.png'
import './Login.css'
import Input from '../../Components/Input/Input'

const Login = () => {
  const [userData, setUserData] = useState({email: '', password: ''})

  const handleOnChange = ({target}) => {
    setUserData(current => 
      ({...current, [target.name]: target.value})
    )
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
    if (userData.email === 'admin@admin.com' && userData.password === 'admin1234'){
      alert('success')
    }else {
      alert('It went wrong')
    }
  }
  
  return (
    <div className='login-container'>
      <form 
        onSubmit={handleOnSubmit}
        className='login-card'
      >
        <img src={LogoImage} alt="logo" />
        <span>Sign In your account</span>
        
        <Input
          className='login-form'
          type='email' 
          placeholder='Email address'
          errorMessage='You must provide a valid email'
          name='email'
          value={userData.username} 
          onChange={handleOnChange}
        />

        <Input
          className='login-form'
          type='password' 
          placeholder='Password'
          pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$'
          errorMessage='Your password must contain 8 characters and at least one letter and one number'
          name='password'
          value={userData.password}
          onChange={handleOnChange}
        />

        <a href="/">Forgot your password</a>
        <button className='login-button'>
          <img src={LoginImage} alt="lock-logo" />
          <span>Sign In</span>
        </button>
      </form>
    </div>
  )
}

export default Login