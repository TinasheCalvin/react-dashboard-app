import React from 'react'
import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './widget.scss'
import { mergeBreakpointsInOrder } from '@mui/system'

function Widget({type}) {
    let data

    // temporary values
    let amount = 100
    let difference = "20%"

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlined className='icon' style={
                    {color: 'crimson', backgroundColor: "rgba(255, 0, 0, 0.2)"}
                }/>
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingCartOutlined className='icon' style={
                    {color: 'goldenrod', backgroundColor: 'rgba(218, 232, 63, 0.2)'}
                }/>
            }
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View Net Earnings",
                icon: <MonetizationOnOutlined className='icon' style={
                    {color: 'green', backgroundColor: "rgba(0, 128, 0, 0.2)"}
                } />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlined className='icon' style={{
                    color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)'
                }} />
            }
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="count">{data.isMoney && '$'} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {difference}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget