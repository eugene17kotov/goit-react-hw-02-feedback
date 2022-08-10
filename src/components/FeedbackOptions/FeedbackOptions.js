import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { StyledButtonList } from 'components/FeedbackOptions/FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback, onResetFeedback }) {
  const { good, neutral, bad } = options;
  return (
    <StyledButtonList>
      <li>
        <Button title={good} onLeaveFeedback={onLeaveFeedback} />
      </li>
      <li>
        <Button title={neutral} onLeaveFeedback={onLeaveFeedback} />
      </li>
      <li>
        <Button title={bad} onLeaveFeedback={onLeaveFeedback} />
      </li>
      <li>
        <Button title={'reset'} onResetFeedback={onResetFeedback} />
      </li>
    </StyledButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func,
};
