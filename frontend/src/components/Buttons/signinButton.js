import React from "react";

import { Wrapper, Button } from "./signinButton.styles";

const SigninButton = ({ status }) => (
    <Wrapper>
        <Button status={status}>Sign In</Button>
    </Wrapper>
);

export default SigninButton;