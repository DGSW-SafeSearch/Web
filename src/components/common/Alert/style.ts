import styled from "styled-components";

export const Alert = styled.div<{ isMoblie: boolean }>`
  width: ${({ isMoblie }) => (isMoblie ? "70%" : "700px")};
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: center;
  margin: auto;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.white10};
  border: 1px solid ${({ theme }) => theme.border10};
`;

export const Title = styled.p<{ isMoblie: boolean }>`
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "2rem")};
  color: ${({ theme }) => theme.personal50};
  font-weight: 600;
`;

export const Context = styled.p<{ isMoblie: boolean }>`
  margin-top: 1rem;
  font-size: ${({ isMoblie }) => (isMoblie ? "0.75rem" : "1.25rem")};

  color: ${({ theme }) => theme.personal50};
`;

export const Button = styled.button<{ isMoblie: boolean }>`
  cursor: pointer;
  box-shadow: none;
  border: none;
  margin-top: 1rem;
  font-size: ${({ isMoblie }) => (isMoblie ? "1rem" : "1.5rem")};
  border-radius: 1rem;
  padding: 0.75rem 3rem;
  color: ${({ theme }) => theme.white20};
  background-color: ${({ theme }) => theme.personal10};
  &:hover {
    background-color: ${({ theme }) => theme.personal30};
  }
  &:active {
    background-color: ${({ theme }) => theme.personal50};
  }
`;

export const MainWrap = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
