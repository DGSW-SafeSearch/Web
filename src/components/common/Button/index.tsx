import React from "react";
import * as S from "./style";
import useGetBrWidth from "../../../util/hooks/useGetBrWidth";

interface IButtonProps {
  context: string;
  image: string;
  url: string;
}

const Button = ({ context, image, url }: IButtonProps) => {
  const { checkWidth } = useGetBrWidth();
  return (
    <S.MainForm onClick={() => window.open(url)} isMoblie={!checkWidth()}>
      <S.SubForm>
        <S.ButtonImg image={image} isMoblie={!checkWidth()} />
        <p>{context}</p>
      </S.SubForm>
    </S.MainForm>
  );
};

export default Button;
