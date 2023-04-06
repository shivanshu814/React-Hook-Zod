import { Box, Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import styling from '../styles/componentstyle/StudentDash'
import Spinner from '../assets/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';
import { signOut } from "firebase/auth";
import { authentication } from "../utils/init-firebase";

const StudentDash = () => {
    const classes=styling();

    const [loading, setloading] = useState(true)

    const url=cred.api_url;

    const usertoken=localStorage.getItem("token");

    let [data, setdata] = useState([])

    useEffect(()=>{
        axios.get(`${url}/user`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            }})
        .then(response => {
            setdata(response.data.users);
            setloading(false)
    })
    .catch(function(error)
    {
        if(error.response.status===401)
          {
              signOut(authentication).then()
          }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // async function getUser() {
    //     // console.log(usertoken)
    //     try {
    //       const response = await axios.get(`${url}/user`,{
    //           headers: {
    //             'Authorization': `Bearer ${usertoken}`,
    //             'Content-Type': 'application/json'
    //           }
    //       });
    //       setdata(response.data.users);
    //       setloading(false)
    //     } catch (error) {
    //       if(error.response.status===401)
    //       {
    //           await signOut(authentication)
    //       }
    //     }
    //   }



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
                {(loading)?
                <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.email}</Typography>
                            </div>)
                    })
                }
                </div>
                    

            </Box>
        </>
    )
}

export default StudentDash
