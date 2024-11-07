import React, { useState } from "react";
import * as S from "./style";

interface IFaqProps {
  index: number;
  title: string;
  context: string[];
}

const Faq = ({ index, title, context }: IFaqProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <S.MainWrap onClick={() => setIsActive(!isActive)}>
      <S.TitleWrap isActive={isActive}>
        <S.TitleContextWrap>
          <p>Q{index}.</p>
          <S.TitleContext>{title}</S.TitleContext>
        </S.TitleContextWrap>
        <S.ActiveBtn isActive={isActive} />
      </S.TitleWrap>
      {isActive && (
        <S.ContextForm>
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
