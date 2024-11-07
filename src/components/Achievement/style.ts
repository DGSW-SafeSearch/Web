import styled from "styled-components";
import AgreementImg from "../../asset/Agreement.png";

export const Explane = styled.div`
  width: 500px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.personal50};
  text-align: center;
`;

export const ContentsWrap = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2) {
    margin-top: 12rem;
  }
`;

export const Agreement = styled.div`
  background-image: url(${AgreementImg});
  width: 560px;
  height: 315px;
  background-size: cover;
`;

export const MainWrap = styled.div`
  background-color: ${({ theme }) => theme.white10};
  padding-top: 10rem;
  padding-bottom: 20rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.personal50};
  margin-left: 20%;
  margin-bottom: 7rem;
`;
