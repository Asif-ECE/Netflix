import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & p {
        font-size: 20px;
    }
`;

export const Form = styled.form`
    & input {
        padding: 10px 0;
        margin-bottom: 30px;
        width: 500px;
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
        border: none;
        height: 50px;
        text-align: left;
        padding-left: 10px;
    }

    & .inputEmail {
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
        width: 200px;
        height: 50px;
        border: none;
        cursor: pointer;
        background-color: red;
        color: white;
    }

    & input:valid ~ label {
        top: 5px;
        font-size: 10px;
    }

    & input:focus ~ label {
        top: 5px;
        font-size: 10px;
    }
`;