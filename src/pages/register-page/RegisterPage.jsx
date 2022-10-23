import LogoImage from '../../assets/logo_image.png'
import LoginImage from '../../assets/icon/login.png'
import './RegisterPage.css'

const RegisterPage = () => {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <img src={LogoImage} alt="logo" />
        <span>Sign In your account</span>

        <input type="text" placeholder='Nick'/>
        <input type="email" placeholder='Email address'/>
        <input type="password" placeholder='Password'/>
        <input type="password" placeholder='Reenter Password'/>
        
        <button className='login-button'>
          <img src={LoginImage} alt="lock-logo" />
          <span>Sign In</span>
        </button>
      </div>
    </div>
  )
}

export default Login