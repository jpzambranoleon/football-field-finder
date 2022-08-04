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

const UpdateForm = ({ post }) => {
  const { setStatus, authorizedUser } = useContext(InfoContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .put(`/posts/update/${post._id}`, {
        userId: authorizedUser._id,
        data: formData,
      })
      .then((res) => {
        setStatus({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        window.location.reload();
      })
      .catch((err) => {
        let message = err.response ? err.response.data.message : err.message;
        setStatus({ open: true, message: message, severity: "error" });
      });
  };

  const [formData, setFormData] = useState({
    types: {
      team: post.types.team,
      player: post.types.player,
      trainer: post.types.trainer,
    },
    userId: `${authorizedUser._id}`,
    title: `${post.title}`,
    state: `${post.state}`,
    city: `${post.city}`,
    desc: `${post.desc}`,
    phone: `${post.phone}`,
    email: `${post.email}`,
  });

  function fetchTypes(post) {
    if (post.types.team === true) {
      return "team";
    } else if (post.types.player === true) {
      return "player";
    } else if (post.types.trainer === true) {
      return "trainer";
    }
  }

  const postType = fetchTypes(post);

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
              defaultValue={postType}
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
            defaultValue={post.title}
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
            defaultValue={post.city}
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
            defaultValue={post.desc}
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
            defaultValue={post.phone}
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
            defaultValue={post.email}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        onClick={handleSubmit}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="success"
      >
        Submit Post
      </Button>
    </Box>
  );
};

export default UpdateForm;
