import { makeStyles } from "@material-ui/styles";


const useStyles=makeStyles((theme)=>({
    contain:{
        backgroundColor:"#e6e6e6",
        [theme.breakpoints.down('sm')]: {
            width:"100vw",
            overflow:"scroll",
            height:"100vh"
        },
        overflow:"hidden"
    },
    details:{
        display:"flex",
        flexWrap:"wrap",
        width:"78vw",
        height:"86vh",
        borderRadius: "10px",
        backgroundColor:theme.root.primary.light,
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            overflow:"scroll"
        },
        overflowY:"scroll"
    },
    item:{
        width:"74vw",
        height:"14vh",
        backgroundColor:theme.root.primary.main,
        borderRadius: "10px",
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center",
        margin:"0.5rem 0rem"
    },
    title:{
        marginLeft:"2rem",
        color:theme.root.primary.light,
        fontSize:"1.5rem"
    },
    icons:{
        display:"flex",
        height:"100%",
        alignItems:"center",
        marginRight:"2rem",
        '& .MuiSvgIcon-root':{
            fontSize:'2.3rem',
            color:theme.root.primary.light,
        },
    },
    nouni:{
        color:theme.root.primary.main,
        minHeight:"80%"
    },
    createbutton:{
        width:"100%",
        display:"flex",
        justifyContent:"flex-end",
        '& .MuiButton-root':{
            backgroundColor:theme.root.primary.main,
            color:theme.root.primary.light
        }
    },
    form:{
        '& .MuiTextField-root': {
            // margin: theme.spacing(7),
            width: '90%',
        },
        '& .MuiButton-root':
        {
            // margin: theme.spacing(7),
            width: '90%'
        },
        '& .MuiOutlinedInput-input':{
            padding:theme.spacing(4.3,50),
            [theme.breakpoints.down('sm')]:{
                padding: theme.spacing(4.3,30)
            },
        },
        padding: theme.spacing(21,16),
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down('sm')]:{
            padding: theme.spacing(0,0)
        },
    },
    createuni:{
        width:"100%"
    }
}))

export default useStyles