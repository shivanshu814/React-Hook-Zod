import React from "react";
import styling from "../styles/componentstyle/ApplicantDash";
import { Avatar, Typography, } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ApplicationDash from "./ApplicationDash";
import IconButton from '@material-ui/core/IconButton';
import profile from "../assets/images/avatar.png";
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { authentication } from "../utils/init-firebase";
import { onAuthStateChanged } from "firebase/auth";
import cred from '../utils/creds.json'
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplicantDash = (props) => {

  //declarations
  const classes = styling();
  const usertoken=localStorage.getItem("token");
  const url=cred.api_url;
  const history=useNavigate();

  //states
  const [senddecision, setsenddecision] = useState(false)
  const [decision, setdecision] = useState("notdecided")
  const sentdetail=props.details.detail;

  console.log(props)
  let id=sentdetail.id;

  useEffect(() => {
    if(senddecision)
    {
      axios.patch(`${url}/verify?action=${decision}&id=${id}`,{},
        {
        headers: 
        {
            Authorization: `Bearer ${usertoken}`
        }})
        .then((response) => {
          alert("Application updated")
          closeapplication();
        })
        .catch(function(error){
          if(error.response.status===500)
          {
            closeapplication();
            alert("Application don't exist")
          }
        })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decision])
  
  
  onAuthStateChanged(authentication,(user) => {
    if (!user) {
    history("/login");
    return null;
    } else {
    localStorage.setItem("token",user.accessToken);
    // console.log(user.accessToken);
}
})
  

  //functions
  const closeapplication = () => {
    props.details.setapplicationopen(true);
    <ApplicationDash />;
  };
  const downloaddocument = (url) => {
    window.location.href=url;
  }

  return (
    <>
      <div className="navigation"></div>
      <div className={classes.details}>
        <div className={classes.topnav}>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <ChevronLeftIcon style={{backgroundColor:"#6e3cbc",color:"#ffffff",borderRadius:"30px",fontSize:"2.5rem",marginRight:"65vw"}} onClick={closeapplication}/>
              </IconButton>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <CancelRoundedIcon style={{backgroundColor:"red",color:"white",borderRadius:"30px",fontSize:"2.5rem"}} onClick={()=>{setdecision("decline");setsenddecision(true);}}/>
              </IconButton>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <CheckCircleRoundedIcon style={{backgroundColor:"green",color:"white",borderRadius:"30px",fontSize:"2.5rem"}} onClick={()=>{setdecision("accept");setsenddecision(true);}}/>
              </IconButton>
        </div>
        <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} onClick={downloaddocument.bind(this,sentdetail.profilePic)}/>
        <div className={classes.about}>
          <Typography variant="h3" style={{ margin: "12px 20px" }}>
            <b>{(sentdetail.name)?sentdetail.name:"N/A"}</b>
          </Typography>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            <cite>
              <q>
                {(sentdetail?.campusInfo?.campusExperience!=="")?sentdetail?.campusInfo?.campusExperience:"N/A"}
              </q>
            </cite>
          </Typography>
        </div>
        <div className={classes.general}>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Status:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              {(sentdetail.status)?sentdetail.status:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Degree:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.degree)?sentdetail.degree:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Major:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.major)?sentdetail.major:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>GPA:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              {(sentdetail.campusInfo.scores.gpa)?sentdetail.campusInfo.scores.gpa:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>GMAT:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.scores.gmat)?sentdetail.campusInfo.scores.gmat:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>SAT:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              {(sentdetail.campusInfo.scores.sat)?sentdetail.campusInfo.scores.sat:"N/A"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Scholarship:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.scholarship)?sentdetail.campusInfo.scholarship:"no"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Campus Job:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.campusJob)?sentdetail.campusInfo.campusJob:"no"}
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Place of Stay:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.placeOfStay)?sentdetail.campusInfo.placeOfStay:"N/A"}
            </Typography>
          </div>
        </div>
        <hr style={{width:"73vw",height:"0.3vh",backgroundColor:"#ffffff"}}/>
        <div className={classes.segments} style={{width:"70vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Specialization:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.specialisation)?sentdetail.campusInfo.specialisation:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"40vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Previous Institute:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              Lorem ipsum dolor,
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"26vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Year of Graduation:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.yearOfGrad)?sentdetail.campusInfo.yearOfGrad:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Currency: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.preferredCurrency)?sentdetail.preferredCurrency:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Course Name: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.campusInfo.courseName)?sentdetail.campusInfo.courseName:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Country of study: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.countryOfStudy)?sentdetail.countryOfStudy:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Country of Origin: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            {(sentdetail.countryOfOrigin)?sentdetail.countryOfOrigin:"N/A"}
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"fit-content",marginBottom:"5px"}}>
            <Typography variant="h6" style={{paddingRight:"10px"}}>
              <b>Languages:</b>
            </Typography>
            {sentdetail.languages.map((ele) =>{
                return <Typography variant="h6" className={classes.languages}>
                {ele}
              </Typography>
            })}
          </div>
          <div className={classes.segments} style={{width:"33vw",marginBottom:"5px",alignItems:"center",padding:"0px 15px"}}>
            <Typography variant="h6">
              <b>Links: </b>
            </Typography>
            <IconButton color="primary" aria-label="linkedin id" component="span">
                  <LinkedInIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
            </IconButton>
            <IconButton color="primary" aria-label="linkedin id" component="span" onClick={downloaddocument.bind(this,sentdetail.campusInfo.verificationDocUrl)}>
                  <DescriptionIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
            </IconButton >
            <IconButton onClick={()=>{window.location.assign(`mailto:${sentdetail.campusInfo.uniEmail.email}`);}}>
                  <MailIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
            </IconButton>
          </div>
      </div>
    </>
  );
};

export default ApplicantDash;
