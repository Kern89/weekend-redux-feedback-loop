import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Comments() {
    let history = useHistory();
    const toReview = () => {
      history.push('/review')
    }
    return(
        <>
        <h3>Any comments you want to leave?</h3>
        <TextField 
        label="Comments" 
        sx={{ width: '50ch'}}/>
        <br />
        <Button variant='contained' onClick={toReview}>Next</Button>
        </>
    )
};

export default Comments;