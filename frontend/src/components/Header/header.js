import React from "react";

import netflixLogo from "../../images/netflix-logo.png";

import { Wrapper, Content, LogoImg } from "./header.styles";
import SigninButton from "../Buttons/signinButton";

const Header = ({ signInPage }) => (
    <Wrapper>
        <Content>
            <LogoImg src={netflixLogo} alt='netflix-logo'/>
            <SigninButton status={signInPage}/>
        </Content>
    </Wrapper>
)

export default Header;