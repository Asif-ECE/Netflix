import styled from "styled-components";
import startpage_background_image from "../../../images/startpage_background_image.jpg";

export const Wrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${startpage_background_image});
    background-size: cover;
    margin: 0 auto;
    color: white;
    width: 94.9em;
    height: 45em;
`;

export const Content = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    width: 30em;
    height: 35em;
`;

export const Form = styled.form`
    & .title{
        font-size: 30px;
        margin-top: 70px;
        margin-bottom: 30px;
    }

    & input {
        padding: 10px 0;
        margin-bottom: 20px;
        width: 350px;
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
        border: none;
        height: 50px;
        border-radius: 5px;
        text-align: left;
        padding-left: 10px;
        background-color: #4b4b58;
    }

    & .inputEmailPhone {
        position: relative;
    }

    & .inputPassword {
        position: relative;
    }

    & label {
        position: absolute;
        left: 10px;
        top: 18px;
        transition: 500ms;
        pointer-events: none;
        color: gray;
        font-size: small;
    }

    & button {
        width: 350px;
        height: 50px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        background-color: red;
        color: white;
        margin-top: 20px;
    }

    & input:valid ~ label {
        top: 5px;
        font-size: 10px;
    }

    & input:focus ~ label {
        top: 5px;
        font-size: 10px;
    }

    & .check {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .subscribe {
        margin: 10px 0;
    }

    & .subfooter {
        width: 350px;
        margin: 10px 0;
    }
`;

export const Link = styled.a`
    color: #474d42;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;