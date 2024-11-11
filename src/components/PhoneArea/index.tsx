import React from "react";
import Phone from "../common/Phone";
import Info from "../../asset/Info.png";
import Search from "../../asset/Search.png";
import * as S from "./style";
import useGetBrWidth from "../../util/hooks/useGetBrWidth";

const PhoneArea = () => {
  const { checkWidth } = useGetBrWidth();
  return (
    <div>
      <S.MainWrap isMoblie={!checkWidth()}>
        <S.PhoneWrap isMoblie={!checkWidth()}>
          <S.Context>
            CAS No.를
            <br />
            사진으로
            <br />
            찾을 수 있어요
          </S.Context>
          <Phone image={Search} />
        </S.PhoneWrap>
        <S.PhoneWrap isMoblie={!checkWidth()}>
          <Phone image={Info} />
          <S.Context isRight>
            여러가지
            <br />
            화학물질정보를
            <br />
            얻을수 있어요!
          </S.Context>
        </S.PhoneWrap>
      </S.MainWrap>
      <S.Introduce isMoblie={!checkWidth()}>
        시약병에 있는 CAS No. 를 폰으로 바로 찍어
        <br />
        화학물질정보를 편하게 검색 하세요
      </S.Introduce>
    </div>
  );
};

export default PhoneArea;
