import styled from "styled-components";

const StyledText = styled.p`
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    :not(:last-child) {
        margin-bottom: ${p=>p.theme.space[4]}px;
    }
`;

const StyledCount = styled.span`
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.grey}`};
    border-radius: ${p=>p.theme.radii.sm};
    padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
    margin-left: ${p=>p.theme.space[2]}px;
`;

export {StyledText, StyledCount}