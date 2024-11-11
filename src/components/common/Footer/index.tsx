import React from "react";
import * as S from "./style";
import useAlert from "../../../util/hooks/useAlert";
import LogoImg from "../../../asset/Logo.png";
import useGetBrWidth from "../../../util/hooks/useGetBrWidth";

const Footer = () => {
  const { checkWidth } = useGetBrWidth();
  const { setIsAlertActive } = useAlert();
  return (
    <S.Footer>
      <S.MainWrap isMoblie={!checkWidth()}>
        {checkWidth() && (
          <S.Logo src={LogoImg} height="54px" margin="0 10rem" />
        )}
        <S.ContextWrap isMoblie={!checkWidth()}>
          <S.Context>주식회사 영자닷컴 | 대표자 : 박영민</S.Context>
          <S.Context>
            주소 : 대구광역시 수성구 알파시티 1로 160 SW융합테크비즈센터 409{" "}
            {checkWidth() ? `| ` : <br />}
            사업자 등록 번호 : 504-86-18651
          </S.Context>
          <S.Context>전화번호 : 053-474-3979 | 팩스 : 053-474-3979</S.Context>
          <S.Context>E-Mail(이메일) : safesearch080@gmail.com</S.Context>
          <S.Context>
            <S.Logo
              src={LogoImg}
              height={checkWidth() ? "21px" : "14px"}
              margin="0 10px 0 0"
            />
            Copyrightⓒ영자닷컴. All rights reserved.
          </S.Context>
          <S.Context>
            <br />
            <br />
            <br />
            <S.PrivactPolicy onClick={() => setIsAlertActive(true)}>
              개인정보 처리방침
            </S.PrivactPolicy>
          </S.Context>
        </S.ContextWrap>
      </S.MainWrap>
    </S.Footer>
  );
};

export default Footer;
