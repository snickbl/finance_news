import React from "react";
import './App.css';
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import News from "./News/News";
import { GetData } from "./Components/GetData";


function App() {

  GetData()
  
  return (
    <div className="App">
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/news/:id' element={<News/>}/>
        </Routes>

    </div>
  );
}

export default App;
