import React from "react";
import Subscribe from "./Frontpage/Subscribe/subscribe";
import OurStory from "./Frontpage/Ourstory/ourstory";
import TV from "./Frontpage/Graphicals/TV/TV";
import Mobile from "./Frontpage/Graphicals/Mobile/mobile";
import KidsProfile from "./Frontpage/Graphicals/KidsProfile/KidsProfile";
import Break from "./BreakPoints/BreakPointFrontPage";
import FAQ from "./Frontpage/FAQs/FAQ";

const information = [
    ["Enjoy on your TV.", "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", TV()],
    ["Download your shows to watch offline.", "Save your favorites easily and always have something to watch.", Mobile()],
    ["Watch everywhere.", "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", <div></div>],
    ["Create profiles for kids.", "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.", KidsProfile()]
];

const Stories = [];
information.forEach((info, index) => {
    Stories.push(<Break key={index+100}/>)
    Stories.push(<OurStory key={index} whatIndex={index} title={info[0]} description={info[1]} graphical={info[2]}/>)
})

export const LandingPage = () => (
    <>
        <Subscribe />
        {Stories}
    </>
)

export default LandingPage;