import React, { useState, useRef } from "react";
import {Wrapper, Button, Content} from "./Collapsible.styles";

const Collapsible = ({ label, content }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef("form");

    //if (contentRef.current) console.log(contentRef.current.scrollHeight);
    //console.log(content)

    const toggle = () => {
        setOpen(!open)
    };

    return (
        <Wrapper>
            <Button onClick={toggle}> <div>{ label }</div><div>{open ? "X" : "+"}</div> </Button>
            <Content ref={contentRef} isOpen={open} height={contentRef.current.scrollHeight}>
                <div className="content"> 
                    {content.map((object, i) => <p> {object} </p>)}
                </div>
            </Content>
        </Wrapper>
    );
};

export default Collapsible;