import { useAtom } from "jotai";
import { AlertAtom } from "../../store/alert";

const useAlert = () => {
  const [isAlertActive, setIsAlertActive] = useAtom<boolean>(AlertAtom);

  return { isAlertActive, setIsAlertActive };
};

export default useAlert;
