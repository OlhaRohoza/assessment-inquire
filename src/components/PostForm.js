import { useState } from 'react';
import axios from 'axios';


const PostForm = (props) => {

    const [values, setValues] = useState({
        title: props.title,
        body: props.body
    });

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (event) => {
        // prevent the default event behaviour
        event.preventDefault();

        props.setEditPost(false);
        const url = `https://bloggy-api.herokuapp.com/posts/${props.id}`;
        await axios.put(url, values);
    }


    return (
        <div className="post__container_display">
            <div className="post__container_part">
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={(event) => handleChange(event)} />
            </div>
            <div className="post__container_part">
                <label>Post:</label>
                <textarea
                    type="text"
                    name="body"
                    value={values.body}
                    onChange={(event) => handleChange(event)}
                    style={{ height: 150 }} />
            </div>
            <button
                className="post__container_button"
                onClick={(event) => handleSubmit(event)}
            >Update new post</button>
        </div>
    )
}

export default PostForm;