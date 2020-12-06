import styled from 'styled-components'

export const HeroContainer = styled.div`
    position: relative;
    background-color: black;
    height: 70vh;
    display: flex;
    max-height: 1300px;
    min-height: 600px;
    align-items: center;
`

export const Title = styled.h1`
    position: absolute;
    bottom: 66px;
    left: 66px;
    color: white;
    font-size: 7vw;
    @media only screen and (max-width: 900px) {
        left: 33px;
    }
`