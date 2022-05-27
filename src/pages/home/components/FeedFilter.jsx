import { NearMeSharp } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, OutlinedInput, Paper, Select, useTheme } from "@mui/material";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
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

function getStyles(name, stateName, theme) {
    return {
        fontWeight:
            stateName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const FeedFilter = () => {
    const theme = useTheme();
    const [stateName, setStateName] = useState([]);

    

    return (
        <Paper>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row sx={{ ml: 2 }}>
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="Field"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="Teams"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="Other"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default FeedFilter;