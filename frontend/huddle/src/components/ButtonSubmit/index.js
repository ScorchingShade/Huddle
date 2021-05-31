import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function ButtonSubmit(props) {
  const classes = useStyles();
  const clickMe=()=>{
    props.clickMe();
  }

  return (
    <div>
     
      <div onClick={clickMe}>
        
        <Fab
          variant="extended"
          size="medium"
          color="#04DF0E"
          aria-label="add"
          className={classes.margin}

          style={{backgroundColor:"#04DF0E"}}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Submit
        </Fab>
       
      </div>
    </div>
  );
}
export { ButtonSubmit };