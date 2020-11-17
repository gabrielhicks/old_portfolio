import React from 'react'
import {connect} from 'react-redux'
import Project from '../Project/index'
import {ProjectContainer} from './style'

function Projects(props) {
    return (
        <ProjectContainer>
            {props.projects.map(project => <Project project={project}/>)}
        </ProjectContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps)(Projects)