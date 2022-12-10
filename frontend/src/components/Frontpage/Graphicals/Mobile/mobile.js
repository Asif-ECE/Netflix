import React from "react";
import { Wrapper, Content, Phone, BoxImage, DownloadIcon } from "./mobile.styles";
import STBoxShot from "../../../../graphical/stranger-things-boxshot.png";
import MobileFrame from "../../../../graphical/mobile.jpg";
import DownloadIconGif from "../../../../graphical/download-gif-icon.gif";

const Mobile = () => (
    <Wrapper>
        <Content>
            <Phone src={MobileFrame} alt="st-image" />
            <div className="downloader">
                <BoxImage src={STBoxShot} alt="" />
                <div className="text-div">
                    <div className="showName">Stranger Things</div>
                    <div className="downloading">Downloading...</div>
                </div>
                <DownloadIcon src={DownloadIconGif} alt="" />
            </div>
        </Content>
    </Wrapper>
);

export default Mobile;