import { Box, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { likeComment } from "./commentSlice";
import { useDispatch } from "react-redux";
import { ThumbUp } from "@mui/icons-material";

function Comment({ comment }) {
  const dispatch = useDispatch();
  const handleLikeClick = (event) => {
    dispatch(likeComment(comment.id));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 3,
        textAlign: "left",
      }}
    >
      <Box sx={{ display: "flex", gap: "5px", alignItems: "baseline" }}>
        <Typography variant="h6">{comment.user.fullName}</Typography>
        <Typography variant="subtitle1" color="rgb(113, 118, 123)">
          @{comment.user.username}
        </Typography>
      </Box>
      <Typography variant="body2">{comment.body}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "3px",
        }}
      >
        {comment.likes}
        {comment.isLiked ? (
          <ThumbUp
            style={{
              width: "14px",
              height: "14px",
              cursor: "pointer",
            }}
            onClick={handleLikeClick}
          />
        ) : (
          <ThumbUpOutlinedIcon
            style={{
              width: "14px",
              height: "14px",
              cursor: "pointer",
            }}
            onClick={handleLikeClick}
          />
        )}
      </Box>
    </Box>
  );
}

export default Comment;
