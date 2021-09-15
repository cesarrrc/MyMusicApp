import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  root: {
    width: 250,
    margin: "auto",
  },
  input: {
    width: 42,    
  },
});

const DashBoard = (props) => {
  const classes = useStyles();
  const [online, setOnline] = useState(true)
  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = useState(2);

  
  const handleChange = (event) => {
    setOnline(event.target.checked);
  };

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleInputChange = (event) => {
    setVolume(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (volume < 0) {
      setVolume(0);
    } else if (volume > 100) {
      setVolume(100);
    }
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);
  };
  
  return (
    <div>

      <div className="titleContainer">
        <p  className="intro">
          Hello,
        </p>
        <p className="nameIntro">
          {props.userName}
        </p>
      </div>

      <div className="mainContainer" style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
        
        <Card className="cardContainer">
         
          <CardContent>
            <Typography variant="h5">
              Online Mode
            </Typography>
            <Typography variant="body1">
              Is this Application currently connected to the internet?
            </Typography>
          </CardContent>
         
          <div classname="switchContainer">
            <Switch
              checked={online}
              onChange={handleChange}
              name="online"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </div>
          
          <br />
          {!online && "Your application is offline. You won't be able to share or stream music to other devices."}
        
        </Card>
        
        {/**Music Volume Slider */}
        <Card className="cardContainer">
            
            <CardContent>
              <Typography variant="h5">
                Master Volume
              </Typography>
              <Typography variant="body1">
                Overrides all other sound settings in this application.
              </Typography>
            </CardContent>
            
            <Grid container spacing={2} alignItems="center">
              
              <Grid item>
                <VolumeUp />
              </Grid>
              
              <Grid item xs>
                <Slider
                  value={typeof volume === 'number' ? volume : 0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  />
              </Grid>
              
              <Grid item>
                <Input
                  className={classes.input}
                  value={volume}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  disableUnderline={true}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                  />
              </Grid>
            
            </Grid>
            
            { volume > 80 && "Listening to music at a high volume could cause long-term hearing loss."}
        
        </Card>
        
        <Card className="cardContainer">
          
          <CardContent>
            
            <Typography variant="h5">
              Sound Quality
            </Typography>
            
            <Typography variant="body1">
              Manually control the music quality in event of poor connection.
            </Typography>
          
          </CardContent>
        
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quality}
            onChange={handleQualityChange}
          >
            <MenuItem value={1}>Low Quality</MenuItem>
            <MenuItem value={2}>Normal Quality</MenuItem>
            <MenuItem value={3}>High Quality</MenuItem>
          </Select>
          
          <br />
          {quality == 1 && "Music quality is degraded. Increase quality if your connection allows it."}
        
        </Card>
      
      </div>

    </div>
  );
}

export default DashBoard;
