import React from "react";
import "./style.css";
import Login from "./Login";
import ContactUs from "./ContactUs";
import Admin from "./Admin";
import StudentLogin from "./StudentLogin";
import {
  BrowserRouter,
  Routes,
  Route,useNavigate
} from 'react-router-dom';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/adminlogin" element={<Admin />}></Route>
          <Route path="/studentlogin" element={<StudentLogin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Dashboard() {
  const navigate = useNavigate();
  return (
      <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button  onClick={() =>
          navigate('/login')}
          color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
          <Button  onClick={() =>
          navigate('/contactus')} size="small">CONTACT US</Button>
        </CardActions>
      </Card>
      <br />
      <Grid container spacing={2}>
        <Grid item>
          <Button  onClick={() =>
          navigate('/adminlogin')} variant="contained">Admin Login</Button>
        </Grid>
        <Grid item>
          <Button  onClick={() =>
          navigate('/studentlogin')} variant="contained">Student Login</Button>
        </Grid>
      </Grid>
      <br />
 
     </>
  
  );
}