import {Box, Typography} from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {Title} from "@mui/icons-material";


function Comment({comment}) {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            p: 3,
            textAlign: "left"
        }}>
            <Typography variant="h6">{comment.user.fullName}</Typography>
            <Typography variant="body2">{comment.body}</Typography>
            <Box sx={{
                display:"flex",
                alignItems: "center"
            }}>
                {comment.likes}<ThumbUpOutlinedIcon  fontSize="small"/>
            </Box>
        </Box>
    )
}

export default Comment
