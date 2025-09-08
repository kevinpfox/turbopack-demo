import { FC, memo } from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  .footerContent {
    font-family: ${(props): string => props.theme.bodyFontFamily};
    background: ${(props): string => props.theme.bcNavy50} no-repeat bottom left;
    height: 100px;
    width: 100%;
    border: 1px solid ${(props): string => props.theme.bcPurple};
  }
`;

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className="footerContent">FOOTER CONTENT</div>
    </StyledFooter>
  );
};

export default memo(Footer);
