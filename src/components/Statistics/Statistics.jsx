import PropTypes from "prop-types";
import { Stats, Results } from './Statistics.styled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <Stats>
          <Results>Good: {good}</Results>
          <Results>Neutral: {neutral}</Results>
          <Results>Bad: {bad}</Results>
          <Results>Total: {total}</Results>
          <Results>Positive feedback: {positivePercentage}%</Results>
    </Stats>
)
Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}
export default Statistics;