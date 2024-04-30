import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState("");


    const toReview = () => {
        let action = { type: 'COMMENTS', payload: comment };
        dispatch(action);
        history.push('/review');
        console.log(comment);
    }
    return(
        <>
        <h3>Any comments you want to leave?</h3>
        <TextField 
        label="Comments"
        type="text"
        data-testid="input"
        sx={{ width: '50ch'}}
        onChange={(e) => {setComment(e.target.value)}}/>
        <br />
        <br />
        <Button variant='contained' onClick={toReview} data-testid="next" color='success'>Next</Button>
        </>
    )
};

export default Comments;