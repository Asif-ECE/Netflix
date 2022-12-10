import React from "react";

import kidsprofile from "../../../../graphical/kids-profile-pic.png";

import { Wrapper, Content, KidsPic } from "./KidsProfile.styles";

const KidsProfile = () => (
    <Wrapper>
        <Content>
            <KidsPic src={kidsprofile} alt="kids-profile" />
        </Content>
    </Wrapper>
);

export default KidsProfile;