
const ListItem = (props) => {
    const {title, score, by, time} = props;

    return(
        <div className="container">
            <div className="title-box">
                <h3>{title}</h3>
                <span>{time}</span>
            </div>
            <div className="info">
                <p className="person">{by}</p>
                <p className="score">{score}</p>
            </div>
        </div>
    )
}

export default ListItem;

// by, descendants, id, score, time, title, type, url