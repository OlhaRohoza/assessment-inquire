import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        const url = 'https://bloggy-api.herokuapp.com/posts';
        const response = await fetch(url);
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="posts__container">
            <h1>List of all Posts</h1>
            <ul>
                {
                    posts && posts.map(post => (
                        <li key={post.id}
                            className='posts__container_post'
                            onClick={() => navigate('/post/' + post.id)}
                        >{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Posts;