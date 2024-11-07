import React from "react";
import * as S from "./style";

interface IPhone {
  image: string;
  margin?: string;
}

const Phone = ({ margin, image }: IPhone) => {
  return (
    <S.MainFrame margin={margin}>
      <S.SubFrame>
        <S.PhoneButton top="105px" isLeft />
        <S.PhoneButton top="180px" isLeft />
        <S.PhoneButton top="140px" isLeft={false} />
        <S.Image image={image} />
      </S.SubFrame>
    </S.MainFrame>
  );
};

export default Phone;
