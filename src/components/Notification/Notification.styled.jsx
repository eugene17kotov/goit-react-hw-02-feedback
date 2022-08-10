import styled from "styled-components";

const StyledMessage = styled.div`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    color: ${p => p.theme.colors.grey};

`;

export {StyledMessage}