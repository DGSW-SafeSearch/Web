import React from "react";
import * as S from "./style";

interface IButtonProps {
  context: string;
  image: string;
  url: string;
}

const Button = ({ context, image, url }: IButtonProps) => {
  return (
    <S.MainForm onClick={() => window.open(url)}>
      <S.SubForm>
        <S.ButtonImg image={image} />
        <p>{context}</p>
      </S.SubForm>
    </S.MainForm>
  );
};

export default Button;
