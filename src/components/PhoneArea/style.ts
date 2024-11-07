import styled from "styled-components";

export const Context = styled.p<{ isRight?: boolean }>`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  width: 100%;
  line-height: 3rem;

  ${({ isRight }) => isRight && `text-align:right;`}
`;

export const PhoneWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;
  flex-direction: column;
  height: 1000px;
  width: 400px;
`;

export const MainWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Introduce = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  margin: 10rem 0;
`;
