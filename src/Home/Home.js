import axios from 'axios';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import s from './Home.module.css';

function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Lógica de inicio de sesión usando axios
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });

      const newToken = response.data.token;
      setToken(newToken);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };


  return (
    <>
    <Header />
    <article className={s.wrapper}>
      <div className={s.hero} id="hero">
        <div className={s.heroText}>
          <h1 className={s.title}>Simula tu préstamo en UF</h1>
          <text>
            Lorem ipsum dolor sit amet consectetur. Mi consequat tincidunt et integer. 
            Malesuada accumsan nibh senectus pellentesque dictum ullamcorper non. 
          </text>
          <div className={s.buttons}>
            <button className={s.buttonPrimary}>Simular en UF</button>
            <button className={s.buttonSecondary}>Simular en pesos</button>
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
            <input placeholder='Correo electrónico' className={s.input}/>
          </div>
          <div className={s.inputSection}>
            <span className={s.label}>Contraseña</span>
            <input placeholder='Contraseña' className={s.input}/>
          </div>
          <button className={s.button}>Ingresar</button>
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