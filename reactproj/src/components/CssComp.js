
import React,{Component} from 'react';
import "./external.css";
import mymodule from  "./mycss.module.css";
const CssComp=()=>{
    let circle={
        width: true?"100px":"200px",
        height: true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid red":"5px solid green",
        margin:"auto"
    }
        return(
        <div>
            {/* 1. Use of internal css */}
            <h1 style={{color:"aqua"}}>This is CSS component</h1>
            <p style ={circle}>HI</p>
            <div className ='txtPrimary'>Hello Karthik</div>
            <div className ='txtDanger'>Hello Vikram</div>
            <div className ={mymodule.special}>Hello</div>
     </div>
        )
    }

export default CssComp;