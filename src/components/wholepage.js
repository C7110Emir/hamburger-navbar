import React from 'react'
import image from "./cd2246d5d0f54f9a4316bd4d276764b2.png"
import {useEffect,useState,useLayoutEffect} from "react"
import "./wholepage.css"


function Wholepage() {
    const [dropdown,setDropdown] = useState(false)
    const [windowwith,setWindowwidth] = useState(window.innerWidth)
    
    setInterval(() =>{
        setWindowwidth(window.innerWidth)
    },1000)
    return (
        <div style={{width:"100vw",height:"99vh"}} >
        <div className="outerDiv" >
            <div className="imagediv">
                <img src={image} alt="logo" className="image"/>
            
           {532 <  windowwith ? 
           <div className="biggerversionouterdiv">
               <a>Works</a>
               <a>About</a>
               <a>Career</a>
               <a>Contact</a>
           </div>:<div></div>
            }
            </div>
        </div>
        </div>
        
    )
}


export default Wholepage;


