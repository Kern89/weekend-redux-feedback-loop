import FeedbackRating from "../FeedbackRating/FeedbackRating";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'

function Feeling() {
    const history = useHistory();
    const [feel, setFeel] = useState('');

    const toUnderstanding = () => {
        history.push('/understanding')
        console.log(feel);
    }

    return(
        <>
        <h3>How are you feeling today?</h3>
        <FormControl>
            <RadioGroup 
                row
                value={feel}
                required
                >
                <FormControlLabel 
                    value="1"
                    control={<Radio />}
                    onChange={() => {setFeel(1)}}
                    label="1"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="2"
                    onChange={() => {setFeel(2)}}
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="3"
                    onChange={() => {setFeel(3)}}
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"  />
                <FormControlLabel 
                    value="4"
                    onChange={() => {setFeel(4)}}
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="5"
                    onChange={() => {setFeel(5)}}
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom" />
            </RadioGroup>
        </FormControl>
        <Button variant='contained' onClick={toUnderstanding}>Next</Button>
        </>
    )
}

export default Feeling;