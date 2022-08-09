import styled from 'styled-components';

export const ProjectContainer = styled.div`
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    gap: 30px;
`
export const ProjectCard = styled.div`
    border: 2px solid #000c14;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`
export const ProjectTitle = styled.h2`
text-align: center;
font-family: "Mochiy Pop One";

`
export const Links = styled.div`
display: flex;
justify-content: space-around;
`
export const ProjectLink = styled.a`
font-family: "Mochiy Pop P One";
text-decoration: none;
color: #000c14;
`
export const CoverPhoto = styled.div`
    flex-grow: 1;

    img {
        max-width: 400px;
    }
`