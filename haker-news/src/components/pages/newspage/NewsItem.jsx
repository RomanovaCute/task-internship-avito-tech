import {NewsContainer, Info, Title} from './styles'

const ListItem = (props) => {
    const {title, score, by, time, onClick} = props;

    return(
        <NewsContainer onClick={onClick}>
            <Title>
                <h4>{title}</h4>
            </Title>
            <Info>
                <span className="time">{time}</span>
                <span className="person">{by}</span>
                <span className="score">score: {score}</span>
            </Info>
        </NewsContainer>
    )
}

export default ListItem;

// by, descendants, id, score, time, title, type, url