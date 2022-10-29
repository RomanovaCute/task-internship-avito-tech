import { ItemContainer, ItemInfo } from './styles'

export const Information = (props) => {
    const { url, title, time, by, descendants} = props;

    return(
        <ItemContainer>
            <div className="item-header">
                <h4>{title}</h4>
                <a href={url}>{url}</a>
            </div>
            <ItemInfo>
                <p className='elem'>Published at {time}</p>
                <p className='elem'>Author: {by}</p> 
                <p className='elem'>Comments: {descendants}</p>
            </ItemInfo>
        </ItemContainer>
        
    )
}

// url, title, time, by, счетчик комментов, kids (список основных комментариев)