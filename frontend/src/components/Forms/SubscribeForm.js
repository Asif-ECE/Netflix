import React from "react";
import { Wrapper, Content, Form } from "./SubscribeFrom.styles";

function SubscribeFrom() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const submitButtonLabel = "Get Started >";

    return (
        <Wrapper>
            <Content>
                <div>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <Form>
                        <form onSubmit={handleSubmit}>
                            <div className="inputEmail">
                                <input type="text" name="" required />
                                <label>Email address</label>
                                <button type="submit">{submitButtonLabel}</button>
                            </div>
                        </form>
                    </Form>
                </div>
            </Content>
        </Wrapper>
    );
};

export default SubscribeFrom;