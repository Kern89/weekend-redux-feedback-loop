import { useSelector } from "react-redux";
import { Button } from '@mui/material';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Review() {
    const history = useHistory();
    const feedback = useSelector(store => store.currentFeedback)
    const feeling = feedback[0];
    const understanding = feedback[1]
    const support = feedback[2]
    const comments = feedback[3]


    const sendToServer = () => {
        axios.post('/api/review', {feeling, understanding, support, comments}).then(response => {
            history.push('/success')
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    <td>Feeling</td>
                    <td>Understanding</td>
                    <td>Support</td>
                    <td>Comments</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{feeling}</td>
                    <td>{understanding}</td>
                    <td>{support}</td>
                    <td>{comments}</td>
                </tr>
            </tbody>
        </table>
        <Button variant='contained' onClick={sendToServer}>Submit feedback</Button>
        </>
    )
};

export default Review;