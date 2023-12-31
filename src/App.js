import './App.css';
import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
   const pageSize = 15;

   const [progress,  setProgress] = useState(0);

  
    return (
        <Router>
          <div>
        <Navbar/>
        <LoadingBar
        height={5}
        color='#E11946'
        progress={progress}/>
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={"us"} category={"general"}/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={"us"} category={"health"}/>}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={"us"} category={"entertainment"}/>}/>
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country={"us"} category={"science"}/>}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={"us"} category={"sports"}/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={"us"} category={"technology"}/>}/>
        </Routes>
        </div>
        </Router>
    )
  }

  export default App;