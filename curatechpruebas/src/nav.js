import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'

import Problem1 from './Problem1/index';
import Problem2 from './Problem2/index';
import Problem3 from './Problem3/index';
const Nav = () =>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <> 
            <Router>
                <div>
                <Grid container justify = "center">
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Menu
                    </Button>     
                </Grid>   
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <MenuItem onClick={handleClose}><Link to="/Problem1">Problema 1</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/Problem2">Problema 2</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to="/Problem3">Problema 3</Link></MenuItem>

                    
                    </Menu>
                    <Route path="/Problem1" component={Problem1} />
                    <Route path="/Problem2" component={Problem2} />
                    <Route path="/Problem3" component={Problem3} />
                </div>
            </Router>

        </>
    );
}
export default Nav;