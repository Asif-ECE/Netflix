import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`

export const Button = styled.button`
    background: red;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    border: none;
    font-size: 1.1em;
    visibility: ${props => props.status ? "hidden" : "visible"}
`;