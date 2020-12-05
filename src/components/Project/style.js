import styled from 'styled-components'

export const ProjectCard = styled.div`
    height: 40vh;
    width: 40vw;
    position: relative;
    transition: 0.3s;
    margin: auto;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 1vh;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    a {
        cursor: pointer;
    }
    p {
        margin: 8px;
    }
    @media (max-width: 800px) {
        margin-bottom: 3vh;
        height: 50vh;
        font-size: 0.9rem;
    }
    overflow: hidden;

`

export const ProjectImage = styled.div`
img {
    width: 30vw
}
`

export const ProjectDetails = styled.div`
    margin: auto;   
    ${'' /* position: absolute; */}
    text-align: center;
    bottom: 0;
`