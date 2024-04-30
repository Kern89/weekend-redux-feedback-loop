import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const resetFeedback = () => {
        let action = { type: 'RESET'};
        dispatch(action)
        history.push('/')
    };
    return(
        <>
        <h3>Thank you for your feedback!</h3>
        <Button variant='contained' onClick={resetFeedback} data-testid="next" color='success' >Start new feedback</Button>
        </>
    )
};

export default Success;