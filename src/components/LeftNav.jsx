import React from "react";
import { Box, Typography } from "@material-ui/core";
import styling from "../styles/componentstyle/LeftNav";
import { Home } from "@material-ui/icons";
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import { useNavigate } from "react-router-dom";
import EmojiEmotionsSharpIcon from '@material-ui/icons/EmojiEmotionsSharp';
import FindInPageSharpIcon from '@material-ui/icons/FindInPageSharp';
import AccessTimeSharpIcon from '@material-ui/icons/AccessTimeSharp';
import ApartmentSharpIcon from '@material-ui/icons/ApartmentSharp';

const LeftNav = () => {
  //AppBar states and functions
  const history = useNavigate();
  const classes = styling();


  const sendhome = () =>{
    history('/');
  }
  const sendpay = () =>{
    history('/payment');
  }
  const sendmentor = () =>{
    history('/mentor');
  }
  const sendstudent = () =>{
    history('/student');
  }
  const sendapplication = () =>{
    history('/application');
  }
  const sendappointment = () =>{
    history('/appointment');
  }
  const senduniversity = () =>{
    history('/university');
  }
  return (
    <>
      <Box 
      className={classes.leftbar}
      width="20vw"
      height="90vh"
      >
        <br />
      <div className={classes.navigation} onClick={sendhome}>
        <Home className={classes.icon}/>
        <Typography className={classes.navtext} >Homepage</Typography>
      </div>
      <div className={classes.navigation} onClick={sendpay}>
        <MonetizationOnSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Payments</Typography>
      </div>
      <div className={classes.navigation} onClick={sendmentor}>
        <AccountBoxSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Mentors</Typography>
      </div>
      <div className={classes.navigation} onClick={sendstudent}>
        <EmojiEmotionsSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Student</Typography>
      </div>
      <div className={classes.navigation} onClick={sendapplication}>
        <FindInPageSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Applications</Typography>
      </div>
      <div className={classes.navigation} onClick={sendappointment}>
        <AccessTimeSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Appointments</Typography>
      </div>
      <div className={classes.navigation} onClick={senduniversity}>
        <ApartmentSharpIcon className={classes.icon}/>
        <Typography className={classes.navtext}>Universities</Typography>
      </div>
      </Box>
    </>
  );
};

export default LeftNav;
