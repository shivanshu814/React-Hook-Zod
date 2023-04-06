import { Box } from '@material-ui/core'
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navbar from '../components/Navbar'
import PaymentDash from '../components/PaymentDash'
import styling from '../styles/pagestyles/Payment'


const Payment = () => {
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
            <PaymentDash/>
            </Box>
        </>
    )
}

export default Payment
