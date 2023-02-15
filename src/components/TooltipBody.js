import { IconButton } from "@mui/material";
import { React, useState } from "react";
import { ThumbUpSharp } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { ReactionBarSelector } from "@charkour/react-reactions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const TooltipBody = () => {
  const handleChange = (e) => {
    setIcon("");
  };

  const [icon, setIcon] = useState("");
  return (
    <>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          title={
            <ReactionBarSelector
              style={{
                backgroundColor: "transparent",
                width: "100%",
              }}
              onSelect={(e) => setIcon(e)}
            />
          }
          arrow
        >
          <IconButton onClick={(e) => handleChange(e)} aria-label="emoji">
            {icon === "satisfaction" ? (
              <ThumbUpSharp color="primary" />
            ) : icon === "love" ? (
              <FavoriteIcon color="error" />
            ) : icon === "happy" ? (
              <TagFacesIcon color="primary" />
            ) : icon === "surprise" ? (
              <EmojiEmotionsIcon color="error" />
            ) : icon === "sad" ? (
              <SentimentVeryDissatisfiedIcon color="warning" />
            ) : icon === "angry" ? (
              <SentimentNeutralIcon color="warning" />
            ) : (
              <ThumbUpSharp />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default TooltipBody;
