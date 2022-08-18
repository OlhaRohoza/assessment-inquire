import { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ id }) => {

    const [comment, setComment] = useState({
        postId: id,
        body: ''
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

        const url = `https://bloggy-api.herokuapp.com/comments`;
        await axios.post(url, comment);
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