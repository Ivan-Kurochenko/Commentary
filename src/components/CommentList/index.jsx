import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import Comment from "../Comment";
import { useSelector } from "react-redux";

function CommentList() {
  const comments = useSelector((state) => state.comments.commentList);

  return (
    <Box className="main">
      <Table className="comment-table">
        <TableBody>
          {comments.map((comment) => (
            <TableRow key={comment.id}>
              <TableCell>
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
