import { Box, Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, setCurrentPage } from "../../reducers/comment.js";

function Footer() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.comments.page);
  const totalPages = useSelector((state) => state.comments.totalPages);

  const handlePageChange = (_, newPage) => {
    dispatch(setCurrentPage(newPage));
    dispatch(fetchComments());
  };

  return (
    <Box className="footer">
      <Pagination count={totalPages} page={page} onChange={handlePageChange} />
    </Box>
  );
}

export default Footer;
