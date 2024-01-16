import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";

export default function NavBar() {
    return (
        <AppBar position="static" color="primary" style={{ backgroundColor: "rgb(36, 180, 0)", boxShadow: "inset 2px 2px 50px 2px rgb(29, 91, 14)" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Josefin Sans' }}>
                    <Link to="/MainPage" style={{ textDecoration: "none", color: "inherit" }}>
                        <Typography variant="h6" color="inherit">
                            DevSpace
                        </Typography>
                    </Link>
                </Typography>

                <Button color="inherit" component={NavLink} to="/MainPage" exact>
                    <Typography variant="button" color="inherit">
                        Users
                    </Typography>
                </Button>


                <div style={{ marginLeft: "20px" }}></div>

                <Button color="inherit" component={NavLink} to="/about">
                    <Typography variant="button" color="inherit">
                        Posts
                    </Typography>
                </Button>


                <div style={{ marginLeft: "20px" }}></div>

                <Button color="inherit" component={NavLink} to="/notes">
                    <Typography variant="button" color="inherit">
                        Albums
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
}