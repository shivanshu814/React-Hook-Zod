import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import styling from '../styles/componentstyle/MentorDash'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import InputBase from "@material-ui/core/InputBase";
import Spinner from '../assets/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';
import { signOut } from "firebase/auth";
import { authentication } from "../utils/init-firebase";

const MentorDash = () => {
    const classes=styling();

    const [loading, setloading] = useState(true)
    const [opentext, setopentext] = useState(false);
    const [reason, setreason] = useState("");
   
    const url=cred.api_url;

    const usertoken=localStorage.getItem("token");

    let [data, setdata] = useState([])

    let addcount=10;

    useEffect(()=>{
        axios.get(`${url}/mentor/search?count=${addcount}`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            }})
        .then(response => {
            setdata(response.data.mentors);
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

    const openfield= () =>{
        (opentext)?
        setopentext(false):setopentext(true);
    }

    const penaltysubmit = (id) =>{
        console.log(id);
        axios.post(`${url}/penalty`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            }})
        .then(response => {
            
        })
        .catch(function(error)
        {
            if(error.response.status===401)
            {
                signOut(authentication).then()
            }
        })
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
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <IconButton><MoneyOffIcon onClick={openfield}/></IconButton>
                            {(opentext)?
                            <div className={classes.textareas}>
                                <InputBase
                                placeholder="Reason"
                                classes={{
                                    root: classes.inputRoot,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(event)=>{setreason(event.target.value)}}
                                value={reason}
                                />
                                <div className={classes.submitting} >
                                    <CheckCircleRoundedIcon onClick={penaltysubmit.bind(this,ele.id)}/>
                                </div>
                        </div>
                        :null}
                            <IconButton><DeleteForeverIcon/></IconButton>
                            </div>
                        </div>)
                    })
                }
                </div>
                    

            </Box>
        </>
    )
}

export default MentorDash
