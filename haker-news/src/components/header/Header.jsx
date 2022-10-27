import logo from '../../assets/images/hacker-news.svg'
import {HeaderContainer, Title, LogoBox} from './styles'

const Nav = () => {
    return(
        <HeaderContainer>
            <Title>
                <LogoBox>
                    <img className="logo" src={logo} alt='logo'></img>
                    <h1>Hacker News</h1>
                </LogoBox>
                <button className='update-btn'>Update</button>
            </Title>
        </HeaderContainer>
    )
}

export default Nav;