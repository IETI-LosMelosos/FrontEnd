import {createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import '../css/App.css';
import {GridAbout} from '../components/GridAbout'
import {NavbarAboutUs} from '../components/NavbarAboutUs';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';


});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

export function AboutUs() {
  const classes = styles(); 
  return (
    <div className="aboutUs">
    </div>
  );
}


