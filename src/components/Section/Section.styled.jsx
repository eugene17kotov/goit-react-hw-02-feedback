import styled from "styled-components";

const StyledTitle = styled.h2`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    text-decoration: 1px underline;
`;

export {StyledTitle}