import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    box:{
        [theme.breakpoints.down('sm')]: {
            flexDirection:"column",
            overflow:"scroll !important"
          }
    }
}))

export default useStyles