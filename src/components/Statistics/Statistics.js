import PropTypes from 'prop-types';
import {
  StyledText,
  StyledCount,
} from 'components/Statistics/Statistics.styled';
// import { Box } from 'utils/Box';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StyledText>
        Good: <StyledCount>{good}</StyledCount>
      </StyledText>
      <StyledText>
        Neutral: <StyledCount>{neutral}</StyledCount>
      </StyledText>
      <StyledText>
        Bad: <StyledCount>{bad}</StyledCount>
      </StyledText>
      <StyledText>
        Total: <StyledCount>{total}</StyledCount>
      </StyledText>
      <StyledText>
        Positive feedback:{' '}
        <StyledCount>{positivePercentage.toFixed(2)}%</StyledCount>
      </StyledText>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
