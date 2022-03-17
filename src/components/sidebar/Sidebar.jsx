import React from 'react'
import {AccountCircleOutlined, DashboardCustomizeOutlined, ExitToApp, InsertChart, Inventory2Outlined, LocalShippingOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined, StoreMallDirectoryOutlined} from '@mui/icons-material';
import "./sidebar.scss"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">iamcal_vin</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardCustomizeOutlined className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryOutlined className="icon" />
            <span>Products</span>
          </li>
          <li>
            <Inventory2Outlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlined className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlined className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar