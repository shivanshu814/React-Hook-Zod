import { Box } from '@material-ui/core'
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navbar from '../components/Navbar'
import UniversityDash from '../components/UniversityDash'
import styling from '../styles/pagestyles/University'


const University = () => {
    const classes=styling();
    
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
            <UniversityDash/>
            </Box>
        </>
    )
}

export default University
