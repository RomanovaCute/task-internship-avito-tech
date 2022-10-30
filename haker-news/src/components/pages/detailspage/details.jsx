import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { loadNewsById, loadComments, getChildComments } from '../../../store/actions/news-actions';
import { Information } from '../../info/Inform';
import { selectItem, selectComments, selectChildComments } from '../../../store/selector/news-selector';
import { timeConverter } from "../../../service/date-converter";
import { Comment } from '../../comments/Comments';
import { DetailsContainer, MainContainer, Comments } from './styles'


export const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const item = useSelector(selectItem);
    const comments = useSelector(selectComments);
    const children = useSelector(selectChildComments);
    
    const [childComments, setChildComments] = useState([]);
    const [ isShowChildrenComments, setIsShowChildrenComments ] = useState(false);
    
    const showChildComments = (id) => {
        dispatch(getChildComments(id))
        setChildComments(children)
        setIsShowChildrenComments(current => !current)
    }

    const updateComments = () => {
        dispatch(loadNewsById(id))
        dispatch(loadComments(id))
    }


    useEffect(() => {
        dispatch(loadNewsById(id))
        dispatch(loadComments(id))
    }, [])
    

    return(
        <DetailsContainer>
            <div className='item-buttons'>
                <button className="back btn" onClick={() => navigate(-1)}>Back</button>
                <button className="update btn" onClick={updateComments}>Update</button>
            </div>
            <MainContainer>
                <Information 
                    {...item}
                    key={item.id}
                    time={timeConverter(item.time)}
                />
                <Comments>
                    {comments.map(elem => 
                            <Comment 
                                    key={elem.id}
                                    by={elem.by}
                                    text={elem.text}
                                    time={timeConverter(elem.time)}
                                    onClick={() => {showChildComments(elem.id)}}
                                    >
                                        { (isShowChildrenComments && childComments.length) &&
                                            childComments.map((item) =>
                                                <Comment 
                                                    key={item.id}
                                                    by={item.by}
                                                    text={item.text}
                                                    time={timeConverter(item.time)}
                                                    onClick={() => {showChildComments(item.id)}}
                                                />
                                            )
                                        }
                                        { !isShowChildrenComments &&
                                            <></>
                                        }
                            </Comment>
                        )
                    }
                </Comments>
            </MainContainer>
        </DetailsContainer>
    )
}