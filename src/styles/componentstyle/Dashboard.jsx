import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    contain:{
        backgroundColor:"#e6e6e6",
        [theme.breakpoints.down('sm')]: {
            width:"100vw",
            overflow:"scroll",
            height:"100vh"
        },
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
      },
    box:{
        display:"flex",
        flexDirection:"column",
        borderRadius: "10px",
        width:"32vw",
        height:"32vh",
        justifyContent:"center",
        alignItems:"center",
        '& .MuiSvgIcon-root':{
            fontSize:"6rem",
            color:"#FFFFFF"
        }
    }
}))

export default useStyles