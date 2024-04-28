import { TextField, Button } from '@mui/material/TextField';

function Comments() {

    const toReview = () => {
        
    }
    return(
        <>
        <h3>Any comments you want to leave?</h3>
        <TextField 
        label="Comments" 
        sx={{ width: '50ch'}}/>
        <Button variant='contained'>Next</Button>
        </>
    )
};

export default Comments;