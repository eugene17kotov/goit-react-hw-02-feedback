import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { StyledButtonList } from 'components/FeedbackOptions/FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback, onResetFeedback }) {
  return (
    <StyledButtonList>
      {options.map(buttonTitle => (
        <li key={buttonTitle}>
          <Button title={buttonTitle} onLeaveFeedback={onLeaveFeedback} />
        </li>
      ))}

      <li key="reset">
        <Button title="reset" onResetFeedback={onResetFeedback} />
      </li>
    </StyledButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func,
};
