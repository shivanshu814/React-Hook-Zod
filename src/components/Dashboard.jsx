import React,{ useState } from "react";
import { Box } from "@material-ui/core";
import styling from "../styles/componentstyle/Dashboard";
import Skeleton from '@material-ui/lab/Skeleton';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';

const Dashboard = () => {
  //AppBar states and functions
  const classes = styling();

  //states
  const [users, setusers] = useState(false)
  const [mentors, setmentors] = useState(false)
  const [universities, setuniversities] = useState(false)
  const [payment, setpayment] = useState(false)

  setTimeout(() => {
    setusers(false)
  setmentors(false)
  setuniversities(false)
  setpayment(false)
    
  }, 2000);

  return (
    <>
      <Box 
      className={classes.contain}
      width="80vw"
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      <div className={classes.details}>
          {(users)?<Box className={classes.box} style={{backgroundColor:"#DC143C"}}><GroupTwoToneIcon/></Box>:<Box pt={0.5}><Skeleton style={{width:"32vw",height:"32vh"}}/></Box>}
          {(mentors)?<Box className={classes.box} style={{backgroundColor:"#DC143C"}}><GroupTwoToneIcon/></Box>:<Box pt={0.5}><Skeleton style={{width:"32vw",height:"32vh"}}/></Box>}
          {(universities)?<Box className={classes.box} style={{backgroundColor:"#DC143C"}}><GroupTwoToneIcon/></Box>:<Box pt={0.5}><Skeleton  style={{width:"32vw",height:"32vh"}}/></Box>}
          {(payment)?<Box className={classes.box} style={{backgroundColor:"#DC143C"}}><GroupTwoToneIcon/></Box>:<Box pt={0.5}><Skeleton style={{width:"32vw",height:"32vh"}}/></Box>}
      </div>
      </Box>
    </>
  );
};

export default Dashboard;
