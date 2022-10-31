import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 0;
    background-color: white;
    position: sticky;
    font-family: 'Poppins'
}

    .logo{
        width: 5vw;
        border-radius: 16px;
    }
`
export const Title = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    padding: 10px 45px;
    justify-content: space-between;
    align-items: center;

    .update-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin: 15px 0 15px 15px;
        outline: none;
        border: none;
        border-radius: 12px;
        height: 7vh;
        letter-spacing: 1.2px;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: #fff;
        box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
        cursor: pointer;
        transition: box-shadow 0.2s;
        width: 10vw;
        border: 2px solid #eb6916;
        background-color: #f89e43;

        &:focus-visible {
            border: 1px solid #4c51f9;
            outline: none;
        }

        &:hover {
            transition: all 0.2s;
            box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);
            border: 2px solid white;
        }
        &:active {
            background-color: #808080;
        }
    }
`

export const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
`