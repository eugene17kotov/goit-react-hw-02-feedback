import PropTypes from 'prop-types';
import { StyledButton } from 'components/Button/Button.styled';

export function Button({ title, onLeaveFeedback, onResetFeedback }) {
  return (
    <StyledButton
      type="button"
      onClick={() => {
        title !== 'reset' ? onLeaveFeedback(title) : onResetFeedback();
      }}
    >
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
  onResetFeedback: PropTypes.func,
};
