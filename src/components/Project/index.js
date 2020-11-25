import React from 'react'
import {ProjectCard} from './style'

export default function Project(props) {
    return (
        <ProjectCard>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            {props.project.video_url.length !== 0 ? <p>Live Video <a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.video_url}>YouTube</a></p> : null}
            {props.project.url.length !== 0 ? <p>Live Website: <a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.url}>Here</a></p> : null }
            {props.project.front.length !== 0 ? <p>Frontend Repo: <a target="_blank" rel="noreferrer" alt="Frontend Repo" href={props.project.front}>GitHub</a></p> : null }
            {props.project.back.length !== 0 ? <p>Backend Repo: <a target="_blank" rel="noreferrer" alt="Backend Repo" href={props.project.back}>GitHub</a></p> : null }
            <p>Technologies used: {props.project.tech}</p>
        </ProjectCard>
    )
}
