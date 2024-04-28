import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'


function FeedbackRating() {
    let [rating, setRating] = useState('');

    return(
        <FormControl>
            <RadioGroup 
                row
                value={rating}
                >
                <FormControlLabel 
                    value="1"
                    control={<Radio />}
                    label="1"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="2"
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="3"
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"  />
                <FormControlLabel 
                    value="4"
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="5"
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom" />
            </RadioGroup>
        </FormControl>
    )
}

export default FeedbackRating;