import PropTypes from "prop-types";
import {ButtonsList, Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonsList>
        {options.map(item => 
            <Button key={item} onClick={() => onLeaveFeedback(item)}>{item}</Button>)
        
        }
        </ButtonsList>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
        

export default FeedbackOptions
