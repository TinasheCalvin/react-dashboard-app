import React from 'react'
import { AreaChart, XAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts'
import './chart.scss'

function Chart({aspect,title}) {
  const data = [
    {name: "January", total: 1200},
    {name: "February", total: 2100},
    {name: "March", total: 800},
    {name: "April", total: 1700},
    {name: "May", total: 1600},
    {name: "June", total: 2000},
  ]
  

  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart width={650} height={450} data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart