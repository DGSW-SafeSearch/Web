import React from "react";
import MainInfo from "../components/MainInfo";
import PhoneArea from "../components/PhoneArea";
import Achievement from "../components/Achievement";
import FaqList from "../components/FaqList";
import Footer from "../components/common/Footer";
import Alert from "../components/common/Alert";
import useAlert from "../util/hooks/useAlert";

const Main = () => {
  const { isAlertActive } = useAlert();
  return (
    <>
      <MainInfo />
      <PhoneArea />
      <Achievement />
      <FaqList />
      {isAlertActive && <Alert />}
      <Footer />
    </>
  );
};

export default Main;
