import React from "react";
import "./content.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
  Avatar,
  CardMedia,
  CardActions
} from "@material-ui/core";
import {
  Share as ShareIcon,
  MoreVert as MoreVertIcon,
  Favorite as FavoriteIcon
} from "@material-ui/icons";
import data from "../Contents/stock.json";
export default function() {
  const cardRender = props => {
    console.log(props);
    return (
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.title}
          subheader={props.subheader}
        />
        <CardMedia
          style={{ height: "130px" }}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.cardContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  };
  return (
    <div className="content">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {data.map(item => {
          return (
            <Grid item xs={12} sm={4} md={3}>
              {cardRender(item)}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
