import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {NavIcon} from './style';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgba(110, 110, 110, 1)",
        flexGrow: 1,
    },
    menuButton: {
        color: "black",
        marginRight: theme.spacing(2),
    },
    title: {
        color: "black",
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();
        return (
            <div className={classes.root}>
            <AppBar style={{backgroundColor: "rgba(110, 110, 110, 1)"}} position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" href="https://www.gabrielhicks.dev/" aria-label="Gabriel Hicks Icon">
                    <NavIcon width="40px" alt="Gabriel Hicks logo" src="https://i.ibb.co/4FcHSGV/gabriel-logo.webp"/>
                </IconButton>
                <Typography variant="h5" style={{fontWeight: "300"}} className={classes.title}>
                    Gabriel Hicks
                </Typography>
                <Button color="black" target="_blank" href="https://www.linkedin.com/in/gabrieljhicks/">LinkedIn</Button><Button target="_blank" href="https://www.github.com/gabrielhicks/" color="black">Github</Button><Button target="_blank" href="https://gabrielhicks.medium.com/" color="black">Blog</Button>
                </Toolbar>
            </AppBar>
            </div>
        )
};