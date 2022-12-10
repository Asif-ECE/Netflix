import React from "react";
import { Wrapper, Content } from "./ourstory.styles";

const OurStory = ({title, description, graphical, whatIndex}) => {
    const direction = (whatIndex % 2 === 0) ? true : false;
    return (
        <Wrapper>
            <Content direction={direction}>
                <div className="text-box">
                    <div className="title">{ title }</div>
                    <div className="description">{ description }</div>
                </div>
                <div>
                    {graphical}
                </div>
            </Content>
        </Wrapper>
    );
};

export default OurStory;