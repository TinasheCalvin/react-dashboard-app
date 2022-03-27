import React from 'react'
import { MoreVert, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss'

function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVert fontSize='small'/>
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar 
            value={22}
            text="22%"
            strokeWidth={3}
          />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$420</p>
        <p className='desc'>Previous transactions processing. Last payments may not be included.</p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
             <KeyboardArrowUp />
             <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
             <KeyboardArrowUp />
             <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
             <KeyboardArrowDown />
             <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured