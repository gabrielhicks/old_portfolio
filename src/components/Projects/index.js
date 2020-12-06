import React from 'react'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Project from '../Project/index'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginTop: "1vh",
        paddingLeft: 30,
        // paddingRight: "2vw"
    }
});

function Projects(props) {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.root}>
            {props.projects.map(project => <Grid item xs={12} sm={6} md={4}><Project project={project}/></Grid>)}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps)(Projects)