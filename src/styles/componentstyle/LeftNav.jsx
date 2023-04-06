import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    leftbar:{
        backgroundColor:theme.root.primary.main,
        [theme.breakpoints.down('sm')]: {
            display:"none"
        },
    },
    navigation:{
        width:"100%",
        height:"10vh",
        display:"flex",
        // justifyContent:"center",
        alignItems:"center",
        '& .MuiSvgIcon-root':{
            fontSize:'2.3rem'
        },
        color:"#FFFFFF",
        cursor:"pointer",
        '&:hover': {
            backgroundColor: "#bb9ee6",
          }
    },
    icon:{
        margin:"0px 20px"
    },
}))

export default useStyles