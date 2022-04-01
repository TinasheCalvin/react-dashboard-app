import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./list.scss"
import Datatable from '../../components/datatable/Datatable'

function List({title,category}) {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable title={title} category={category}/>
      </div>
    </div>
  )
}

export default List