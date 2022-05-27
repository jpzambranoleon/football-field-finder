import { Checkbox, FormControl, FormControlLabel, FormGroup, Paper } from "@mui/material";

const FeedFilter = () => {
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