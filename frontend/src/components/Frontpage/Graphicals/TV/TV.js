import React from "react";
import {Wrapper, Content, TVFrame, TVSrceen} from "./TV.styles";
import Television from "../../../../graphical/tv.png";
import ScreenPlay from "../../../../graphical/video-tv.m4v";

function TV() {
    return (
        <Wrapper>
            <Content>
                <TVFrame src={Television} alt="tv-frame"/>
                <TVSrceen loop autoPlay muted src={ScreenPlay} />
            </Content>
        </Wrapper>
    );
};

export default TV;