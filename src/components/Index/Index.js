import React from 'react'
import Projects from '../Projects/index'
import {IndexWrapper} from './style'

export default function Index() {
    return (
        <IndexWrapper>
            <h1>Gabriel Hicks</h1>
            <h3>LinkedIn: <a alt="LinkedIn Profile" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabrieljhicks/">Profile</a>&nbsp;|&nbsp;Github: <a alt="Github Repo" target="_blank" rel="noreferrer" href="https://www.github.com/gabrielhicks/">Repositories</a>&nbsp;|&nbsp;Technical Blog: <a alt="Medium Blog" target="_blank" rel="noreferrer" href="https://gabrielhicks.medium.com/">Medium</a></h3>
            <br></br>
            <Projects />
        </IndexWrapper>
    )
}
