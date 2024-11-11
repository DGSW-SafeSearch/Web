import React, { useState } from "react";
import * as S from "./style";
import useGetBrWidth from "../../../util/hooks/useGetBrWidth";
import DirectionImg from "../../../asset/Direction.png";

interface IFaqProps {
  index: number;
  title: string;
  context: string[];
}

const Faq = ({ index, title, context }: IFaqProps) => {
  const { checkWidth } = useGetBrWidth();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <S.MainWrap onClick={() => setIsActive(!isActive)}>
      <S.TitleWrap isActive={isActive} isMoblie={!checkWidth()}>
        <S.TitleContextWrap>
          <p>Q{index}.</p>
          <S.TitleContext isMoblie={!checkWidth()}>{title}</S.TitleContext>
        </S.TitleContextWrap>
        <S.ActiveBtn
          src={DirectionImg}
          isActive={isActive}
          isMoblie={!checkWidth()}
        />
      </S.TitleWrap>
      {isActive && (
        <S.ContextForm isMoblie={!checkWidth()}>
          A. {context[0]}
          {context.map((context, idx) => {
            if (idx != 0) return <S.SubContext>{context}</S.SubContext>;
          })}
        </S.ContextForm>
      )}
    </S.MainWrap>
  );
};

export default Faq;
