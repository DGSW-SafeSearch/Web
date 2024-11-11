import React from "react";
import Button from "../common/Button";
import GooglePlay from "../../asset/GooglePlay.png";
import AppStore from "../../asset/Apple.png";
import * as S from "./style";
import Phone from "../common/Phone";
import MainForm from "../../asset/MainForm.png";
import LogoImg from "../../asset/Logo.png";

const MainInfo = () => {
  return (
    <S.MainWrap>
      <S.Background />
      <Phone image={MainForm} margin="0 0 0 -150px" />
      <S.InfoWrap>
        <S.LogoWrap>
          <S.Logo src={LogoImg} />
          <S.Introduce>
            화학물질을 사용하는 업무를 하고 계신다면
            <br />꼭 필요한 카스넘버 검색
          </S.Introduce>
        </S.LogoWrap>
        <S.BtnWrap>
          <Button
            context="App Store"
            image={AppStore}
            url="https://zrr.kr/WnSo"
          />
          <Button
            context="Google Play"
            image={GooglePlay}
            url="https://zrr.kr/Bxnh"
          />
        </S.BtnWrap>
        <S.Business />
        <S.Direction />
      </S.InfoWrap>
      <Phone image={MainForm} margin="0 -150px 0 0" />
    </S.MainWrap>
  );
};

export default MainInfo;
