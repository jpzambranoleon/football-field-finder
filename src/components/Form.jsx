import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const Form = () => {
  const [formData, setFormData] = useState({
    types: {
      team: true,
      player: false,
      trainer: false,
    },
    title: "",
    state: "",
    city: "",
    description: "",
    phone: "",
    email: "",
  });

  function handleSubmit() {
    axios
      .post("/api/post/submit", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="row-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="team"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  types: {
                    team: false,
                    player: false,
                    trainer: false,
                    [e.target.value]: true,
                  },
                })
              }
            >
              <FormControlLabel value="team" control={<Radio />} label="Team" />
              <FormControlLabel value="player" control={<Radio />} label="Player" />
              <FormControlLabel value="trainer" control={<Radio />} label="Trainer" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} name="title" required fullWidth id="title" label="Title" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="simple-select-label">State</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={formData.state}
              label="State"
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, state: e.target.value }));
              }}
              MenuProps={MenuProps}
            >
              {states.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
            margin="normal"
            name="city"
            fullWidth
            id="city"
            label="City"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            margin="normal"
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            margin="normal"
            fullWidth
            id="telephone"
            label="Telephone Number"
            name="telephone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            required
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
      </Grid>
      <Button onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="success">
        Submit Post
      </Button>
    </Box>
  );
};

export default Form;
