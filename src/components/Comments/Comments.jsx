import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, TextField, Button } from '@mui/material'

function Comments() {
    const history = useHistory();
    const [comment, setComment] = useState("");


    const toReview = () => {
        history.push('/review')
        console.log(comment);

    }
    return(
        <>
        <h3>Any comments you want to leave?</h3>
        <TextField 
        label="Comments"
        type="text"
        sx={{ width: '50ch'}}
        onChange={(e) => {setComment(e.target.value)}}/>
        <br />
        <Button variant='contained' onClick={toReview}>Next</Button>
        </>
    )
};

export default Comments;