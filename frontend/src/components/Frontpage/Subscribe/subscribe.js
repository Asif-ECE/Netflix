import React from "react";
import Header from "../../Header/header";
import SubscribeFrom from "../../Forms/SubscribeForm";
import { Wrapper, Content } from "./subscribe.styles";

const Subscribe = () => (
    <Wrapper>
        <Header />
        <Content>
            <div>
                <div className="header-text">Unlimited movies, TV shows, and more.</div>
                <div className="semi-header-text">Watch anywhere. Cancel anytime.</div>
                <SubscribeFrom />
            </div>
        </Content>
    </Wrapper>
)

export default Subscribe;