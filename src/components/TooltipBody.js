import { IconButton } from "@mui/material";
import { React, useState } from "react";
import { ThumbUpSharp } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { ReactionBarSelector } from "@charkour/react-reactions";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import like from "../images/like.png";
import angry from "../images/angry.png";
import haha from "../images/haha.png";
import heart from "../images/heart.png";
import sad from "../images/sad.png";
import surprise from "../images/surprise.png";

import "./card.css";
const TooltipBody = () => {
  const handleChange = () => {
    setIcon("");
  };
  const [icon, setIcon] = useState("");
  console.log(icon);
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };
  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            sx={{ bgcolor: "white" }}
            title={
              <ReactionBarSelector
                style={{
                  width: "100%",
                }}
                onSelect={(e) => setIcon(e)}
              />
            }
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
          >
            <IconButton
              onClick={() => {
                handleChange();
                handleTooltipOpen();
              }}
              aria-label="emoji"
            >
              {icon === "satisfaction" ? (
                <img className="emoji-img" src={like} alt="like" />
              ) : icon === "love" ? (
                <img className="emoji-img" src={heart} alt="heart" />
              ) : icon === "happy" ? (
                <img className="emoji-img" src={haha} alt="haha" />
              ) : icon === "surprise" ? (
                <img className="emoji-img" src={surprise} alt="surprise" />
              ) : icon === "sad" ? (
                <img className="emoji-img" src={sad} alt="sad" />
              ) : icon === "angry" ? (
                <img className="emoji-img" src={angry} alt="angry" />
              ) : (
                <ThumbUpSharp />
              )}
            </IconButton>
          </Tooltip>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default TooltipBody;
