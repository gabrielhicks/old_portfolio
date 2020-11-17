import styled from 'styled-components'

export const ProjectCard = styled.div`
    display: flex;
    height: 33vh;
    width: 85vw;
    transition: 0.3s;
    margin: auto;
    a {
        cursor: pointer;
    }
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 1vh;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`