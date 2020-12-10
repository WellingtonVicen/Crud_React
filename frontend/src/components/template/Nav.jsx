import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<aside className="menu-area">
   <nav className="menu">
       {/*Refatorar*/}
       <Link to="/">
       <i className={`fa fa-${props.iconHome}`}></i> Inicio
       </Link>
        <Link to="/users">
        <i className={`fa fa-${props.iconUsers}`}></i> Usuários
        </Link>
   </nav>
</aside>
