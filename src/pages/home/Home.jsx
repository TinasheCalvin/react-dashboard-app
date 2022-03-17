import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">Home</div>
    </div>
  )
}

export default Home