import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='nav-conatiner'>
            <p>Hacker News</p>
            <div className='nam-items'>
                <NavLink to="/">Homw</NavLink>
                <NavLink to="/2">Past</NavLink>
                <NavLink to="/3">Comments</NavLink>
                <NavLink to="/4">Ask</NavLink>
                <NavLink to="/5">Show</NavLink>
                <NavLink to="/6">Jobs</NavLink>
                <NavLink to="/7">Submit</NavLink>
            </div>
        </div>
    )
}

export default Nav;