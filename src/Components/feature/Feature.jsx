import React from 'react'
import './feature.css'

export default function Feature({title, text}) {
  return (
    <div className='gpt3_features_container_feature'>
      <div className='gpt3_features_container_features_title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3_features_container_feature_text'>
        <p>{text}</p>
      </div>

    </div>
  )
}
