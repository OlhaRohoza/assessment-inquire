import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const CommentForm = () => {

    const params = useParams();

    const [comment, setComment] = useState({
        'postId': Number(params.id),
        'body': ''
    });

    const handleChange = (e) => {
        setComment(previous_values => {
            return ({
                ...previous_values,
                [e.target.name]: e.target.value
            });
        });
    }

    const handleComment = async (e) => {
        e.preventDefault();
        console.log(comment);

        const response = await axios.post('https://bloggy-api.herokuapp.com/comments', comment);
        console.log(response);
    }


    return (
        <div className="comment__form">
            <textarea
                type='text'
                name='body'
                placeholder="Create a new comment"
                value={comment.body}
                onChange={(e) => handleChange(e)}
                style={{ height: 100 }} />
            <button onClick={(e) => handleComment(e)}>Add a comment</button>
        </div>
    )
}

export default CommentForm;