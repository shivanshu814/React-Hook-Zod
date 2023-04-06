import { Box, IconButton, Typography } from '@material-ui/core';
import React,{ useState } from 'react'
import styling from '../styles/componentstyle/AppointmentDash'
import ImportExportIcon from '@material-ui/icons/ImportExport';
import Spinner from '../assets/spinner/Spinner.gif'


const AppointmentDash = () => {
    
    const classes=styling();
    let data=[
        {
            id:1,
            student:"Student1",
            mentor:"Mentor1"
        },
        {
            id:1,
            student:"Student2",
            mentor:"Mentor2"
        },
        {
            id:1,
            student:"Student3",
            mentor:"Mentor3"
        },
        {
            id:1,
            student:"Student4",
            mentor:"Mentor4"
        },
        {
            id:1,
            student:"Student5",
            mentor:"Mentor5"
        },
        {
            id:1,
            student:"Student6",
            mentor:"Mentor6"
        },
    ]
    
    const [loading, setloading] = useState(true)
    setloading(false)
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
                            <Typography className={classes.title}>{ele.student}</Typography>
                            <div className={classes.icons}>
                            <IconButton><ImportExportIcon/></IconButton>
                            </div>
                            <Typography className={classes.title}>{ele.mentor}</Typography>
                            </div>)
                    })
                }
                </div>
                    

            </Box>
        </>
    )
}

export default AppointmentDash
