import { CommentsContainer, User, Text, Button } from './style';
import ReactHtmlParser from "html-react-parser";

export const Comment = (props) => {
    const { by, text, time, onClick, children } = props;

    return(
            <CommentsContainer>
                    <User>
                        <b className="author">{by}</b>
                        <p className="time">{time}</p>
                    </User>
                    <Text>
                        <p className='text'>{text}</p>
                    </Text>
                    <Button onClick={onClick}>Show more</Button>
                    <div>
                        {children}
                    </div>
            </CommentsContainer>
    )
}