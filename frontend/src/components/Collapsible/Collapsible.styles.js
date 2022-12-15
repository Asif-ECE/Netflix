import styled from "styled-components";

export const Wrapper = styled.div`
    color: white;
    width: 60em;
    margin: 2px 0px;
`;

export const Button = styled.button`
    background-color: #474747;
    width: 100%;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
`;

export const Content = styled.div`
    border-top: 1px solid black;
    overflow: hidden;
    margin-bottom: 2px;
    padding: 0px 32px;
    background-color: #474747;
    max-height: ${props => (props.isOpen ? `${props.height}`+"px" : "0")};
    transition: max-height ease-out 0.15s;

    & p{
        font-size: 24px;
    }
`;