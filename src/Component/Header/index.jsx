import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Register from '../../Features/Auth/Register';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));

export default function Header() {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Home
               </Typography>
               <Button color="inherit" onClick={handleClickOpen}>
                  Login
               </Button>
            </Toolbar>
         </AppBar>
         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogContent>
               <Register />
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
