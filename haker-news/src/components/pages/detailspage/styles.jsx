import styled from 'styled-components'

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
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

