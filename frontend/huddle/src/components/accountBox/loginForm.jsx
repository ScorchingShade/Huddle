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

export function LoginForm(props) {
    const { switchToSignup } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Phone number" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={5} />
      <MutedLink href="#">Forget your password?</MutedLink>

      <Marginer direction="vertical" margin={12} />

      <SubmitButton type="submit">Signin</SubmitButton>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
