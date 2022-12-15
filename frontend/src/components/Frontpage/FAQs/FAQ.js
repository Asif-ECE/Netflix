import React from "react";
import Collapsible from "../../Collapsible/Collapsible";


import { Wrapper, Content } from "./FAQ.styles";
import { FAQA } from "./Questions";

const FAQComponents = [];
for (let i = 1; i < 7; i++) {
    FAQComponents.push(<Collapsible label={FAQA[i].Question} content={FAQA[i].Answer} />)
}

const FAQ = () => (
    <Wrapper>
        <Content>
            <div className="FAQHeading">Frequently Asked Questions</div>
            {FAQComponents}
        </Content>
    </Wrapper>
);

export default FAQ;