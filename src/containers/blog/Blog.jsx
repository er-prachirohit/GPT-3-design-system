import React from 'react'
import './blog.css'
import { Article } from '../../Components';
import { blog01, blog02, blog03, blog04, blog05 } from './import'

export default function Blog() {
  return (
    <div className='gpt3_blog section_padding' id='blog'>
      <div className='gpt3_blog_heading'>
        <h1 className='gradient_text'>
          A lot is happening, 
          We are blogging about it.
      </h1>
      </div>
      <div className='gpt3_blog_container'>
        <div className='gpt3_blog_container_group_A'>
          <Article
            imgUrl={blog01} 
            date="dec 26, 2025" 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
        </div>
        
        <div className='gpt3_blog_container_group_B'>
          <Article
            imgUrl={blog02} 
            date="dec 26, 2025" 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article
            imgUrl={blog03} 
            date="dec 26, 2025" 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article
            imgUrl={blog04} 
            date="dec 26, 2025" 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
          <Article
            imgUrl={blog05} 
            date="dec 26, 2025" 
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?" 
          />
        </div>
      </div> 
    </div>
  )
}
