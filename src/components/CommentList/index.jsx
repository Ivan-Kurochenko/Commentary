import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Comment from "../../features/comment/Comment.jsx";
import { useSelector } from "react-redux";

function CommentList() {
  const comments = useSelector((state) => state.comments.commentList);

  return (
    <Box className="main">
      <Table className="comment-table">
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell align={"center"}>
                <Comment comment={comment} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default CommentList;
