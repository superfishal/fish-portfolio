import styled from 'styled-components';

export const ProjectContainer = styled.div`
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`
export const ProjectCard = styled.div`
    border: 2px solid #ddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column
`

export const CoverPhoto = styled.div`
    flex-grow: 1;

    img {
        max-width: 400px;
    }
`