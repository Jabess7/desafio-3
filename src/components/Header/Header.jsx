import React from 'react'
import Style from "./Header.module.css"


const Header = () => {
  return (
    <div className={Style.headerContainer}>
        <ul>
            <li>
                <a href="#projetos">Projetos </a>
            </li>
            <li>
                <a href="#blog">Blog</a>
            </li>
            <li>
                <a href="#contato">Contato</a>
            </li>
        </ul>
    </div>
  )
}

export default Header