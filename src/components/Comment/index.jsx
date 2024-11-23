import { Box, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { deleteComment, likeComment } from "../../reducers/comment.js";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThumbUp } from "@mui/icons-material";

function Comment({ comment }) {
  const dispatch = useDispatch();
  const handleLikeClick = () => {
    dispatch(likeComment(comment.id));
  };

  const handleDeleteClick = () => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <Box className="comment">
      <Box className="comment-header">
        <Box className="user-info">
          <Typography variant="subtitle1">{comment.user.fullName}</Typography>
          <Typography variant="subtitle1" color="rgb(113, 118, 123)">
            @{comment.user.username}
          </Typography>
        </Box>
        <DeleteIcon onClick={handleDeleteClick} />
      </Box>
      <Box className="comment-body">
        <Typography variant="body2">{comment.body}</Typography>
        <Box className="like-section">
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
    </Box>
  );
}

export default Comment;
