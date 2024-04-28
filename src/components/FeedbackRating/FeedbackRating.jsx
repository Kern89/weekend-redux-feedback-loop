import { useState } from 'react';
import { Button, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'


function FeedbackRating() {
    let [rating, setRating] = useState('');

    // const nextPage = () => {
    //     console.log(rating);
    // };

    const handleRating = (e) => {
        const value = e.target
        setRating(value)
    }
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
            
            <Button variant="contained" >Next</Button>
        </FormControl>
    )
}

export default FeedbackRating;