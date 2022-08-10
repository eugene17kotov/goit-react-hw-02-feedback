import PropTypes from 'prop-types';
import { StyledTitle } from 'components/Section/Section.styled';
import { Box } from 'utils/Box';

export function Section({ title, children }) {
  return (
    <Box mb={4}>
      <StyledTitle>{title}</StyledTitle>

      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
