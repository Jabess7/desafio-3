import React from 'react'
import Style from "./Main.module.css"
import { useEffect, useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');
  const toRotate = ['Jabes Alves','Desenvolvedor Full-Stack', 'Estudante de Engenharia de Software'];
  const [loop, setLoop] = useState(0) ;
  const[isDeleting,setIsDeleting] = useState(false) ;
  const escreve = 150;
  const apagar = 200
  const [delta, setDelta] =  useState(100);
  
  
  useEffect(()=>{
      let ticker = setInterval(()=>{
          toType()
      }, delta)
      return()=>{clearInterval(ticker)}
  
      },[text])
      
      const toType = ()=>{
          let i = loop % toRotate.length;
          let fullTexte = toRotate[i];
          let udatedText = isDeleting ? fullTexte.substring(0,text.length -1):fullTexte.substring(0,text.length +1) 

          setText(udatedText);
          if(!isDeleting && udatedText === fullTexte){
                  setIsDeleting(true)
                  setDelta(apagar);
          }else if(isDeleting && udatedText === '')
          {
              setIsDeleting(false)
              setDelta(escreve);
              setLoop(loop+1)
          }
      }

  return (
    <div className={Style.mainContainer}>
        <h1>
        Olá, eu sou {text}
        </h1>
      <p> 
        Tenho uma paixão profunda por   tecnologia e soluções inovadoras.<br /> Como futuro desenvolvedor Full-stack, estou profundamente
        empenhado em aprimorar minhas habilidades e conhecimentos
      </p>
        <a href="https://github.com/Jabess7" target='_black'><button type="button">Meu Github</button></a>
            </div>
  )
}

export default Main