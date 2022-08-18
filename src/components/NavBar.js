import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="navigation">
            <Link to='/'>List of posts</Link>
            <Link to='new-post'>Create a new post</Link>
        </div>
    )
}

export default NavBar;