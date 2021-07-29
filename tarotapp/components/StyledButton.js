import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'black',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #c6770',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '10px',
    '&:hover': {
        background: '#c67700',
    }
  },
});

export default function StyledButton() {
  const classes = useStyles();
  return <Button variant="contained" className={classes.root} onClick={() => console.log('you clicked me')}>Reveal My Fate</Button>;
}