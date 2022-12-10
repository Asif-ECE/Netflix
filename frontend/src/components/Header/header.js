import React from "react";

import netflixLogo from "../../images/netflix-logo.png";

import { Wrapper, Content, LogoImg } from "./header.styles";
import SigninButton from "../Buttons/signinButton";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={netflixLogo} alt='netflix-logo'/>
            <SigninButton />
        </Content>
    </Wrapper>
)

export default Header;