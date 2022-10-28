export const Comment = (props) => {
    const { id, by, text } = props; //kids

    return(
        <div>
            <p>{id}</p>
            <p>{by}</p>
            <p>{text}</p>
        </div>
    )
}