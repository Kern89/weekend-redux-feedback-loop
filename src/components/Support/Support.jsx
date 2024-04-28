import FeedbackRating from "../FeedbackRating/FeedbackRating";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material'

function Support() {
    const history = useHistory();
    const [support, setSupport] = useState('');
    
    const toComments = () => {
        history.push('/comments');
        console.log(support);
    }
    return(
        <>
        <h3>How well are you being supported?</h3>
        <FormControl>
            <RadioGroup 
                row
                value={support}
                required
                >
                <FormControlLabel 
                    value="1"
                    control={<Radio />}
                    onChange={() => {setSupport(1)}}
                    label="1"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="2"
                    onChange={() => {setSupport(2)}}
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="3"
                    onChange={() => {setSupport(3)}}
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"  />
                <FormControlLabel 
                    value="4"
                    onChange={() => {setSupport(4)}}
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom" />
                <FormControlLabel 
                    value="5"
                    onChange={() => {setSupport(5)}}
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom" />
            </RadioGroup>
        </FormControl>
        <Button variant='contained' onClick={toComments}>Next</Button>
        </>
    )
};

export default Support;