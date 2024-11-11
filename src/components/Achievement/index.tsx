import React from "react";
import YouTube from "react-youtube";
import * as S from "./style";
import useGetBrWidth from "../../util/hooks/useGetBrWidth";
import AgreementImg from "../../asset/Agreement.png";

const Achievement = () => {
  const { checkWidth } = useGetBrWidth();
  return (
    <S.MainWrap>
      <S.Title isMoblie={!checkWidth()}>이런걸 했어요</S.Title>
      <div>
        <S.ContentsWrap isMoblie={!checkWidth()}>
          <S.Explane isMoblie={!checkWidth()}>
            2024년 K-eco상생협력 우수과제
            <br />
            경진대회 발표 영상
          </S.Explane>
          <YouTube
            videoId={"Kg4s7NuzE3I"}
            opts={{
              width: checkWidth() ? "560" : "300",
              height: checkWidth() ? "315" : "200",
              playerVars: {
                autoplay: 0,
                rel: 0,
                modestbranding: 1,
                start: 8433,
              },
            }}
            onEnd={(e: any) => {
              e.target.stopVideo(0);
            }}
          />
        </S.ContentsWrap>
        <S.ContentsWrap isMoblie={!checkWidth()}>
          <S.Agreement src={AgreementImg} isMoblie={!checkWidth()} />
          <S.Explane isMoblie={!checkWidth()}>구미산단 협약</S.Explane>
        </S.ContentsWrap>
      </div>
    </S.MainWrap>
  );
};

export default Achievement;
