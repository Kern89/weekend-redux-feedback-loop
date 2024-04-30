import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

function Support() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');
    
    const toComments = () => {
        let action = { type: 'SUPPORT', payload: support };
        dispatch(action);
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
                data-testid="input"
                >
                <FormControlLabel 
                    value="1"
                    control={<Radio />}
                    onChange={() => {setSupport(1)}}
                    label="1"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="2"
                    onChange={() => {setSupport(2)}}
                    control={<Radio />}
                    label="2"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="3"
                    onChange={() => {setSupport(3)}}
                    control={<Radio />}
                    label="3"
                    labelPlacement="bottom"
                      />
                <FormControlLabel 
                    value="4"
                    onChange={() => {setSupport(4)}}
                    control={<Radio />}
                    label="4"
                    labelPlacement="bottom"
                     />
                <FormControlLabel 
                    value="5"
                    onChange={() => {setSupport(5)}}
                    control={<Radio />}
                    label="5"
                    labelPlacement="bottom"
                     />
            </RadioGroup>
        </FormControl>
        <br />
        <br />
        <Button variant='contained' onClick={toComments} data-testid="next"  color='success'>Next</Button>
        </>
    )
};

export default Support;