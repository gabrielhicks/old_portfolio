import React from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Project from '../Project/index'
import { makeStyles } from "@material-ui/core/styles";
import { ProjectContainer } from './style';

const useStyles = makeStyles({
    root: {
        marginTop: "-66px",
        paddingLeft: 30,
        paddingRight: 16,
        paddingBottom: "2vh",
    '@media only screen and (max-width: 900px)': {
        paddingRight: 16,
        // paddingRight: 10
    }
    }
});

function Projects(props) {
    const classes = useStyles();
    return (
        <ProjectContainer>
        <Grid container spacing={4} className={classes.root}>
            {props.projects.map(project => <Grid item xs={12} sm={6} md={4}><Project project={project}/></Grid>)}
        </Grid>
        </ProjectContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps)(Projects)