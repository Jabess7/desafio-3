import React from 'react'
import Style from "./Projetos.module.css"
import { projetos } from '../../Data/Data'

function Projetos() {
  return (
    <div className={Style.projetosContainer} id='projetos'>
        <h2>Projetos</h2>
        {projetos.map((item) => (
            <div key={item.id} className={Style.projetosConteudo}>
                <div>
                    <a href={item.link} target='_blank'><img src={item.img} alt="projetos realizados"/></a>
                </div>
                <div className={Style.projetosDescricao}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        ))}

        </div>
  )
}

export default Projetos