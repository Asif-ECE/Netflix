import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 4em;
`;

export const Content = styled.div`
    color: #474d42;
    display: flex;
    flex-direction: column;

    & .title {
        font-size: 1.2em;
        margin: 0.5em 0;
    }

    & .footer {
        margin: 1em 0;
    }
`;

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const List = styled.div`
    display: flex;
    margin: 1.5em 0;
    gap: 8em;
`;

export const Link = styled.a`
    color: #474d42;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;