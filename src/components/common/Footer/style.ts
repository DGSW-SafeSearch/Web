import styled from "styled-components";
import LogoImg from "../../../asset/Logo.png";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.white50};
  width: 100%;
  height: 300px;
`;

export const Logo = styled.div<{
  width: string;
  height: string;
  margin?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-image: url(${LogoImg});
  background-size: cover;
  ${({ margin }) => `margin : ${margin}`}
`;

export const Context = styled.p`
  font-size: 1rem;
  letter-spacing: 0.05rem;

  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const PrivactPolicy = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MainWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
