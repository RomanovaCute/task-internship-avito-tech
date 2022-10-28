import error from '../../../assets/images/notfound.jpg'
import { ErrorContainer } from './styles'

export const NotFound = () => {
    return(
        <ErrorContainer>
            <img src={error} alt='error'></img>
        </ErrorContainer>
    )
}