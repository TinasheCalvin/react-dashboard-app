import { TableContainer,Paper,Table,TableHead,TableRow,TableBody, TableCell } from '@mui/material'
import React from 'react'
import './datatable.scss'

function DataTable() {

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
    ];

    return (
        <div className="dataTable">
            <TableContainer component={Paper} className="table">
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Tracking ID</TableCell>
                            <TableCell className="tableCell">Product</TableCell>
                            <TableCell className="tableCell">Customer</TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Payment Method</TableCell>
                            <TableCell className="tableCell">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell className="tableData" align="left">{row.id}</TableCell>
                                <TableCell className="tableData" align="left">
                                    <div className="cellWrapper">
                                        <img src={row.img} alt="" className="image" />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableData" align="left">{row.customer}</TableCell>
                                <TableCell className="tableData" align="left">{row.date}</TableCell>
                                <TableCell className="tableData" align="left">{row.amount}</TableCell>
                                <TableCell className="tableData" align="left">{row.method}</TableCell>
                                <TableCell className="tableData" align="left">
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable