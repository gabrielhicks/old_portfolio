import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import {ButtonStyled, BottomCardActions} from './style'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        minWidth: "30vw",
        minHeight: "50vh",
        margin: "auto"
    },
    media: {
        height: 240,
    },
});
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
            <BottomCardActions>
                {props.project.video_url.length !== 0 ? <ButtonStyled target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.video_url}><YouTubeIcon/>&nbsp;YouTube</ButtonStyled> : null}
                {props.project.url.length !== 0 ? <ButtonStyled target="_blank" rel="noreferrer" alt="Hosted website" href={props.project.url}><WebIcon/>&nbsp;Demo</ButtonStyled> : null }
                {props.project.front.length !== 0 ? <ButtonStyled target="_blank" rel="noreferrer" alt="Frontend Repo" href={props.project.front}><GitHubIcon/>&nbsp;Front</ButtonStyled> : null }
                {props.project.back.length !== 0 ? <ButtonStyled target="_blank" rel="noreferrer" alt="Backend Repo" href={props.project.back}><GitHubIcon/>&nbsp;Back</ButtonStyled> : null }
                {/* <ButtonStyled size="small" color="primary">
                Share
                </ButtonStyled>
                <ButtonStyled size="small" color="primary">
                Learn More
                </ButtonStyled> */}
            </BottomCardActions>
    </Card>
    )
}
