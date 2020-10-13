import React from 'react'

function paragraf({ title, paragraf }) {

  return (
    <div className="paragraf col-12 text-justify text-md-left col-md-5">
      <h5 className="text-info">{title}</h5>
      {paragraf.map(text => <p>{text}</p>)}
    </div>
  )
}

export default paragraf

