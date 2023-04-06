import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { Navigate } from "react-router-dom"
import { authentication } from '../utils/init-firebase';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import styling from '../styles/pagestyles/Login'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import Alert from '@material-ui/lab/Alert';


const Login = () => {


    //states
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [err, seterr] = useState(false)
    const [user, setuser] = useState({})

    //submitting form
    const submitlogin = async(event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(authentication,email,pass)
            // console.log(val.accessToken);
        } catch (error) {
            seterr(true)
        }
    }
    
    onAuthStateChanged(authentication,(currentUser)=>{
        setuser(currentUser)
    })

    const checkValidation = () =>{
        if(user?.email)
        {
            return <Navigate to='/'/>;
        }
    }
    const classes=styling();
    return (
        <>
        {checkValidation()}

        <Box height="50%" className={classes.box} display="flex" flexDirection="column" width="50vw" justifyContent="center" alignItems="center" boxShadow={20} borderRadius={16}>
            <AccountCircleTwoToneIcon className={classes.icon}/>
            <form onSubmit={submitlogin} className={classes.form}>
                <TextField name='email' error={(err)?true:false} onChange={(event)=>{setemail(event.target.value)}} value={email} label="Email address" variant="outlined" required={true}/>
                <br/>
                <TextField name='password' error={(err)?true:false} onChange={(event)=>{setpass(event.target.value)}} value={pass} label="Password" variant="outlined" required={true} type={"password"}/>
                <br/>
                <Button variant="contained" color="primary" type='submit' size="large" style={{backgroundColor:"#6E3CBC"}}>Login</Button>
            </form>
            {(err)?<Alert severity="error">Please check your email address or password!</Alert>:null}
        </Box>
        </>
    )
}

export default Login
