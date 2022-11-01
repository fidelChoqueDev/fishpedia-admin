import { useForm } from 'react-hook-form';
import LogoImage from '../../assets/logo_image.svg'
import Registro from '../../assets/icon/🦆 icon _user_.png'
import Reset from '../../assets/icon/🦆 icon _reset_.svg'
import './RegisterPage.css'

function RegisterPage () {
  const {register, formState: {errors}, watch, handleSubmit} = useForm({
    defaultValues: {
      nombre: 'Luis',
      email: 'nombre@gmail.com',
      password: '1234',
      repassword: '1234'
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
      
      <form onSubmit={handleSubmit(onSubmit)} className='boxmain'>
        <p>Bienvenido: {watch('nombre')}</p>
        <div className='reg-card'>
          <img className='imgLogo' src={LogoImage} alt="logo" />
          <h2 className='titleRegister'>Register your account</h2>
          
          <input type="text" {...register('nombre', {
            required:true,
            autofocus:true, 
            maxLength:10})} placeholder='Nick'/>
          {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}

          <input type="email" {...register('email', {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })} placeholder='Email address'/>

          <input type="password" {...register('password', {required:true,maxLength:12})} placeholder='Password'/>
          <input type="password" {...register('repassword', {required:true,maxLength:12})} placeholder='Reenter Password'/>
        
          <div className='boxbutton'>
            <button className='reg-button' type="submit">
              <img src={Registro} className="" alt="Logo Registro"/>
              Register
            </button>

            <button className='reg-button' type="reset">
            <img src={Reset} className="" alt="Logo Registro"/>
              Reset
            </button>

          </div>          
        </div>
      </form>        
  );
}

export default RegisterPage;