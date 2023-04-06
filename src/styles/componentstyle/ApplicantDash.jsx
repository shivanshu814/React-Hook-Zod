import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  contain: {
    backgroundColor: "#bb9ee6",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      overflow: "scroll",
      height: "100vh",
    },
    overflow: "hidden",
  },
  topnav: {
    width:"78vw",
    height:"fit-content",
    position:"fixed",
    top:"85px",
    zIndex:"2",
    backgroundColor:"#ffffff",
    borderRadius:"10px 10px 5px 5px"
  },
  details: {
    display: "flex",
    height: "90vh",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor:"#6e3cbc"
  },
  about: {
    display: "flex",
    flexDirection: "column",
    margin: "30px 0px",
    width: "54vw",
    marginTop:"90px"
  },
  avatar: {
    height: "200px !important",
    width: "200px !important",
    backgroundColor: "#ffffff",
    border: "10px solid #bb9ee6",
    margin: "30px 30px",
    marginTop:"90px"
  },
  general: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    backgroundColor:"#6e3cbc"
  },
  segments: {
    display: "flex",
    backgroundColor: "#ffffff",
    color: "#6e3cbc",
    padding: "15px 15px",
    borderRadius: "10px",
    border: "5px solid #bb9ee6",
    margin: "15px 18px",
  },
  languages: {
    padding: "0.2vw 2.3vw",
    backgroundColor: "#6e3cbc",
    color: "#ffffff",
    borderRadius: "5px",
    margin:"0px 33px"
  },
  icons:{
    color:theme.root.primary.main,
    backgroundColor:"#ffffff"
  },
}));

export default useStyles;
