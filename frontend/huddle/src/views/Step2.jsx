import React from "react";
import styled from "styled-components";
import { Marginer } from "../components/marginer";
import { SearchBox } from "../components/SearchBox";
import { ButtonSubmit } from "../components/ButtonSubmit";
import {withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const AppContainer = styled.div`
  margin-top: 2%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const InnerContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const CardInnerContainer = styled.div`
  padding: 2px 16px;
`;

const BodyContainer=styled.div`
background: rgb(209,255,177);
background: linear-gradient(58deg, rgba(209,255,177,1) 37%, rgba(164,246,255,1) 100%);
height: 90vh;
width: 100wh;
margin-top: -2%;

`

function Step2(props) {
    const history = useHistory();

    const submitHandler = (e)=>{
        console.log("Test trest test")
        history.push('/dashboard');
    }

    const nextPath=(path) =>{
        props.history.push(path);
      }


  return (
      <BodyContainer>
    <AppContainer>
        <h1>Step 2 of 3</h1>
          <Marginer direction="vertical" margin="0.7em" />
      <InnerContainer>
        <CardContainer style={{ width: "100%" }}>
          <CardInnerContainer>
            <h4>
              <b>I can talk about...</b>
            </h4>
          
            <SearchBox topicVal="e.g StoryTelling"></SearchBox>
            <Marginer direction="vertical" margin="2em" />
          </CardInnerContainer>
        </CardContainer>
        <Marginer direction="vertical" margin="3em" />
        <CardContainer style={{ width: "100%" }}>
          <CardInnerContainer>
            <h4>
              <b>I wanna know more about...</b>
            </h4>
           
            <SearchBox topicVal="e.g StoryTelling"></SearchBox>
            <Marginer direction="vertical" margin="2em" />
          </CardInnerContainer>
        </CardContainer>
        <Marginer direction="vertical" margin="2em" />
        <ButtonSubmit clickMe={submitHandler}>Submit</ButtonSubmit>
      </InnerContainer>
    </AppContainer>
    </BodyContainer>
  );
}

export default Step2;
