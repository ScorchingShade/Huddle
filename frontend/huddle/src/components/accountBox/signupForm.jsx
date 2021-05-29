import React, { useContext } from "react";
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

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" placeholder="Your Name as on LinkedIn!" />
      <Input type="text" placeholder="Your College name" />
      <Input type="date" placeholder="Graduating year" />
        <Input type="text" placeholder="Phone number" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      
      <Marginer direction="vertical" margin={12} />

      <SubmitButton type="submit">Signup</SubmitButton>

      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
