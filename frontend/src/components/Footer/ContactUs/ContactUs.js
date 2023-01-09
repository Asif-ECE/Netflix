import React from "react";
import { Wrapper, Content, Link, List, ListContent } from "./ContactUs.styles";

const Contact = () => (
    <Wrapper>
        <Content>
            <div className="title">Questions? Contact us.</div>
            <List>
                <ListContent>
                    <Link href="">FAQ</Link>
                    <Link href="">Investor Relations</Link>
                    <Link href="">Privacy</Link>
                    <Link href="">Speed Test</Link>
                </ListContent>
                <ListContent>
                    <Link href="">Help Center</Link>
                    <Link href="">Jobs</Link>
                    <Link href="">Cookie Preferences</Link>
                    <Link href="">Legal Notices</Link>
                </ListContent>
                <ListContent>
                    <Link href="">Account</Link>
                    <Link href="">Ways to Watch</Link>
                    <Link href="">Corporate Information</Link>
                    <Link href="">Only on Netflix</Link>
                </ListContent>
                <ListContent>
                    <Link href="">Media Center</Link>
                    <Link href="">Terms of Use</Link>
                    <Link href="">Contact Us</Link>
                </ListContent>
            </List>
            <div className="footer">Netflix Bangladesh</div>
        </Content>
    </Wrapper>
)

export default Contact;