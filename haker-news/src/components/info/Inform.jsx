export const Information = (props) => {
    const { url, title, time, by, descendants} = props;

    return(
        <div className="item-container">
            <div className="item-header">
                <h4>{title}</h4>
                <a href={url}>{url}</a>
            </div>
            <div className="item-info">
                <p>Published at {time}</p>
                <p>Author: {by}</p> 
                <p>Comments: {descendants}</p>
            </div>
        </div>
        
    )
}

// url, title, time, by, счетчик комментов, kids (список основных комментариев)