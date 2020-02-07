import React from "react";
import app from "./base";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Home = () => {
  
  return (
     <div className= "col-md-6">
     <h1>You are Home</h1>
     {/* <button type="submit"  variant="contained" color="primary" onClick={() => app.auth().signOut()}>Sign out</button> */}
     <Button variant="contained" color="primary" href="#contained-buttons" onClick ={() => app.auth().signOut()}>
        Log Out
      </Button>
    
 </div>
  );
};

export default Home;
