import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import "./topbar.css";
export default function TopBar() {
  const whiteColor = { color: "white" };
  return (
    <div>
      <AppBar
        style={{ boxShadow: "none" }}
        position="absolute"
        color="transparent"
      >
        <Toolbar variant="dense">
          <IconButton edge="start" style={whiteColor} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ ...whiteColor }}>
            ShowCase
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
