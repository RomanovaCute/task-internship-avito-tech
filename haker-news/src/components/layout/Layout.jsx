import { Outlet } from 'react-router-dom'
import Nav from "../header/Header";

const Layout = () => {
    return(
        <>
            <Nav/>
            <div className='main'>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;