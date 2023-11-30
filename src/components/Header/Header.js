import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {

  return (
    <section className={s.header}>
      <img src="/lafinanciera.png" alt="Logo" className={s.logo}/>
      <div className={s.links}>
        <Link href="#login" className={s.buttonSimple}>
            <span>Inciar sesión</span>
        </Link>
        <Link href="#hero">
          <button className={s.button}>Simular</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;