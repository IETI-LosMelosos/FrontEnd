import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "45px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#7FFF00",
        color: "#696969",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#006400"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  export function CustomBtnAboutUs(props) {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}