import React from 'react'
import Style from "./Blog.module.css"
import {blog} from "../../Data/Data"

function Blog() {
  return (
    <div className={Style.blogContainer} id='blog'>
       <div>
         <h2>Blog</h2>
        </div>
       <div className={Style.blogConteudo}>
         {blog.map((item) => (
            <div key={item.id} className={Style.blogDescricao} >
                <h3>{item.title}</h3>
                <div>
                <p>{item.date}</p>
                <p>{item.resourcesEmployed}</p>
                </div>
                <p>{item.description}</p>
            </div>           
        ))}
         </div>
       
    </div>
  )
}

export default Blog