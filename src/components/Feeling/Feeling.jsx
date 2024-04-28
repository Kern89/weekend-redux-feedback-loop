import FeedbackRating from "../FeedbackRating/FeedbackRating";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function Feeling() {
    const history = useHistory();

    const toUnderstanding = () => {
        history.push('/understanding')
    }

    return(
        <>
        <h3>How are you feeling today?</h3>
        <FeedbackRating />
        <Button variant='contained' onClick={toUnderstanding}>Next</Button>
        </>
    )
}

export default Feeling;