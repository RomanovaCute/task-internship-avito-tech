import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getChildComments } from '../../store/actions/news-actions';
import { selectChildComments, selectComments } from '../../store/selector/news-selector';
import { CommentsContainer, User, Text, Button } from './style'
import { loadComments } from '../../store/actions/news-actions';

export const Comment = (props) => {
    const { by, text, time, onClick } = props;
    // const { id } = useParams();
    // const dispatch = useDispatch()
    // const comments = useSelector(selectComments);

    // const children = useSelector(selectChildComments)
    // const [childComment, setChildComment] = useState(children)

    // const showChildComments = () => {
    //     dispatch(getChildComments(id))
    //     setChildComment(currentstate => !currentstate)
    // }

    // useEffect(() => {
    //     setChildComment(children)
    //     dispatch(loadComments(id))
    //     console.log(comments);
    // }, [])

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
            </CommentsContainer>
    )
}