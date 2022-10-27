import { useSelector } from "react-redux";
import ListItem from "../newspage/NewsItem";
import {HomeContainer} from './styles'
import { timeConverter } from "../../../service/date-converter";

const Homepage = () => {
    const news = useSelector(state => state.news)

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
                    />   
                )
            }
        </HomeContainer>
    )
}

export default Homepage;