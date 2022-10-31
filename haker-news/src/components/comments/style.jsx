import styled from 'styled-components'

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    margin: 0 auto;
    width: 100%;
    background-color: #8080801;
    border-radius: 16px;
`

export const User = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    .time{
        margin: 0;
        font-size: 12px;
    }
`

export const Text = styled.div`
    text-align: justify;
    font-size: 14px;
    word-wrap: break-word;
`

export const Button = styled.button`
    border: none;
    width: 20%;
    height: 3vh;
    background: #f89e439e;
    border-radius: 5px;
    text-decoration: underline;
    cursor: pointer;
`