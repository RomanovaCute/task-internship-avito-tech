import { Outlet } from 'react-router-dom'
import { Nav } from "../header/Header";

export const Layout = () => {
    return(
        <>
            <Nav/>
            <div className='main'>
                <Outlet/>
            </div>
        </>
    )
}

