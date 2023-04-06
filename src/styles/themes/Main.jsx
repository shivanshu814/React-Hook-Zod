import { createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const maintheme= createTheme({
    root:{
        primary:{
            main:"#6E3CBC",
            light:"#FFFFFF"
        },
        secondary:{
            main:green[500]
        }
    },
    spacing: 4,
    
})

export default maintheme