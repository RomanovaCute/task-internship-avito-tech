import logo from '../../assets/images/hacker-news.svg'
import { HeaderContainer, Title, LogoBox } from './styles'
import { get } from '../../store/actions/news-actions'
import { useDispatch } from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch();

    return(
        <HeaderContainer>
            <Title>
                <LogoBox>
                    <img className="logo" src={logo} alt='logo'></img>
                    <h1>Hacker News</h1>
                </LogoBox>
                <button className='update-btn' onClick={() => {dispatch(get())}}>Update</button>
            </Title>
        </HeaderContainer>
    )
}

export default Nav;