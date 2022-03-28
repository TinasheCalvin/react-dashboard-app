import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import {userColumns, userRows} from '../../datatablesource'
import './datatable.scss'
import { Avatar } from '@mui/material';

function Datatable() {
    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "user", headerName: "User", width: 230, renderCell: (params)=>{
                return (
                    <div className="cellWithImg">
                        <Avatar src={params.row.img} alt="" className="cellImg"/>
                        {/* <img scr={require("https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg")} alt="" className="cellImg" /> */}
                        {params.row.username}
                    </div>
                )
            }
        },
        {   field: "email", 
            headerName: "Email",
            width: 230 
        },
        {   field: "age",
            headerName: "Age",
            type: "number",
            width: 100
        },
        {
            field: "status",
            headerName: "Status",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
                )
            }
        }
    ]
    
    //temporary data
    const userRows = [
        {
          id: 1,
          username: "Snow",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          status: "active",
          email: "1snow@gmail.com",
          age: 35,
        },
        {
          id: 2,
          username: "Jamie Lannister",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "2snow@gmail.com",
          status: "passive",
          age: 42,
        },
        {
          id: 3,
          username: "Lannister",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "3snow@gmail.com",
          status: "pending",
          age: 45,
        },
        {
          id: 4,
          username: "Stark",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "4snow@gmail.com",
          status: "active",
          age: 16,
        },
        {
          id: 5,
          username: "Targaryen",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "5snow@gmail.com",
          status: "passive",
          age: 22,
        },
        {
          id: 6,
          username: "Melisandre",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "6snow@gmail.com",
          status: "active",
          age: 15,
        },
        {
          id: 7,
          username: "Clifford",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "7snow@gmail.com",
          status: "passive",
          age: 44,
        },
        {
          id: 8,
          username: "Frances",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "8snow@gmail.com",
          status: "active",
          age: 36,
        },
        {
          id: 9,
          username: "Roxie",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "snow@gmail.com",
          status: "pending",
          age: 65,
        },
        {
          id: 10,
          username: "Roxie",
          img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          email: "snow@gmail.com",
          status: "active",
          age: 65,
        },
      ];
    
    const actionColumn = [{field: "action", headerName: "Action", width: 230, renderCell: () => {
        return (
            <div className='cellAction'>
                <div className="viewButton">View</div>
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]

    return (
        <div className="datatable">
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable