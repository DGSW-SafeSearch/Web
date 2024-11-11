import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.white50};
  width: 100%;
  height: 300px;
`;

export const Logo = styled.img<{
  height: string;
  margin?: string;
}>`
  height: ${({ height }) => height};
  background-size: cover;
  ${({ margin }) => `margin : ${margin}`}
`;

export const ContextWrap = styled.div<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1rem")};
`;

export const Context = styled.p`
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

export const MainWrap = styled.div<{ isMoblie: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  ${({ isMoblie }) => isMoblie && `justify-content:center;`}
`;
