import { makeStyles } from "@material-ui/styles";
import { alpha } from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
  root:{
    primary:{
        backgroundColor:theme.root.primary.main
    }
    },
    bar:{
      backgroundColor:'#6E3CBC !important',
      justifyContent:'center',
      height:"10vh",
      display:"flex",
      flexDirection:"row !important",
      alignItems:"center"
    },
    title:
    {
      color:theme.root.primary.light,
      margin:"0px 187px 0px 0px !important",
      [theme.breakpoints.down('sm')]: {
        margin:"0px 10px 0px 0px !important"
      },
    },
    search:
    {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '70vw',
      height:"60%",
      display:"flex",
      alignItems:"center",
      [theme.breakpoints.down('sm')]: {
        display:"none"
      },
    },
    searchIcon:{
      marginLeft:"22px"
    },
    inputRoot:{
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width:"100%",
      color:"#FFFFFF !important"
    },
    account:{
      width:"7vw",
      display:"flex",
      justifyContent:"flex-end !important",
      [theme.breakpoints.down('sm')]: {
        width:"48vw",
      },
    },
    menuicon:{
      display:"none !important",
      [theme.breakpoints.down('sm')]: {
        display:"flex !important"
      },
    }
}))

export default useStyles