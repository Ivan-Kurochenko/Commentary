import { Box, Typography } from "@mui/material";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import SearchBar from "../SearchBar/index.jsx";

function Header() {
  return (
    <Box className="header">
      <Box className="header-section">
        <NoteAltIcon fontSize="large" />
        <Typography variant="h6" color="white">
          Commentary
        </Typography>
      </Box>
      <SearchBar />
    </Box>
  );
}

export default Header;
