import React, {useState} from 'react'
import emailjs from 'emailjs-com';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { 
    ContactWrapper, 
    StyledSubject, 
    StyledName, 
    StyledEmail, 
    StyledMessage, 
    StyledGrid, 
    StyledForm,
    Title,
    StyledButton,
    SocialIcons,
    MediaGrid
} from './style'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Contact() {
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_8mjlc8b', 'template_yq60a1m', e.target, 'user_BG4Okjmvv29LEHsKucVqS')
        .then(result => {
            console.log(result.text)
        }, error => {
            console.log(error.text)
        })
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")
    }
    return (
        <ContactWrapper>
            <MediaGrid>
            <StyledGrid style={{backgroundColor: "rgba(110, 110, 110, 1)", borderRadius: "4px"}}>
            <Title>Contact Me</Title>
            <StyledForm onSubmit={sendEmail}>
                <StyledSubject onChange={handleSubject} name="subject" value={subject} placeholder="Subject" />
                <StyledName onChange={handleName} name="name" value={name} placeholder="Name" />
                <StyledEmail onChange={handleEmail} name="email" value={email} placeholder="Email" />
                <StyledMessage onChange={handleMessage} name="message" value={message} placeholder="Message" />
                <StyledButton color="inherit" type="submit">Send Email</StyledButton>
            </StyledForm>
            </StyledGrid>
            <SocialIcons>
                <Button target="_blank" href="https://www.linkedin.com/in/gabrieljhicks/" color="inherit"><LinkedInIcon style={{fontSize: "10vw", cursor: "pointer"}}></LinkedInIcon></Button>
                <Button  target="_blank" href="https://www.github.com/gabrielhicks/" color="inherit"><GitHubIcon style={{fontSize: "10vw", cursor: "pointer"}}></GitHubIcon></Button>
                <Button target="_blank" href="https://gabrielhicks.medium.com/" color="inherit"><Icon className={"fab fa-medium"} style={{color: "white", fontSize: "10vw"}}/></Button>
            </SocialIcons>
            </MediaGrid>
        </ContactWrapper>
    )
}
