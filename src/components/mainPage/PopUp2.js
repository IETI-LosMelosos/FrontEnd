import React from "react";
import { Dialog, DialogTitle, DialogContent} from  '@material-ui/core';

export default function PopUp2(props){
    const {children, openPopUp2} = props;

    return(
        <Dialog open={openPopUp2} maxWidth="md">
            <DialogTitle>
                <div></div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}