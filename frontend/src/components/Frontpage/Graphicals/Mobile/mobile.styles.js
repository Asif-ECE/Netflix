import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    height: 350px;
    width: 500px;
    margin-bottom: 40px;
`;

export const Content = styled.div`
    display: flex;

    & .downloader {
        position: absolute;
        background-color: black;
        margin-top: 230px;
        margin-left: 75px;
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 70px 220px auto;
        align-items: center;
        border: solid #B2BEB5;
        height: 100px;
        width: 350px;
        border-radius: 10px;
    }

    & .text-div {
        margin: 0 15px;
    }

    & .showName {
        color: white;
    }

    & .downloading {
        color: blue;
    }
`;

export const Phone = styled.img`
    height: 350px;
    width: 500px;
`;

export const BoxImage = styled.img`
    height: 80px;
    width: 60px;
    margin: 0 10px;
`;

export const DownloadIcon = styled.img`
    height: 50px;
    width: 50px;
`;