import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { loadNewsById, loadComments, getChildComments } from '../../../store/actions/news-actions';
import { Information } from '../../info/Inform';
import { selectItem, selectComments } from '../../../store/selector/news-selector';
import { timeConverter } from "../../../service/date-converter";
import { Comment } from '../../comments/Comments';
import { DetailsContainer, MainContainer, Item, Comments } from './styles'


export const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const item = useSelector(selectItem);
    const comments = useSelector(selectComments);


    useEffect(() => {
        dispatch(loadNewsById(id))
    }, [])

    useEffect(() => {
        dispatch(loadComments(id))
    }, [])
    
    // useEffect(() => {
    //     dispatch(loadChildComments(id))
    // }, [])

    return(
        <DetailsContainer>
            <div className='item-buttons'>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => dispatch(loadNewsById(id))}>Update</button>
            </div>
            <MainContainer>
                <Information 
                    {...item}
                    key={item.id}
                    time={timeConverter(item.time)}
                />
            <Comments>
                {
                    comments.map(elem => 
                        <Comment 
                            key={elem.id}
                            by={elem.by}
                            text={elem.text}
                            time={timeConverter(elem.time)}
                            onClick={() => {dispatch(getChildComments(elem.id))}}
                            // id={elem.id}
                        />
                    )
                }
            </Comments>
            </MainContainer>
            
            
        </DetailsContainer>
    )
}

// url, title, time, by, счетчик комментов, kids (список основных комментариев)
// Комментарий: kids - его дочерние комменты (ответы)