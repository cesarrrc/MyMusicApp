import { useState } from 'react'; 
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Login = (props) => {
  const [userName, setUserName] = useState({userName:""});
  const [loggedIn, setLoggedIn] = useState(false);
  let user = {}

  const handleInput = (e) => {
    setUserName(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    user.userName = userName
    user.loggedIn = loggedIn
    props.getInfo(user)
    console.log(user)
  }
  
  
  return (
    <div>
      <Paper elevation={3}
        style={{
          width:"400px",
          height: "auto",
          display: 'flex',
          flexDirection: "column",
          margin: "40px auto auto auto",

        }}
      >
        
        <Typography variant="h4" style={{margin:"20px", textAlign:"center"}}>
          Welcome to MyMusicApp
        </Typography>

        <p style={{fontSize:"20px", margin:"0 auto auto auto"}}>
          Login
        </p>

        <div style={{margin:"40px"}}>

          <form onSubmit={handleLogin}>

            <TextField required fullWidth onChange={handleInput} name="userName" label="UserName" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 18}}}
              style={{
                marginBottom:"30px",
              }}  
            />

            <TextField required fullWidth name="passWord"  label="Password" type="password" inputProps={{style: {fontSize: 25}}} InputLabelProps={{style: {fontSize: 18}}}
              style={{
                marginBottom:"30px",
              }}  
            />

            <Button onClick={()=>{setLoggedIn(true)}} type="submit" variant="contained" color="primary" style={{display:"flex", margin:"auto"}}>Login</Button>

         </form>
         
        </div>

      </Paper>
    </div>
  );
}

export default Login;
