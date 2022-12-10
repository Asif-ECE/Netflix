import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 170px;
    height: 50px;

    @media screen and (max-width: 500px) {
        width: 100px;
        height: 30px;
    }
`;