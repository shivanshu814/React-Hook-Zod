import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import LeftNav from "../components/LeftNav";
import Dashboard from "../components/Dashboard";
import { authentication } from "../utils/init-firebase";

//all styling imports
import Box from "@material-ui/core/Box";
import styling from "../styles/pagestyles/Home";

const Home = () => {
  //all variables
  const history = useNavigate();

  //function that gets called when any change on user happens by firebase
  onAuthStateChanged(authentication,(user) => {
    if (!user) {
      history("/login");
      return null;
    } else {
      localStorage.setItem("token",user.accessToken);
      // console.log(user.accessToken);
  }
  })
  //AppBar states and functions
  const classes = styling();
  return (
    <>
      <NavBar/>
      <Box
        display="flex"
        flexDirection="row"
        width="100vw"
        height="90vh"
        className={classes.box}
        style={{overflow:"hidden"}}
      >
      <LeftNav/>
      <Dashboard/>
      </Box>
    </>
  );
};

export default Home;
