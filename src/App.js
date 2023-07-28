import './App.css'
import Home from './Home/Home'
import Team from './Team/Team'
import Navbar from './navbar'
import Footer from './footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [teamInfo, setTeamInfo] = useState(JSON.parse(localStorage?.getItem('teamMembers')) || {
    TeamA: [],
    TeamB: [],
    TeamC: [],
    TeamD: []
  })
  function passData(teamMembers) {
    setTeamInfo(teamMembers)
  }
  return( 
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home passData={passData}/>}/>
          <Route path='/team' element = {<Team TeamInfo = {teamInfo}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;
