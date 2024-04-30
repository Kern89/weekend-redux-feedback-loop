import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import { useDispatch } from "react-redux";

function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understand, setUnderstand] = useState('');

    const toSupport = () => {
        let action = { type: 'UNDERSTANDING', payload: understand };
        dispatch(action);
        history.push('/support');
        console.log(understand);
    };
    return(
        <>
        <h3>How well are you understanding the content?</h3>
        <FormControl>
            <RadioGroup 
                row
                value={understand}
                data-testid="input"
                >
                <FormControlLabel 
                    value="1"
                    control={<Radio />}
                    onChange={() => {setUnderstand(1)}}
                    label="1"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="2"
                    onChange={() => {setUnderstand(2)}}
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="3"
                    onChange={() => {setUnderstand(3)}}
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"
                      />
                <FormControlLabel 
                    value="4"
                    onChange={() => {setUnderstand(4)}}
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="5"
                    onChange={() => {setUnderstand(5)}}
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom"
                     />
            </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Button variant='contained' onClick={toSupport} data-testid="next"  color='success'>Next</Button>
        </>
    )
};

export default Understanding;