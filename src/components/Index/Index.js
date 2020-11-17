import React from 'react'
import Projects from '../Projects/index'
import {IndexWrapper} from './style'

export default function Index() {
    return (
        <IndexWrapper>
            <h1>Gabriel Hicks</h1>
            <li>This website is currently under construction, however you can find me at the following locations</li>
            <li>LinkedIn: <a alt="LinkedIn Profile" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabrieljhicks/">Profile</a></li>
            <li>Github: <a alt="Github Repo" target="_blank" rel="noreferrer" href="https://www.github.com/gabrielhicks/">Repositories</a></li>
            <li>Technical Blog: <a alt="Medium Blog" target="_blank" rel="noreferrer" href="https://gabrielhicks.medium.com/">Medium</a></li>
            <li>Or checkout my live projects below!</li>
            <Projects />
        </IndexWrapper>
    )
}
