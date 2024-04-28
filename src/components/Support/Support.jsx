import FeedbackRating from "../FeedbackRating/FeedbackRating";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Support() {
    const history = useHistory();
    
    const toComments = () => {
        history.push('/comments')
    }
    return(
        <>
        <h3>How well are you being supported?</h3>
        <FeedbackRating />
        <Button variant='contained' onClick={toComments}>Next</Button>
        </>
    )
};

export default Support;