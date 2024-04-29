import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import { useDispatch } from "react-redux";

function Feeling() {
    const dispatch = useDispatch('');
    const history = useHistory();
    const [feel, setFeel] = useState('');

    const toUnderstanding = () => {
        let action = { type: 'FEELING', payload: feel};
        console.log(feel);
        dispatch(action);
        history.push('/understanding');
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
                    labelPlacement="bottom"
                    data-testid="input" />
                <FormControlLabel 
                    value="2"
                    onChange={() => {setFeel(2)}}
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom"
                    data-testid="input" />
                <FormControlLabel 
                    value="3"
                    onChange={() => {setFeel(3)}}
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"
                    data-testid="input"  />
                <FormControlLabel 
                    value="4"
                    onChange={() => {setFeel(4)}}
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom"
                    data-testid="input" />
                <FormControlLabel 
                    value="5"
                    onChange={() => {setFeel(5)}}
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom"
                    data-testid="input" />
            </RadioGroup>
        </FormControl>
        <Button variant='contained' onClick={toUnderstanding} data-testid="next" >Next</Button>
        </>
    )
}

export default Feeling;