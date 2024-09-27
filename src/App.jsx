import {useEffect, useState} from 'react'
import {
    Box,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@mui/material";
import {fetchComments} from "./rest/index.js";
import Comment from "./components/comment/index.jsx";

function App() {
    const [comments, setComments] = useState([])
    const [page, setPage] = useState(1);
    const [totalComments, setTotalComments] = useState(0)

    useEffect(() => {
        fetchComments().then(comments => setComments(comments))
    }, []);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <TableContainer sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: 550,
            }}>
                <Table>
                    <TableBody>
                        {comments.map((comment) => (
                            <TableRow key={comment.id}>
                                <TableCell align={"center"}>
                                    <Comment comment={comment}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={comments.length / 30} page={page}
                        onChange={(_, page) => setPage(page)}/>
        </Box>
    )
}

export default App
