import React from 'react'
import {ProjectCard} from './style'

export default function Project(props) {
    return (
        <ProjectCard>
            <h2>{props.project.name}</h2><br></br>
            <p>{props.project.description}</p><br></br>
            <p>Hosted: <a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.url}>Here</a></p><br></br>
            <p>Frontend Repo: <a target="_blank" rel="noreferrer" alt="Frontend Repo" href={props.project.front}>{props.project.front}</a></p><br></br>
            <p>Backend Repo: <a target="_blank" rel="noreferrer" alt="Backend Repo" href={props.project.back}>{props.project.back}</a></p><br></br>
            <p>Technologies used: {props.project.tech}</p>
        </ProjectCard>
    )
}
