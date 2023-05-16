import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Article from '../Components/Article';
import Loading from '../Components/Loading';


const Reverser = (array) => {
  let list = [...array].reverse() 
  return list
}

// let novosti = []

// let flag = false

export const Home = () => {

    let [novosti, setNovosti] = useState([])

    let {news} = useSelector(state => state.newsSlice)
    const {isLoading} = useSelector(state => state.newsSlice)

    function CheckLoad() {
      // novosti = [...news]
      setNovosti(news)

       console.log(novosti)
      if (isLoading) {
        return <Loading/>
      } else {
        return (Reverser(novosti).map((element, index) => {
          return <Article element={element} key={index}/>      
        }))
      }
    }

  return (
    <div className="container">
        <div className="todays">
          <h2>Breaking news</h2>
        </div>
        <div className='articles'>
          <CheckLoad/>
        </div>
    </div> 
  )
}
