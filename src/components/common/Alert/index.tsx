import React from "react";
import * as S from "./style";
import useAlert from "../../../util/hooks/useAlert";
import useGetBrWidth from "../../../util/hooks/useGetBrWidth";
// import { privacyPolicy } from "../../../util/constant/privacyPolicy";

const Alert = () => {
  const { checkWidth } = useGetBrWidth();
  const { setIsAlertActive } = useAlert();
  return (
    <S.MainWrap>
      <S.Alert isMoblie={!checkWidth()}>
        <S.Title isMoblie={!checkWidth()}>개인정보 처리방침</S.Title>
        <S.Context isMoblie={!checkWidth()}>
          개인정보처리방침 v1.0.0 <br />
          주식회사 영자닷컴(이하, "회사"라 함)은 세이프서치(이하, “서비스”라
          함)를 운영합니다. <br />
          <br />
          1. 개인정보 수집 및 이용 목적 본 서비스는 사용자의 데이터를 수집하지
          않습니다. <br />
          <br />
          2. 수집하는 개인정보 항목 및 수집 방법 본 서비스는 사용자의 데이터를
          수집하지 않습니다. <br />
          <br />
          3. 개인정보의 보유 및 이용 기간 본 서비스는 사용자의 데이터를 수집하지
          않으므로, 보유 및 이용 기간에 대한 사항은 없습니다. <br />
          <br />
          4. 개인정보의 제3자 제공 본 서비스는 사용자의 데이터를 수집하지
          않으므로, 제3자에게 제공하지 않습니다. <br />
          <br />
          5. 개인정보 파기 절차 및 방법 본 서비스는 사용자의 데이터를 수집하지
          않으므로, 파기 절차 및 방법에 대한 사항은 없습니다. <br />
          <br />
          마지막 업데이트: 2024.06.04
          <br />
          <br />
        </S.Context>
        <S.Button
          onClick={() => setIsAlertActive(false)}
          isMoblie={!checkWidth()}
        >
          확인
        </S.Button>
      </S.Alert>
    </S.MainWrap>
  );
};

export default Alert;
