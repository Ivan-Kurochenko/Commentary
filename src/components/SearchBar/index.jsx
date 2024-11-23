import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Box className="search">
      <Box className="search-icon-wrapper">
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        className="input-base"
      />
    </Box>
  );
}

export default SearchBar;
