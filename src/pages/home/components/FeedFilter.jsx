import { Directions, MenuRounded, NearMeSharp, Search } from "@mui/icons-material";
import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, useTheme } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
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
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'MV',
    'NH',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
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
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuRounded />
            </IconButton>

            <FormControl sx={{ minWidth: 100 }} size="small">
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






            <InputBase 
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Search />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                <Directions />
            </IconButton>
        </Paper>
    )
}

export default FeedFilter;