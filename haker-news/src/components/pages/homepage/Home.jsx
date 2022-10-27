import { useSelector } from "react-redux";
import ListItem from "../newspage/NewsItem";

const Homepage = () => {
    const news = useSelector(state => state.news)

    return(
        <div className="homepage">
            {
                news.map(item => 
                    <ListItem
                        key={item.id}
                        title={item.title}
                        by={item.by}
                        score={item.score}
                        time={item.time}
                    />   
                )
            }
            
            
        </div>
    )
}

export default Homepage;