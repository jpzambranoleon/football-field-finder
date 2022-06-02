import { Directions } from "@mui/icons-material";
import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 38;
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
    'AL', 'AK', 'AZ', 'AR', 'CA',
    'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA',
    'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO',
    'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 
    'OK', 'OR', 'PA', 'RI', 'SC', 
    'SD', 'TN', 'TX', 'UT', 'VT', 
    'VA', 'WA', 'WV', 'WI', 'WY',
];

const FeedFilter = () => {
    const [state, setState] = useState([]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setState(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: {xs: 'block', md: 'flex'}, alignItems: 'center', mb: 5}}
        >
            
            <FormControl component="fieldset" sx={{ ml: 1 }}>
                <FormGroup aria-label="position" row>
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox defaultChecked={true} />}
                        label="Team"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox defaultChecked={true} />}
                        label="Trainer"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox defaultChecked={true} />}
                        label="Free Agent"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <FormControl sx={{ ml: 1, minWidth: 100 }} size="small">
                <InputLabel id="simple-select-label">State</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={state}
                    label="State"
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    {states.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField 
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                size="small"
                sx={{ ml: 1, width: 150 }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton type="submit" color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <Directions />
                </IconButton>
            </Box>
        </Paper>
    )
}

export default FeedFilter;