import React, { useState } from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import './new.scss'

function New({ title, inputs }) {
  const [file, setFile] = useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlined className="icon"/>
                </label>
                <input 
                  id="file" 
                  type="file" 
                  style={{display: "none"}}
                  onChange={e => setFile(e.target.files[0])}  
                />
              </div>
              {inputs.map(input => (
                <div key={input.id} className="formInput">
                  <label>{input.label}</label>
                  <input 
                    type={input.type}
                    placeholder={input.placeholder ? `${input.placeholder}` : null}/>
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New