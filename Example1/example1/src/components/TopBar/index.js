import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));
export default function() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography className={classes.typographyStyles} variant="h6">
            DAY1
          </Typography>
          <Button color="inherit">
            <AccountCircleIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
