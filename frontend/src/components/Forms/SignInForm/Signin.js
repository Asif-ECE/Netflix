import React from "react";
import Header from "../../Header/header";
import { Wrapper, Content, Form, Link } from "./Signin.styles";

import Checkbox from "../../Checkbox/Checkbox";

const SignIn = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return <Wrapper>
        <Header signInPage={true}/>
        <Content>
            <Form>
                <div className="title">Sign In</div>
                <form onSubmit={handleSubmit}>
                    <div className="inputEmailPhone">
                        <input type="text" name="" required />
                        <label>Email or phone number</label>
                    </div>
                    <div className="inputPassword">
                        <input type="text" name="" required />
                        <label>Password</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="check">
                        <Checkbox label="Remember me"/>
                        <Link href="">Need help?</Link>
                    </div>
                </form>
                <div className="subscribe">New to Netflix? <Link href="">Sign up now.</Link></div>
                <div className="subfooter">This page is protected by Google reCAPTCHA to ensure you're not a robot. <Link href="">Learn more.</Link></div>
            </Form>
        </Content>
    </Wrapper>
}

export default SignIn