import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 150px;
  padding: 10px 25px 25px 0;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0.1em;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerStyles}
`;