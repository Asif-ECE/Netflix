import styled from "styled-components";
import startpage_background_image from "../../../images/startpage_background_image.jpg";

export const Wrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${startpage_background_image});
    background-size: cover;
    margin: 0 auto;
`;

export const Content = styled.div`
    color: white;
    width: 1519px;
    height: 630px;
    margin: 0 auto;
    display: flex;
    text-align: center;
    justify-content: center;

    & .header-text {
        padding-top: 150px;
        width: 700px;
        font-size: 3.5em;
        font-weight: 550;
    }

    & .semi-header-text {
        font-size: 1.8em;
        padding-top: 15px;
    }
`;