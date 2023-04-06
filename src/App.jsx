import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Payment from './pages/Payment.jsx'
import Mentor from './pages/Mentor.jsx'
import Student from './pages/Student.jsx'
import Application from './pages/Application.jsx'
import Appointment from './pages/Appointment.jsx'
import University from './pages/University.jsx'
// import MentorReg from './pages/MentorReg.jsx'
import theme from './styles/themes/Main'
import { ThemeProvider } from '@material-ui/styles';
import Firebasestate from './contexts/firebaseauth/firebasestate';

function App() {
  
  return (
    <>
    <Firebasestate>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/mentor" element={<Mentor/>}/>
        <Route exact path="/student" element={<Student/>}/>
        <Route exact path="/application" element={<Application/>}/>
        <Route exact path="/appointment" element={<Appointment/>}/>
        <Route exact path="/university" element={<University/>}/>
        {/* <Route exact path="/mentorreg" element={<MentorReg/>}/> */}
      </Routes>
    </ThemeProvider>
    </Firebasestate>
    </>
  );
}

export default App;
