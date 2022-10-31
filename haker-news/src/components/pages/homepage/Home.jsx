import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { ListItem } from "../newspage/NewsItem";
import {HomeContainer} from './styles'
import { timeConverter } from "../../../service/date-converter";

export const Homepage = () => {
    const news = useSelector(state => state.news)
    const navigate = useNavigate()

    return(
        <HomeContainer>
            {
                news.map(item => 
                    <ListItem
                        key={item.id}
                        title={item.title}
                        by={item.by}
                        score={item.score}
                        time={timeConverter(item.time)}
                        onClick={() => navigate(`/item/${item.id}`)}
                    />   
                )
            }
        </HomeContainer>
    )
}