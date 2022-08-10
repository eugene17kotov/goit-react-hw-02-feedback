import PropTypes from 'prop-types';
import { StyledMessage } from 'components/Notification/Notification.styled';

export function Notification({ message }) {
  return (
    <>
      <StyledMessage>{message}</StyledMessage>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
