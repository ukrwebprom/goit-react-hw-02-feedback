import PropTypes from "prop-types";
import { Results } from "components/App.styled";

const Notification = ({message}) => 
<Results>{message}</Results>

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification