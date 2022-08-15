import { Directions } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { useState } from "react";

const FeedFilter = () => {
  const [filters, setFilters] = useState({
    team: true,
    trainer: true,
    player: true,
    name: "",
  });

  return (
    <Paper
      component="form"
      id="filter"
      sx={{
        p: "2px 4px",
        display: { xs: "block", md: "flex" },
        alignItems: "center",
        mb: 5,
      }}
    >
      <FormControl component="fieldset" sx={{ ml: 1 }}>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                checked={filters.team}
                onChange={(e) => {
                  setFilters({ ...filters, team: e.target.checked });
                }}
                color="primary"
              />
            }
            label="Team"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                checked={filters.trainer}
                onChange={(e) => {
                  setFilters({ ...filters, trainer: e.target.checked });
                }}
                color="primary"
              />
            }
            label="Trainer"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={
              <Checkbox
                checked={filters.player}
                onChange={(e) => {
                  setFilters({ ...filters, player: e.target.checked });
                }}
                color="primary"
              />
            }
            label="Player"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={(e) => {
            setFilters({ ...filters, name: e.target.value });
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        >
          <Directions color="primary" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default FeedFilter;
