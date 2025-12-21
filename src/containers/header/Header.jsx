import React from 'react'
import './header.css'
import ppls from '../../assets/ppls.png'
import illustration from '../../assets/illustration.png'

export default function Header() {
  return (
    <div className='gpt3_header section_padding' id='home'>
      <div className='gpt3_header_content'>
        <h1 className='gradient_text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p> Yet bed any for travelling assistance indulgence unpleasing.
            Not thoughts all exercise blessing. Indulgence way
            everything joy alteration boisterous the attachment. Party
            we years to order allow asked of.
        </p>
        <div className='gpt3_header_content_input'>
          <input type="email" placeholder='Your Emain Address' />
          <button type='button'> Get Started</button>
        </div>
        <div className='gpt3_header_content_ppl'>
          <img src={ppls} alt="Group" />
          <p>1600 people request access a visit in last 24 hours</p>
        </div>
      </div>
        <div className='gpt3_header-image'>
          <img src={illustration} alt="illustraion AI" />
        </div>
    </div>
  ) 
}
