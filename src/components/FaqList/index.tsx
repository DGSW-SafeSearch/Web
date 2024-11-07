import React from "react";
import Faq from "../common/Faq";
import { faqContents } from "../../util/constant/faqContents";
import * as S from "./style";

const FaqList = () => {
  return (
    <S.MainWrap>
      <S.Title>자주 묻는 질문</S.Title>
      <S.FaqWrap>
        {faqContents.map((value, idx) => (
          <Faq index={idx + 1} title={value.title} context={value.context} />
        ))}
      </S.FaqWrap>
    </S.MainWrap>
  );
};

export default FaqList;
