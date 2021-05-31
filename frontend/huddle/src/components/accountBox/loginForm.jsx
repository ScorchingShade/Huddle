import React, { useContext, useState } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Axios from "axios"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const [phone, setPhone]=useState("");
    const [pass, setPass]=useState("");
    const isAdmin="false";
    const [loading,setLoading]=useState(false);
    const classes = useStyles();

    const submitHandler= async (e)=>{
      console.log({phone,pass,isAdmin})

      const data = { 
      
        phone:phone,
        pass:pass,
        isAdmin:isAdmin
      
      }
      setLoading(true)
      try{
       
        const request = await Axios.post("/api/v1/users/signin",data)
        console.log(request)
        localStorage.setItem("token",request.data.token);
        setLoading(false)
        window.location.href = "/dashboard"
        setTimeout(()=>{
          window.location.reload(false)
        },200)
      
      }
      catch(e){
        setLoading(false)
        if(e.message !== undefined){
          if(e.message.includes("401")){
            alert("Could not log in, please try again!")
          }
        }
      
      }

    }


  return (
    <div>
      {loading?
      
      <Backdrop className={classes.backdrop} open>
     <CircularProgress color="inherit" />
   </Backdrop>
      :
      
      <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">Forget your password?</MutedLink>

      <Marginer direction="vertical" margin={12} />

      <SubmitButton type="submit" onClick={(e)=>submitHandler(e)}>Signin</SubmitButton>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
      }
    </div>
    
  );
}
