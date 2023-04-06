import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useEffect,useState } from 'react'
import styling from '../styles/componentstyle/PaymentDash'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Spinner from '../assets/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';
import { signOut } from "firebase/auth";
import { authentication } from "../utils/init-firebase";

const PaymentDash = () => {
    const classes=styling();
    const url=cred.api_url;
    const usertoken=localStorage.getItem("token");

    const [loading, setloading] = useState(true)
    const [payid, setpayid] = useState(0);
    const [data, setdata] = useState([]);

    useEffect(()=>{
        axios.get(`${url}/withdrawl`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setdata(response.data.withdrawls);
            setloading(false)
            // console.log(response)
    })
    .catch(function(error)
    {
        if(error.response.status===401)
          {
              signOut(authentication).then()
          }
    })
    if(!loading)
    {
        axios.patch(`${url}/withdrawl`,{
                headers: {
                'Authorization': `Bearer ${usertoken}`,
                'Content-Type': 'application/json'
                },
                params:{
                    id:payid
                },
            data:{
                "id":payid,
            }})
            .then(response => {
                // setdata(response);
                console.log(response)
        })
        .catch(function(error)
        {
            if(error.response.status===401)
            {
                signOut(authentication).then()
            }
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[payid])
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
                    (
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <Typography className={classes.cost}>Rs.{ele.cost}</Typography>
                            <IconButton><CheckCircleRoundedIcon onClick={()=>{setpayid(ele.id)}}/></IconButton>
                            </div>
                        </div>)
                    })
                    )
                }
                </div>
                    

            </Box>
        </>
    )
}

export default PaymentDash
