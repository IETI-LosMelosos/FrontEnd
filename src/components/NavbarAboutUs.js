import React from 'react'
import {CustomBtnAboutUs} from './CustomBtnAboutUs'
import tractor from '../images/tractor.svg'
import twomangoes from '../images/twomangoes.svg';

import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff"
    },
    tractor: {
        width: "15%"
    },
    twomangoes:{
        width: "100%", 
        display: "none"
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        }
    }
})

export function NavbarAboutUs() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={tractor} className={classes.tractor} alt="tractor"/> 
                <img src={twomangoes} className={classes.twomangoes}  alt="mango"/> 
                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtnAboutUs txt="Home"/>
            </Toolbar>
    )
}
