import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const Post = () => {

    const [post, setPost] = useState([]);
    // for editing post if true there is PostForm, if false there is a displayed post
    const [editPost, setEditPost] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        const url = `https://bloggy-api.herokuapp.com/posts/${params.id}?_embed=comments`;
        const response = await fetch(url);
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        fetchData()
    }, [post, editPost])

    const handleClick = () => {
        // alert confirmations for deleting the post
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDelete()
                },
                {
                    label: 'No',
                    onClick: () => navigate(`/post/${post.id}`)
                }
            ]
        })
    }
    const handleDelete = async () => {
        const url = `https://bloggy-api.herokuapp.com/posts/${post.id}`;
        await axios.delete(url);
        // after DELETing a new post - navigate to list of the posts
        navigate('/');
    }


    return (
        <div className="post__container">
            {
                editPost
                    ? <PostForm
                        id={post.id}
                        title={post.title}
                        body={post.body}
                        setEditPost={setEditPost} />
                    : <div className="post__container_display">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>

                        <div className="post__actions">
                            <button onClick={() => setEditPost(true)}>Update post</button>
                            <button onClick={() => handleClick()} style={{ backgroundColor: 'red' }}>Delete post</button>
                        </div>
                    </div>
            }
            <hr />
            <div className="comments__container">
                {
                    post.comments && post.comments.length > 0
                        ? <>
                            <h2>Comments:</h2>
                            <div className="comment__conteiner">
                                {post.comments.map(comment => (
                                    <p key={comment.id}>{comment.body}</p>

                                ))}</div></>
                        : <p>No comments</p>
                }
                <hr />
                <CommentForm />
            </div>
        </div>
    )
}

export default Post;