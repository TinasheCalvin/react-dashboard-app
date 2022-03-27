import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../datatablesource'
import './datatable.scss'

function Datatable() {
    
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