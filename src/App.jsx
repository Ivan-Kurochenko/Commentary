import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Comment from "./features/comment/Comment.jsx";
import { fetchComments, setPage } from "./features/comment/commentSlice";

function App() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commentList);
  const totalComments = useSelector((state) => state.comment.totalComments);
  const page = useSelector((state) => state.comment.page);

  useEffect(() => {
    console.log("fetching comments");
    dispatch(fetchComments());
  }, []);

  const handlePageChange = (_, newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchComments());
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {comments && (
        <>
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
          <Pagination
            count={Math.ceil(totalComments / 30)}
            page={page}
            onChange={handlePageChange}
          />
        </>
      )}
    </Box>
  );
}

export default App;
