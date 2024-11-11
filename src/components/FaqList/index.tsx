import React from "react";
import Faq from "../common/Faq";
import { faqContents } from "../../util/constant/faqContents";
import * as S from "./style";
import useGetBrWidth from "../../util/hooks/useGetBrWidth";

const FaqList = () => {
  const { checkWidth } = useGetBrWidth();
  return (
    <S.MainWrap isMoblie={!checkWidth()}>
      <S.Title isMoblie={!checkWidth()}>자주 묻는 질문</S.Title>
      <S.FaqWrap isMoblie={!checkWidth()}>
        {faqContents.map((value, idx) => (
          <Faq index={idx + 1} title={value.title} context={value.context} />
        ))}
      </S.FaqWrap>
    </S.MainWrap>
  );
};

export default FaqList;
