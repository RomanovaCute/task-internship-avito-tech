import { CommentsContainer, User, Text, Button } from './style'

export const Comment = (props) => {
    const { by, text, time, onClick } = props; //kids

    return(
        <CommentsContainer>
            <User>
                <b className="author">{by}</b>
                <p className="time">{time}</p>
            </User>
            <Text>
                <p className='text'>{text}</p>
            </Text>
            <Button onClick = {onClick}>Show all</Button>
        </CommentsContainer>
    )
}