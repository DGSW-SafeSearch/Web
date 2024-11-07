interface IFaqContents {
  title: string;
  context: string[];
}

export const faqContents: IFaqContents[] = [
  {
    title: "세이프서치 무료로 사용할 수 있나요?",
    context: ["네! 무료로 사용하실 수 있습니다."],
  },
  {
    title: "사진이 찍히지 않아요. 어떻게 해야되나요?",
    context: [
      "설정 -> 애플리케이션-> SafeSearch검색 -> 권한 클릭 -> 사진 및 동영상, 알림, 카메라 허용 후 재실행 해보세요.",
    ],
  },
  {
    title: "CAS No.는 같은데 이름이 틀려요",
    context: [
      "화학 구조 표현의 차이: 동일한 구조를 가지더라도 화학식의 표현 방식이 다를 수 있습니다. 이 경우 다양한 이름이 붙을 수 있습니다.",
      "용도에 따른 이름: 같은 화학 물질이라도 사용되는 산업이나 용도에 따라 다른 이름으로 불리기도 합니다.",
    ],
  },
];
