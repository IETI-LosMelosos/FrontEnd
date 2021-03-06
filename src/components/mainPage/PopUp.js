import React from "react";
import { Dialog, DialogTitle, DialogContent} from  '@material-ui/core';

export default function PopUp(props){
    const {children, openPopUp} = props;

    return(
        <Dialog open={openPopUp} maxWidth="md">
            <DialogTitle>
                <div></div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}