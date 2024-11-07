import styled from "styled-components";

export const MainForm = styled.div`
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 1rem;
  font-size: 1.75rem;
  display: inline-block;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white0};
`;

export const SubForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonImg = styled.div<{ image: string }>`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;
