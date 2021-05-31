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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

    const [phone, setPhone]=useState("");
    const [collegeName, setCollegeName]=useState("");
    const [pass, setPass]=useState("");
    const [name, setName]=useState("");
    const [graduatingYear, setGraduatingYear]=useState("");
    const isAdmin=false;
    const [loading,setLoading]=useState(false);

    const classes = useStyles();

    const submitHandler= async (e)=>{
      console.log({phone,name,pass,collegeName,graduatingYear,isAdmin})

      const data = { 
      
        phone:phone,
        collegeName:collegeName,
        pass:pass,
        userName:name,
        graduatingYear:graduatingYear,
        isAdmin:isAdmin
      
      }
      setLoading(true)
      try{
       
        const request = await Axios.post("/api/v1/users/signup",data)
        console.log(request)
        localStorage.setItem("token",request.data.token);
        setLoading(false)
        window.location.href = "/step2"
        setTimeout(()=>{
          window.location.reload(false)
        },200)
      }
      catch(e){
        setLoading(false)
        if(e.message !== undefined){
          if(e.message.includes("409")){
            alert("Could not signup, please try again!")
          }
        }
      
      }

    }

 

   return (<div>
     {loading?
     <Backdrop className={classes.backdrop} open>
     <CircularProgress color="inherit" />
   </Backdrop>:

    <BoxContainer>
        <FormContainer>
        <Input type="text" placeholder="Your Name (as on LinkedIn!)" onChange={(e)=>setName(e.target.value)} />
        <Input type="text" placeholder="Your College name e.g MICA" onChange={(e)=>setCollegeName(e.target.value)}/>
        <Input type="text" placeholder="Graduating year e.g 2015" onChange={(e)=>setGraduatingYear(e.target.value)}/>
          <Input type="text" placeholder="Phone number" onChange={(e)=>setPhone(e.target.value)}/>
          <Input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
        </FormContainer>
        
        <Marginer direction="vertical" margin={12} />
  
        <SubmitButton type="submit" onClick={(e)=>submitHandler(e)}>To Step 2</SubmitButton>
  
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    }

   </div>)

}
