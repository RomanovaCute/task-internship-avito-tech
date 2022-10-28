import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { loadNewsById, loadComments } from '../../../store/actions/news-actions';
import { Information } from '../../info/Inform';
import { selectItem, selectComments } from '../../../store/selector/news-selector';
import { timeConverter } from "../../../service/date-converter";
import { Comment } from '../../comments/Comments';


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

    return(
        <div className='details-container'>
            <div className='item-buttons'>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => dispatch(loadNewsById(id))}>Update</button>
            </div>
            <Information 
                {...item}
                key={item.id}
                time={timeConverter(item.time)}
            />
            {
                comments.map(elem => 
                    <Comment 
                        key={elem.id}
                        id={elem.id}
                        by={elem.by}
                        text={elem.text}
                    />    
                )
            }
        </div>
    )
}

// url, title, time, by, счетчик комментов, kids (список основных комментариев)
// Комментарий: kids - его дочерние комменты (ответы)