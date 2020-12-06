import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ContactWrapper = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 90vh;
    display: grid;
    max-height: 1300px;
    min-height: 600px;
    justify-content: center;
`
export const Title = styled.h1`
    margin-left: 16px;
    grid-row: 1;
    grid-column: 1;
    color: white;
    font-size: 7vw;
`

export const StyledGrid = styled.div`
    ${'' /* position: absolute; */}
    left: 66px;
    display: grid;
    width: 40vw;
    margin-right: 10vw;
    margin-left: 5vw;
    grid-row: 1;
    grid-column: 1;
    @media only screen and (max-width: 900px) {
        width: 80vw;
        grid-column: 1;
        grid-row: 1;
        height: 60vh;
        margin-right: 0vw;
    }
`

export const StyledForm = styled.form`
    grid-row: 2;
    grid-column: 1;
    display: inline-grid;
`

export const StyledSubject = styled.input`
    grid-row: 1;
    grid-column: 1;
    width: 30vw;
    line-height: 1.5;
    padding: 15px 10px;
    border: none;
    outline: none;
    color: black;
    margin: auto;
    border-radius: 4px;
    @media only screen and (max-width: 900px) {
        width: 55vw;
    }
`

export const StyledName = styled.input`    
    grid-row: 2;
    grid-column: 1;
    width: 30vw;
    line-height: 1.5;
    padding: 15px 10px;
    border: none;
    outline: none;
    color: black;
    margin: auto;
    margin-top: 5px;
    border-radius: 4px;
    @media only screen and (max-width: 900px) {
        width: 55vw;
    }
`

export const StyledEmail = styled.input`
    grid-row: 3;
    grid-column: 1;
    width: 30vw;
    line-height: 1.5;
    padding: 15px 10px;
    border: none;
    outline: none;
    color: black;
    margin: auto;
    margin-top: 5px;
    border-radius: 4px;
    @media only screen and (max-width: 900px) {
        width: 55vw;
    }
`

export const StyledMessage = styled.input`
    grid-row: 4;
    grid-column: 1;
    width: 30vw;
    height: 20vh;
    line-height: 1.5;
    padding: 15px 10px;
    border: none;
    outline: none;
    color: black;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    @media only screen and (max-width: 900px) {
        width: 55vw;
    }
`

export const StyledButton = styled(Button)`
    grid-row: 5;
    grid-column: 1;
    width: 30vw;
    padding: 15px;
    border: none;
    outline: none;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 5px;
    @media only screen and (max-width: 900px) {
        width: 55vw;
    }
`

export const SocialIcons = styled.div`
    grid-row: 1;
    grid-column: 2;
    justify-content: center;
    align-content: center;
    margin: auto;
    color: white;
    display: grid;
    width: 40vw;
    height: 60vh;
    @media only screen and (max-width: 900px) {
        bottom: 0;
        grid-row: 2;
        grid-column: 1;
        width: 80vw;
        margin-top: 5vh;
        height: 15vh;
        display: inline;
        text-align: center;
    }
`

export const MediaGrid = styled.div`
    display: grid;
    margin-top: 15vh;
    margin-bottom: 15vh;
    @media only screen and (max-width: 900px) {
        margin-top: 10vh;
    }
`