import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 1300px;
`;

export const Content = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${props => props.direction ? "row" : "row-reverse"};

    & .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 600px;
        min-height: 300px;
    }

    & .title {
        margin: 15px 0;
        font-size: 3em;
        font-weight: 700;
    }

    & .description {
        font-size: 1.8em;
    }
`;