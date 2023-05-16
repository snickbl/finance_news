import React from 'react'

const News_item = ({novost}) => {
  return (
    <>
        <div className="container">

            <h1>{novost.title}</h1>

            <br/>
            <hr/>
            <br/>

            <img src={novost.photo} width='725px'></img>

            <br/>
            <hr/>
            <br/>

            <p>{novost.article}</p>

            <br/>
            <hr/>
            <br/>

            <p>{novost.date}</p>

        </div>
    </>
  )
}

export default News_item