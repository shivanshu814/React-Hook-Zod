import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    box:{
        backgroundColor:theme.root.primary.light,
        display:"flex",
        flexDirection:"column",
        width:"70vw",
        justifyContent:"center",
        // overflow:"scroll",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            width:"100vw"
          },
    },
    innerbox:{
        backgroundColor:"#EFEDFF",
        display:"flex",
        flexDirection:"column",
        overflowY:"scroll",
        width:"55vw",
        padding:"30px 30px",
        height:"200vh",
        borderRadius:"7px"
    },
    title:{
        
    },
    sminput:{
        border: "1px solid #6E3CBC",
        height: "30px",
        width: "90%",
        margin: "9px 0px",
        borderRadius: "4px",
        padding:"6px 3px"
    },
    biggertext:{
        width:"45vw",
        height:"20vh",
        borderRadius:"7px",
        padding:"30px 30px",
        border: "1px solid #6E3CBC",
        margin: "9px 0px",
    },
    button:{
        width:"14vw",
        height:"8vh",
        padding:"3px 5px",
        border:"none",
        boxShadow:"none",
        backgroundColor:"#6E3CBC",
        color:"#FFFFFF",
        borderRadius:"4px",
        cursor:"pointer",
        '&:hover':{
            backgroundColor:"#6E3CBC"
        },
        [theme.breakpoints.down('sm')]: {
            width:"40vw",
            height:"8vh",
          },
    },
    heading:{
        [theme.breakpoints.down('sm')]: {
            fontSize:"2rem"
          },
    },
    subheading:{
        [theme.breakpoints.down('sm')]: {
            fontSize:"1rem"
          },
    }
}))

export default useStyles