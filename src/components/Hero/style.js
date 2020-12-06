import styled from 'styled-components'

export const HeroContainer = styled.div`
    background-color: black;
    background-image: url("https://i.ibb.co/7znprpx/ezgif-com-gif-maker-1.webp");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    position: relative;
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