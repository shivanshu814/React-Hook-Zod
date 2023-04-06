import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import styling from '../styles/componentstyle/ApplicationDash'
import ApplicantDash from './ApplicantDash';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Spinner from '../assets/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';

const ApplicationDash = () => {
    const classes=styling();
    const url=cred.api_url;
    const usertoken=localStorage.getItem("token");

    //states
    const [loading, setloading] = useState(true)
    const [detail, setdetail] = useState({})

    const [data, setdata] = useState([]);

    useEffect(() => {
      axios.get(`${url}/verify`,{
        headers: {
          'Authorization': `Bearer ${usertoken}`,
          'Content-Type': 'application/json'
        }
        
    })
    .then(response => {
            setdata(response.data.mentors);
            setloading(false)
            console.log(response)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [applicationopen, setapplicationopen] = useState(true)
    
    const showapplication = (details) =>{
        setdetail(details);
        (applicationopen)?setapplicationopen(false):setapplicationopen(true)
    }


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
                {
                    (loading)?
                    <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    (applicationopen)?
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <IconButton><FindInPageIcon onClick={showapplication.bind(this, ele)}/></IconButton>
                            </div>
                            </div>)
                    })
                    :
                    <div className={classes.detail}>
                        <ApplicantDash details={{setapplicationopen,detail:detail}}/>
                    </div>
                }
                </div>
                    

            </Box>
        </>
    )
}

export default ApplicationDash
