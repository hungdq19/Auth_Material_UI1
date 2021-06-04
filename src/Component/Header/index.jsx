import { Badge, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Close from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../../Features/Auth/Login';
import Register from '../../Features/Auth/Register';
import { logout } from '../../Features/Auth/userSlice';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cartItemCountSelector } from '../../Features/Cart/cartSelector';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      position: 'relative',
      backgroundColor: theme.palette.secondary.main,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   close: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      zIndex: '10000',
   },
   link: {
      textAlign: 'center',
   },
}));

export default function Header() {
   const dispatch = useDispatch();

   const isUser = useSelector((state) => state.user.current);
   const cartItemCount = useSelector(cartItemCountSelector);
   const isLogin = !!isUser.id;
   const classes = useStyles();
   const MODE = {
      LOGIN: 'login',
      REGISTER: 'register',
   };
   const [open, setOpen] = useState(false);
   const [mode, setMode] = useState(MODE.LOGIN);
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleCloseMenu = () => {
      setAnchorEl(null);
   };

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   const handleLogOut = () => {
      dispatch(logout());
   };

   return (
      <Router>
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
                  {isLogin && (
                     <IconButton onClick={handleClick} color="inherit">
                        {/* <Typography>{`hello:${isUser.id}`}</Typography> */}
                        <AccountCircleIcon></AccountCircleIcon>
                     </IconButton>
                  )}
                  {!isLogin && (
                     <Button color="inherit" onClick={handleClickOpen}>
                        Login
                     </Button>
                  )}
                  <IconButton aria-label="show 4 new mails" color="inherit">
                     <Badge badgeContent={cartItemCount} color="secondary">
                        <ShoppingCartIcon />
                     </Badge>
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Menu
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleCloseMenu}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
               getContentAnchorEl={null}
            >
               <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
               <MenuItem onClick={handleLogOut}>Logout</MenuItem>
            </Menu>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
               <IconButton onClick={handleClose} className={classes.close}>
                  <Close />
               </IconButton>
               <DialogContent>
                  {mode === MODE.REGISTER && (
                     <>
                        <Register closeForm={handleClose} />
                        <Box textAlign="center">
                           <Button onClick={() => setMode(MODE.LOGIN)}>
                              Already have acount, Login here
                           </Button>
                        </Box>
                     </>
                  )}
                  {mode === MODE.LOGIN && (
                     <>
                        <Login closeForm={handleClose} />
                        <Box textAlign="center">
                           <Button onClick={() => setMode(MODE.REGISTER)}>
                              Don't have acount, Registers here
                           </Button>
                        </Box>
                     </>
                  )}
               </DialogContent>
            </Dialog>
         </div>
      </Router>
   );
}
