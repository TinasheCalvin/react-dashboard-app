import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationImportant, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search...' />
          <SearchOutlined className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar