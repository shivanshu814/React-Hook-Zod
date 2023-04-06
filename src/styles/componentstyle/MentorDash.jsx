import { makeStyles } from "@material-ui/styles";
import { alpha } from '@material-ui/core/styles';


const useStyles=makeStyles((theme)=>({
    contain:{
        backgroundColor:"#e6e6e6",
        [theme.breakpoints.down('sm')]: {
            width:"100vw",
            overflow:"scroll",
            height:"100vh"
        },
        overflow:"hidden"
    },
    details:{
        display:"flex",
        flexWrap:"wrap",
        width:"78vw",
        height:"86vh",
        borderRadius: "10px",
        backgroundColor:theme.root.primary.light,
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            overflow:"scroll"
        },
        overflowY:"scroll"
    },
    item:{
        width:"74vw",
        height:"14vh",
        backgroundColor:theme.root.primary.main,
        borderRadius: "10px",
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center",
        margin:"0.5rem 0rem"
    },
    title:{
        marginLeft:"2rem",
        color:theme.root.primary.light,
        fontSize:"1.5rem"
    },
    cost:{
        marginRight:"1rem",
        color:theme.root.primary.light,
        fontSize:"1.5rem"
    },
    icons:{
        display:"flex",
        height:"100%",
        alignItems:"center",
        marginRight:"2rem",
        '& .MuiSvgIcon-root':{
            fontSize:'2.3rem',
            color:theme.root.primary.light,
        },
    },
    textareas:{
        backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '30vw',
      height:"60%",
      display:"flex",
      alignItems:"center",
      [theme.breakpoints.down('sm')]: {
        display:"none"
      },
    },
    inputRoot:{
        width:"84%",
        color:"#FFFFFF !important",
        marginLeft:"16px"
    },
    submitting:{
        cursor:"pointer"
    }
}))

export default useStyles