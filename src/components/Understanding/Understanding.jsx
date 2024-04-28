import FeedbackRating from "../FeedbackRating/FeedbackRating";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Understanding() {
    const history = useHistory();

    const toSupport = () => {
        history.push('/support')
    };
    return(
        <>
        <h3>How well are you understanding the content?</h3>
        <FeedbackRating />
        <Button variant='contained' onClick={toSupport}>Next</Button>
        </>
    )
};

export default Understanding;