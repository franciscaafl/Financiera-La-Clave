import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Home.module.css';

function Home() {

  const [data, setData] = useState({
    email: '',
    password: ''
  
  });
  const[error, setError] = useState('');

  const handleChange = ({currentTarget: input}) =>{
    setData({...data, [input.name]: input.value});
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Lógica de inicio de sesión usando axios
      const {data: res} = await axios.post('http://localhost:5000/api/Prestamos', data);
      localStorage.setItem("token", res.data);
      window.location = "/"
      console.log(res.message);

      //const newToken = response.data.token;
      //setToken(newToken);
    } catch (error) {
      if(
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ){
        setError(error.response.data.message);
      }
      //console.error('Login error:', error.message);
    }
  };


 

  


  return (
    <>
    <section className={s.header}>
      <img src="/lafinanciera.png" alt="Logo" className={s.logo}/>
      <div className={s.links}>
        <Link href="#login" className={s.buttonSimple}>
            <span>Iniciar sesión</span>
        </Link>
        <Link href="#hero" to='/Simular'>
          <button className={s.button}>Simular</button>
        </Link>
      </div>
    </section>
    <article className={s.wrapper}>
      <div className={s.hero} id="hero">
        <div className={s.heroText}>
          <h1 className={s.title}>Simula tu préstamo en UF</h1>
          <text>
            De manera rápida y sencilla podrás visualizar el valor de tu cuota.
          </text>
          <div className={s.buttons}>
            <Link to='./Simular'> 
              <button className={s.buttonPrimary}>Simular en UF</button>
            </Link>
          </div>
        </div>
        <img src="image-hero.png" alt="imagen hero" className={s.heroImage}/>
      </div>
    </article>


    <div className={s.loginBackground} id="login">
      <div className={s.loginBox}>
        <div className={s.login}>
          <h1 className={s.subtitle}>Iniciar sesión</h1>
          <div className={s.inputSection}>
            <span className={s.label}>Correo electrónico</span>
            <input
                type = "Text"
                placeholder='Correo Electrónico' 
                name='email'
                onChange={handleChange}
                value={data.email}
                required
                className={s.input}
              />
          </div>
          <div className={s.inputSection}>
            <span className={s.label}>Contraseña</span>
            <input 
              type='Password'
              placeholder='Contraseña'
              name='password'
              onChange={handleChange}
              value={data.password}
              required
              className={s.input}/>
          </div>
          <Link lassName={s.link} to='./Prestamos'>
            <button className={s.button}>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>


    <article className={s.wrapper}>
      <div className={s.hero}>
        <img src="image-help.png" alt="imagen de ayuda" className={s.heroImage}/>
        <div className={s.heroText}>
          <h1 className={s.title}>¿Necitas ayuda?</h1>
          <text className={s.text}>
            Contáctate con nosotros para poder ayudarte en lo que necesites
          </text>
          <div className={s.buttons}>
            <button className={s.buttonPrimary}>Llamános</button>
            <button className={s.buttonSecondary}>Hablémos por Whatsapp</button>
          </div>
        </div>
      </div>
    </article>
    </>

  );
}

export default Home;