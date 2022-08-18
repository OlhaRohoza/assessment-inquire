import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const NewPost = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        body: ''
    });

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({
                ...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = (event) => {
        // prevent the default event behaviour
        event.preventDefault();
        console.log(values);

        axios.post('https://bloggy-api.herokuapp.com/posts', values);
        // after adding a new post - navigate to list of the posts
        navigate('/');
    }

    return (
        <div className="post-form__container">
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
                    style={{ height: 350 }} />
            </div>
            <button
                className="post__container_button"
                onClick={(event) => handleSubmit(event)}
            >Add a new post</button>
        </div>
    )
}

export default NewPost;