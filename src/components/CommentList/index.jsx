import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Comment from "../../features/comment/Comment.jsx";
import { useSelector } from "react-redux";

function CommentList() {
  const comments = useSelector((state) => state.comment.commentList);

  return (
    <Box className="main">
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 550,
        }}
      >
        <Table>
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
      </TableContainer>
    </Box>
  );
}

export default CommentList;
