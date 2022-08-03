import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { InfoContext } from "../../../utils/InfoProvider";
import { useNavigate } from "react-router-dom";

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
  const { setStatus, authorizedUser } = useContext(InfoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    types: {
      team: true,
      player: false,
      trainer: false,
    },
    userId: `${authorizedUser._id}`,
    title: "",
    state: "",
    city: "",
    desc: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("/posts/submit", formData)
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group-label"
              name="types"
              id="types"
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
              <FormControlLabel
                value="player"
                control={<Radio />}
                label="Player"
              />
              <FormControlLabel
                value="trainer"
                control={<Radio />}
                label="Trainer"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="simple-select-label">State</InputLabel>
            <Select
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, state: e.target.value }));
              }}
              value={formData.state}
              labelId="simple-select-label"
              name="state"
              id="state"
              label="State"
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
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, city: e.target.value }))
            }
            margin="normal"
            name="city"
            fullWidth
            id="city"
            label="City"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, desc: e.target.value }))
            }
            margin="normal"
            id="desc"
            name="desc"
            label="Description"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            margin="normal"
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="success"
      >
        Submit Post
      </Button>
    </Box>
  );
};

export default Form;
