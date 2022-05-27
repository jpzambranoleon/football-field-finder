import { Checkbox, FormControlLabel, FormGroup, Paper } from "@mui/material";

const FeedFilter = () => {
    return (
        <Paper>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                    <FormControlLabel 
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
        </Paper>
    )
}

export default FeedFilter;