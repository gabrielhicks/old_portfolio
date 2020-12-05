import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 345,
        minHeight: 424,
        margin: "auto"
    },
    media: {
        height: 240,
    },
});
        // <ProjectCard>
        //     <h2>{props.project.name}</h2>
        //     <ProjectImage>
        //         <img src={props.project.image} />
        //     </ProjectImage>
        //     <ProjectDetails>
        //         <p>{props.project.description}</p>
        //         {props.project.video_url.length !== 0 ? <><a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.video_url}>YouTube</a></> : null}
        //         {props.project.url.length !== 0 ? <><a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.url}>Live Demo</a></> : null }
        //         {props.project.front.length !== 0 ? <><a target="_blank" rel="noreferrer" alt="Frontend Repo" href={props.project.front}>Frontend</a></> : null }
        //         {props.project.back.length !== 0 ? <><a target="_blank" rel="noreferrer" alt="Backend Repo" href={props.project.back}>Backend</a></> : null }
        //         {/* <>Technologies used: {props.project.tech}</> */}
        //     </ProjectDetails>
        // </ProjectCard>

export default function Project(props) {
    const classes = useStyles();
    return (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={`${props.project.image}`}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.project.description}
                </Typography>
            </CardContent>
        </CardActionArea>
            <CardActions>
                {props.project.video_url.length !== 0 ? <Button><a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.video_url}>YouTube</a></Button> : null}
                {props.project.url.length !== 0 ? <Button><a target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.url}>Demo</a></Button> : null }
                {props.project.front.length !== 0 ? <Button><a target="_blank" rel="noreferrer" alt="Frontend Repo" href={props.project.front}>Frontend</a></Button> : null }
                {props.project.back.length !== 0 ? <Button><a target="_blank" rel="noreferrer" alt="Backend Repo" href={props.project.back}>Backend</a></Button> : null }
                {/* <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button> */}
            </CardActions>
    </Card>
    )
}
