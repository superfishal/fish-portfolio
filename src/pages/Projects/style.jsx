import styled from 'styled-components';

export const ProjectContainer = styled.div`
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    margin: 40px 10vh;
    gap: 30px;
`
export const ProjectCard = styled.div`
    border: 2px solid #000c14;
    max-width: 33%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: mistyrose;
    box-shadow: 1px 1px 5px salmon;
`
export const ProjectTitle = styled.h2`
font-size: 2vw;
text-align: center;
font-family: "Mochiy Pop One";

`
export const Links = styled.div`
max-width: auto;
display: flex;
justify-content: space-around;
`
export const ProjectLink = styled.a`
font-size: 1.5vw;
font-family: "Mochiy Pop P One";
text-decoration: none;
color: #000c14;
`
export const CoverPhoto = styled.div`
     flex-grow: 1;
    img {
        max-width: 100%;
        height: 100%;
        padding: 10px 10px;
        box-shadow: 0px 1px 5px #000c14;
    }
`