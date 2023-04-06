import { Box } from '@material-ui/core'
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navbar from '../components/Navbar'
import StudentDash from '../components/ApplicationDash'
import styling from '../styles/pagestyles/Application'
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../utils/init-firebase";
import { useNavigate } from 'react-router-dom'


const Application = () => {
    const classes=styling();
    const history = useNavigate();

    onAuthStateChanged(authentication,(user) => {
        if (!user) {
          history("/login");
          return null;
        } else {
          localStorage.setItem("token",user.accessToken);
          // console.log(user.accessToken);
      }
      })
    
    return (
        <>
            <Navbar/>
            <Box
                display="flex"
                flexDirection="row"
                width="100vw"
                height="90vh"
                className={classes.box}
                style={{overflow:"hidden"}}
            >
            <LeftNav/>
            <StudentDash/>
            </Box>
        </>
    )
}

export default Application
