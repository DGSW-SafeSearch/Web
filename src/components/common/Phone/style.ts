import styled from "styled-components";

export const MainFrame = styled.div<{ margin?: string }>`
  width: 350px;
  height: 700px;
  margin: ${({ margin }) => margin};
  border-radius: 2rem;
  box-shadow: -0.75rem 0.75rem 1rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: -2;
`;

export const SubFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.border10};
  background-color: ${({ theme }) => theme.white20};
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PhoneButton = styled.div<{ top: string; isLeft: boolean }>`
  top: 0;
  left: 0;
  position: absolute;
  margin-left: ${({ isLeft }) => (isLeft ? "-5px" : "255px")};
  margin-top: ${({ top }) => top};
  z-index: -1;
  width: 100px;
  height: ${({ isLeft }) => (isLeft ? "60px" : "80px")};
  background-color: ${({ theme }) => theme.white20};
  border: 1px solid ${({ theme }) => theme.border10};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-color: gray;
  border-radius: 1rem;
  background-image: url(${({ image }) => image});
  background-size: cover;
`;
