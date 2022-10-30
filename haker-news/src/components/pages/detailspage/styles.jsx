import styled from 'styled-components'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    .item-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
	    box-sizing: border-box;
	    margin: 15px 0 15px 15px;
        width: 10vw;
	    outline: none;
	    border: none;
	    border-radius: 12px;
	    height: 46px;
        font-family: 'Poppins';
        letter-spacing: 1.2px;
	    font-size: 14px;
	    font-weight: 600;
	    text-decoration: none;
	    color: #fff;
	    box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	    cursor: pointer;
	    transition: box-shadow 0.2s;

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

    .back{
        border: 2px solid #5408e7;
        background-color: #9999FF;
    }

    .update{
        border: 2px solid #eb6916;
        background-color: #f89e43;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const Comments = styled.div`
    padding: 20px;

    &.close{
        display: none;
    }
`

