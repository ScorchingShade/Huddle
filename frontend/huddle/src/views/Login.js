import React from 'react'
import "../commonCSS/Landing.css"
import image from "../resources/HomeLanding.jpeg";
import AccountBox from '../components/accountBox'

function Login(props) {

    let bgStyle = {
        backgroundImage: `url(${image})`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
    
        display:"flex",
        flexDirection:"column",
       
    
    
      };
    
      const nextPath=(path) =>{
        props.history.push(path);
      }
    
      let overLay = {
        /* Sit on top of the page content */
        display: "flex" /* Hidden by default */,
        flexDirection:"column",
        height: "100vh" /* Full height (cover the whole page) */,
        padding: 20,
        backgroundColor:
          "rgba(225, 232, 228,0.6)" /* Black background with opacity */,
        zIndex: 1 /* Specify a stack order in case you're using a different order for other elements */,
         /* Add a pointer on hover */
        justifyContent:"center",
    
      };
    
      let textStyle={
          fontSize: "320%",
          fontWeight:600,
          color: "white",
      textShadow: "4px 4px 8px #000000"
      }
    
      let textStyleCaption={
        fontSize: "1.4rem",
        fontWeight:600,
        color: "white",
        textShadow: "2px 2px 4px black"
      }
    
    

      
    return (
        <div>
        <div style={bgStyle}>
          
            <div style={{marginTop:"2%"}}>
            <AccountBox />
         
           
            </div>
          </div>
      </div>
    )
}

export default Login
