import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header(headerProps) {

  const { state } = headerProps; 
 
  return (
    <section className={s.header}>
      <img src="/lafinanciera.png" alt="Logo" className={s.logo}/>
      <div className={s.links}>
        <Link href="#login" to='/' className={s.buttonSimple}>
            <span>{state}</span>
        </Link>
        <Link href="#hero" to='/Simular2'>
          <button className={s.button}>Simular</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;