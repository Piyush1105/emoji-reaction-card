import React from "react";
import coffee from "../images/coffee.jpg";
import { red } from "@mui/material/colors";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import "./card.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThumbUpSharp } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Tooltip from "@mui/material/Tooltip";

const Cards = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <div className="main-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Piyush Yadav"
          subheader="February 14, 2023"
        />
        <CardMedia component="img" height="194" image={coffee} alt="Coffee" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This dirnk is impacable for the people giving them the boost while
            they work and help them stay awake.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableHoverListener
            disableTouchListener
            title="Add"
            arrow
          >
            <IconButton onClick={handleTooltipOpen} aria-label="like">
              <ThumbUpSharp />
            </IconButton>
          </Tooltip>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="error" />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon color="primary" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
